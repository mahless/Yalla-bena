import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  GameDefinition,
  GameId,
  GameSession,
  Player,
  UserSettings,
  CardMood,
  PlayedCardRecord,
  Card,
} from './types/game';
import { GAMES, GAME_ORDER } from './content/games';
import { getCardsForGame, getCardById } from './content/cards';
import {
  getStoredSettings,
  saveStoredSettings,
  getStoredFavorites,
  toggleStoredFavorite,
  getStoredHistory,
  addStoredHistoryRecord,
  clearStoredHistory,
  getStoredPlayers,
  saveStoredPlayers,
  getStoredSession,
  saveStoredSession,
  smartFreshShuffle,
  markCardSeen,
  clearCardMemory,
  clearStoredFavorites,
} from './services/storage';
import { useSound } from './hooks/useSound';
import { useHaptics } from './hooks/useHaptics';
import { HomeScreen } from './components/home/HomeScreen';
import { GameLobbyModal } from './components/game/GameLobbyModal';
import { GameplayScreen } from './components/game/GameplayScreen';
import { FavoritesModal } from './components/favorites/FavoritesModal';
import { HistorySheet } from './components/history/HistorySheet';
import { SettingsSheet } from './components/settings/SettingsSheet';
import { PlayerManagerModal } from './components/players/PlayerManagerModal';

// Fisher-Yates smart shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  // Persistence state
  const [settings, setSettings] = useState<UserSettings>(() => getStoredSettings());
  const [players, setPlayers] = useState<Player[]>(() => getStoredPlayers());
  const [favorites, setFavorites] = useState<string[]>(() => getStoredFavorites());
  const [history, setHistory] = useState<PlayedCardRecord[]>(() => getStoredHistory());
  const [session, setSession] = useState<GameSession | null>(() => getStoredSession());

  // Navigation & Modals state
  const [selectedGameId, setSelectedGameId] = useState<GameId | null>(null);
  const [isLobbyOpen, setIsLobbyOpen] = useState<boolean>(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isPlayerManagerOpen, setIsPlayerManagerOpen] = useState<boolean>(false);
  const [isGameplayActive, setIsGameplayActive] = useState<boolean>(() => Boolean(getStoredSession()));

  // Sound and Haptic feedback hooks
  const sound = useSound(settings.soundEnabled);
  const haptics = useHaptics(settings.hapticsEnabled);

  // Always enforce RTL Arabic document attributes and initialize history state
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    try {
      if (!window.history.state || !window.history.state.view) {
        window.history.replaceState({ view: 'home' }, '');
      }
    } catch {}
  }, []);

  // Android / Browser Hardware Back Button handling via PopState
  useEffect(() => {
    const handlePopState = () => {
      // Close top-most modal or active game in sequence
      if (isPlayerManagerOpen) {
        setIsPlayerManagerOpen(false);
      } else if (isSettingsOpen) {
        setIsSettingsOpen(false);
      } else if (isHistoryOpen) {
        setIsHistoryOpen(false);
      } else if (isFavoritesOpen) {
        setIsFavoritesOpen(false);
      } else if (isLobbyOpen) {
        setIsLobbyOpen(false);
      } else if (isGameplayActive) {
        setIsGameplayActive(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [
    isPlayerManagerOpen,
    isSettingsOpen,
    isHistoryOpen,
    isFavoritesOpen,
    isLobbyOpen,
    isGameplayActive,
  ]);

  // Push history state whenever a view opens so Android back button works cleanly
  const pushStateForView = useCallback((viewName: string) => {
    try {
      window.history.pushState({ view: viewName }, '');
    } catch {}
  }, []);

  // Synchronized view closer that keeps the browser/hardware back stack in sync
  const closeView = useCallback((fallbackCloser: () => void) => {
    try {
      if (window.history.state && window.history.state.view && window.history.state.view !== 'home') {
        window.history.back();
        return;
      }
    } catch {}
    fallbackCloser();
  }, []);

  // Update settings handler
  const handleUpdateSettings = useCallback((newSettings: UserSettings) => {
    setSettings(newSettings);
    saveStoredSettings(newSettings);
    sound.tap();
    haptics.light();
  }, [sound, haptics]);

  // Reset all local progress
  const handleResetProgress = useCallback(() => {
    setSession(null);
    saveStoredSession(null);
    clearStoredHistory();
    clearCardMemory();
    clearStoredFavorites();
    setHistory([]);
    setFavorites([]);
    setIsGameplayActive(false);
    setIsSettingsOpen(false);
    sound.shuffle();
    haptics.heavy();
  }, [sound, haptics]);

  // Reset active session only
  const handleResetActiveSession = useCallback(() => {
    setSession(null);
    saveStoredSession(null);
    sound.shuffle();
    haptics.heavy();
  }, [sound, haptics]);

  // Manage players
  const handleSavePlayers = useCallback((newPlayers: Player[]) => {
    setPlayers(newPlayers);
    saveStoredPlayers(newPlayers);
    if (session) {
      const updatedSession = { ...session, players: newPlayers };
      setSession(updatedSession);
      saveStoredSession(updatedSession);
    }
  }, [session]);

  // Toggle favorite
  const handleToggleFavorite = useCallback((cardId: string) => {
    const isNowFav = toggleStoredFavorite(cardId);
    setFavorites(getStoredFavorites());
    sound.favorite(isNowFav);
    haptics.flip();
  }, [sound, haptics]);

  // Clear all favorites
  const handleClearAllFavorites = useCallback(() => {
    clearStoredFavorites();
    setFavorites([]);
    sound.tap();
    haptics.medium();
  }, [sound, haptics]);

  // Clear history
  const handleClearHistory = useCallback(() => {
    clearStoredHistory();
    setHistory([]);
    sound.tap();
    haptics.medium();
  }, [sound, haptics]);

  // Open game lobby
  const handleSelectGame = useCallback((gameId: GameId) => {
    setSelectedGameId(gameId);
    setIsLobbyOpen(true);
    pushStateForView(`lobby-${gameId}`);
    sound.tap();
    haptics.light();
  }, [pushStateForView, sound, haptics]);

  // Start new game session from lobby
  const handleStartGame = useCallback(
    ({
      deckFilter,
      moodFilter,
      turnMode,
    }: {
      deckFilter: string;
      moodFilter: CardMood | 'all';
      turnMode: boolean;
    }) => {
      if (!selectedGameId) return;

      const rawCards = getCardsForGame(selectedGameId, deckFilter, moodFilter);
      if (rawCards.length === 0) return;

      const shuffled = smartFreshShuffle(rawCards);
      const newSession: GameSession = {
        gameId: selectedGameId,
        deckFilter,
        moodFilter,
        cardIds: shuffled.map((c) => c.id),
        currentIndex: 0,
        isFlipped: false,
        historyCardIds: [],
        turnMode,
        players,
        currentTurnPlayerIndex: 0,
        startTime: Date.now(),
      };

      setSession(newSession);
      saveStoredSession(newSession);
      setIsLobbyOpen(false);
      setIsGameplayActive(true);
      pushStateForView(`gameplay-${selectedGameId}`);

      sound.shuffle();
      haptics.medium();
    },
    [selectedGameId, players, pushStateForView, sound, haptics]
  );

  // Resume active session
  const handleResumeSession = useCallback(() => {
    if (!session) return;
    setIsGameplayActive(true);
    pushStateForView(`gameplay-${session.gameId}`);
    sound.tap();
    haptics.light();
  }, [session, pushStateForView, sound, haptics]);

  // Quick Play
  const handleQuickPlay = useCallback(() => {
    const randomGameId = GAME_ORDER[Math.floor(Math.random() * GAME_ORDER.length)];
    const rawCards = getCardsForGame(randomGameId, 'all', 'all');
    const shuffled = smartFreshShuffle(rawCards);

    const newSession: GameSession = {
      gameId: randomGameId,
      deckFilter: 'all',
      moodFilter: 'all',
      cardIds: shuffled.map((c) => c.id),
      currentIndex: 0,
      isFlipped: false,
      historyCardIds: [],
      turnMode: GAMES[randomGameId].defaultTurnMode,
      players,
      currentTurnPlayerIndex: 0,
      startTime: Date.now(),
    };

    setSession(newSession);
    saveStoredSession(newSession);
    setIsGameplayActive(true);
    pushStateForView(`gameplay-${randomGameId}`);

    sound.shuffle();
    haptics.heavy();
  }, [players, pushStateForView, sound, haptics]);

  // Flip card
  const handleFlipCard = useCallback(() => {
    if (!session) return;
    const currentCardId = session.cardIds[session.currentIndex];
    if (currentCardId) {
      markCardSeen(currentCardId);
    }
    const updated = { ...session, isFlipped: !session.isFlipped };
    setSession(updated);
    saveStoredSession(updated);
    sound.cardFlip();
    haptics.flip();
  }, [session, sound, haptics]);

  // Next card
  const handleNextCard = useCallback(() => {
    if (!session) return;
    const currentCardId = session.cardIds[session.currentIndex];
    const currentCard = currentCardId ? getCardById(currentCardId) : undefined;

    // Record in history & card memory
    if (currentCard) {
      markCardSeen(currentCard.id);
      const currentPlayer =
        session.turnMode && session.players.length > 0
          ? session.players[session.currentTurnPlayerIndex % session.players.length]
          : undefined;

      const record: PlayedCardRecord = {
        cardId: currentCard.id,
        gameId: currentCard.gameId,
        playedAt: Date.now(),
        playerName: currentPlayer?.name,
        liked: favorites.includes(currentCard.id),
      };
      addStoredHistoryRecord(record);
      setHistory(getStoredHistory());
    }

    const nextIndex = session.currentIndex + 1;
    const isCompleted = nextIndex >= session.cardIds.length;

    const nextTurnPlayerIndex = session.turnMode
      ? (session.currentTurnPlayerIndex + 1) % session.players.length
      : session.currentTurnPlayerIndex;

    const updated: GameSession = {
      ...session,
      currentIndex: nextIndex,
      isFlipped: false,
      currentTurnPlayerIndex: nextTurnPlayerIndex,
      historyCardIds: [currentCardId, ...session.historyCardIds],
    };

    setSession(updated);
    saveStoredSession(updated);

    if (isCompleted) {
      sound.deckComplete();
      haptics.success();
    } else {
      sound.cardSlide();
      haptics.light();
    }
  }, [session, favorites, sound, haptics]);

  // Previous card
  const handlePrevCard = useCallback(() => {
    if (!session || session.currentIndex <= 0) return;
    const prevIndex = session.currentIndex - 1;
    const prevTurnPlayerIndex = session.turnMode
      ? (session.currentTurnPlayerIndex - 1 + session.players.length) % session.players.length
      : session.currentTurnPlayerIndex;

    const updated: GameSession = {
      ...session,
      currentIndex: prevIndex,
      isFlipped: false,
      currentTurnPlayerIndex: prevTurnPlayerIndex,
    };

    setSession(updated);
    saveStoredSession(updated);
    sound.cardSlide();
    haptics.light();
  }, [session, sound, haptics]);

  // Reshuffle deck
  const handleShuffleDeck = useCallback(() => {
    if (!session) return;
    // Reshuffle all cards prioritizing fresh/unplayed ones
    const rawCards = getCardsForGame(session.gameId, session.deckFilter, session.moodFilter);
    const shuffled = smartFreshShuffle(rawCards);

    const updated: GameSession = {
      ...session,
      cardIds: shuffled.map((c) => c.id),
      currentIndex: 0,
      isFlipped: false,
    };

    setSession(updated);
    saveStoredSession(updated);
    sound.shuffle();
    haptics.heavy();
  }, [session, sound, haptics]);

  // Restart deck
  const handleRestartDeck = useCallback(() => {
    handleShuffleDeck();
  }, [handleShuffleDeck]);

  // Exit gameplay back to home
  const handleExitGame = useCallback(() => {
    closeView(() => setIsGameplayActive(false));
    sound.tap();
  }, [closeView, sound]);

  // Play favorites custom session
  const handlePlayFavorites = useCallback(
    (cardIds: string[]) => {
      if (cardIds.length === 0) return;
      const shuffled = shuffleArray(cardIds);
      const firstCard = getCardById(cardIds[0]);
      const gameId = firstCard?.gameId || 'open-topic';

      const favSession: GameSession = {
        gameId,
        deckFilter: 'favorites',
        moodFilter: 'all',
        cardIds: shuffled,
        currentIndex: 0,
        isFlipped: false,
        historyCardIds: [],
        turnMode: false,
        players,
        currentTurnPlayerIndex: 0,
        startTime: Date.now(),
      };

      setSession(favSession);
      saveStoredSession(favSession);
      setIsFavoritesOpen(false);
      setIsGameplayActive(true);
      pushStateForView('gameplay-favorites');
      sound.shuffle();
      haptics.heavy();
    },
    [players, pushStateForView, sound, haptics]
  );

  // Cards for current active session
  const currentSessionCards = useMemo(() => {
    if (!session) return [];
    return session.cardIds
      .map((id: string) => getCardById(id))
      .filter((c): c is Card => Boolean(c));
  }, [session]);

  const selectedGame = selectedGameId ? GAMES[selectedGameId] : null;
  const activeSessionGame = session && session.gameId in GAMES ? GAMES[session.gameId as GameId] : null;

  return (
    <div className="min-h-[100dvh] w-full bg-[#FAF8F5] text-stone-900 flex flex-col justify-start overflow-x-hidden">
      {/* Screen Routing */}
      {isGameplayActive && session && activeSessionGame ? (
        <GameplayScreen
          session={session}
          game={activeSessionGame}
          cards={currentSessionCards}
          isFavorite={(id: string) => favorites.includes(id)}
          onToggleFavorite={handleToggleFavorite}
          onNextCard={handleNextCard}
          onPrevCard={handlePrevCard}
          onFlipCard={handleFlipCard}
          onShuffleDeck={handleShuffleDeck}
          onRestartDeck={handleRestartDeck}
          onExitGame={handleExitGame}
          onOpenHistory={() => {
            setIsHistoryOpen(true);
            pushStateForView('history');
          }}
        />
      ) : (
        <HomeScreen
          onSelectGame={handleSelectGame}
          activeSession={session}
          onResumeSession={handleResumeSession}
          onResetActiveSession={handleResetActiveSession}
          onQuickPlay={handleQuickPlay}
          onOpenSettings={() => {
            setIsSettingsOpen(true);
            pushStateForView('settings');
          }}
          onOpenFavorites={() => {
            setIsFavoritesOpen(true);
            pushStateForView('favorites');
          }}
          onOpenHistory={() => {
            setIsHistoryOpen(true);
            pushStateForView('history');
          }}
          onOpenPlayers={() => {
            setIsPlayerManagerOpen(true);
            pushStateForView('players');
          }}
          players={players}
          favoritesCount={favorites.length}
        />
      )}

      {/* Game Lobby Modal */}
      <GameLobbyModal
        isOpen={isLobbyOpen}
        onClose={() => closeView(() => setIsLobbyOpen(false))}
        game={selectedGame}
        players={players}
        onOpenPlayerManager={() => {
          setIsPlayerManagerOpen(true);
          pushStateForView('players');
        }}
        onStartGame={handleStartGame}
      />

      {/* Favorites Modal */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => closeView(() => setIsFavoritesOpen(false))}
        favorites={favorites}
        onRemoveFavorite={handleToggleFavorite}
        onClearAllFavorites={handleClearAllFavorites}
        onPlayFavoritesGame={handlePlayFavorites}
      />

      {/* History Sheet */}
      <HistorySheet
        isOpen={isHistoryOpen}
        onClose={() => closeView(() => setIsHistoryOpen(false))}
        history={history}
        onClearHistory={handleClearHistory}
      />

      {/* Settings Sheet */}
      <SettingsSheet
        isOpen={isSettingsOpen}
        onClose={() => closeView(() => setIsSettingsOpen(false))}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onResetProgress={handleResetProgress}
      />

      {/* Players Manager Modal */}
      <PlayerManagerModal
        isOpen={isPlayerManagerOpen}
        onClose={() => closeView(() => setIsPlayerManagerOpen(false))}
        players={players}
        onSavePlayers={handleSavePlayers}
      />
    </div>
  );
}
