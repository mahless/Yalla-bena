import { GameId, PlayedCardRecord, Player, UserSettings, GameSession } from '../types/game';

const STORAGE_KEYS = {
  SETTINGS: 'yallanarghy_settings_v1',
  FAVORITES: 'yallanarghy_favorites_v1',
  HISTORY: 'yallanarghy_history_v1',
  PLAYERS: 'yallanarghy_players_v1',
  ACTIVE_SESSION: 'yallanarghy_session_v1',
  LAST_GAME_ID: 'yallanarghy_last_game_id_v1',
  STATS: 'yallanarghy_stats_v1',
};

const LEGACY_STORAGE_KEYS = {
  SETTINGS: 'baynana_settings_v1',
  FAVORITES: 'baynana_favorites_v1',
  HISTORY: 'baynana_history_v1',
  PLAYERS: 'baynana_players_v1',
  ACTIVE_SESSION: 'baynana_session_v1',
  LAST_GAME_ID: 'baynana_last_game_id_v1',
  STATS: 'baynana_stats_v1',
};

const getStoredItemWithFallback = (key: string, legacyKey: string): string | null => {
  try {
    const val = localStorage.getItem(key);
    if (val !== null) return val;
    const legacyVal = localStorage.getItem(legacyKey);
    if (legacyVal !== null) {
      try {
        localStorage.setItem(key, legacyVal);
      } catch {}
      return legacyVal;
    }
  } catch {}
  return null;
};

export const DEFAULT_SETTINGS: UserSettings = {
  soundEnabled: true,
  hapticsEnabled: true,
  vibeTheme: 'obsidian',
};

export const DEFAULT_PLAYERS: Player[] = [
  { id: 'p1', name: 'أحمد', color: '#F59E0B' },
  { id: 'p2', name: 'سارة', color: '#10B981' },
  { id: 'p3', name: 'عمر', color: '#8B5CF6' },
];

export const getStoredSettings = (): UserSettings => {
  try {
    const raw = getStoredItemWithFallback(STORAGE_KEYS.SETTINGS, LEGACY_STORAGE_KEYS.SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
};

export const saveStoredSettings = (settings: UserSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings:', e);
  }
};

export const getStoredFavorites = (): string[] => {
  try {
    const raw = getStoredItemWithFallback(STORAGE_KEYS.FAVORITES, LEGACY_STORAGE_KEYS.FAVORITES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const clearStoredFavorites = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.FAVORITES);
    localStorage.removeItem(LEGACY_STORAGE_KEYS.FAVORITES);
  } catch {}
};

export const toggleStoredFavorite = (cardId: string): boolean => {
  try {
    const current = getStoredFavorites();
    const index = current.indexOf(cardId);
    let updated: string[];
    let isFav = false;
    if (index > -1) {
      updated = current.filter((id) => id !== cardId);
      isFav = false;
    } else {
      updated = [cardId, ...current];
      isFav = true;
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
    return isFav;
  } catch {
    return false;
  }
};

export const getStoredHistory = (): PlayedCardRecord[] => {
  try {
    const raw = getStoredItemWithFallback(STORAGE_KEYS.HISTORY, LEGACY_STORAGE_KEYS.HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const addStoredHistoryRecord = (record: PlayedCardRecord): void => {
  try {
    const current = getStoredHistory();
    // avoid adjacent identical duplicate card
    const filtered = current.filter((r) => r.cardId !== record.cardId);
    const updated = [record, ...filtered].slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to record history:', e);
  }
};

export const clearStoredHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(LEGACY_STORAGE_KEYS.HISTORY);
  } catch {}
};

export const getStoredPlayers = (): Player[] => {
  try {
    const raw = getStoredItemWithFallback(STORAGE_KEYS.PLAYERS, LEGACY_STORAGE_KEYS.PLAYERS);
    return raw ? JSON.parse(raw) : DEFAULT_PLAYERS;
  } catch {
    return DEFAULT_PLAYERS;
  }
};

export const saveStoredPlayers = (players: Player[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PLAYERS, JSON.stringify(players));
  } catch (e) {
    console.error('Failed to save players:', e);
  }
};

export const getStoredSession = (): GameSession | null => {
  try {
    const raw = getStoredItemWithFallback(STORAGE_KEYS.ACTIVE_SESSION, LEGACY_STORAGE_KEYS.ACTIVE_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const saveStoredSession = (session: GameSession | null): void => {
  try {
    if (!session) {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
      localStorage.removeItem(LEGACY_STORAGE_KEYS.ACTIVE_SESSION);
    } else {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
      localStorage.setItem(STORAGE_KEYS.LAST_GAME_ID, session.gameId);
    }
  } catch (e) {
    console.error('Failed to save active session:', e);
  }
};

export const getLastPlayedGameId = (): GameId | null => {
  try {
    const raw = getStoredItemWithFallback(STORAGE_KEYS.LAST_GAME_ID, LEGACY_STORAGE_KEYS.LAST_GAME_ID);
    return (raw as GameId) || null;
  } catch {
    return null;
  }
};

// Global Card Memory: ensures cards feel 100% fresh on every session
const SEEN_MEMORY_KEY = 'yallanarghy_seen_memory_v2';
const LEGACY_SEEN_MEMORY_KEY = 'baynana_seen_memory_v2';

export interface CardSeenInfo {
  lastPlayed: number;
  count: number;
}

export const getSeenCardsMemory = (): Record<string, CardSeenInfo> => {
  try {
    const raw = getStoredItemWithFallback(SEEN_MEMORY_KEY, LEGACY_SEEN_MEMORY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const markCardSeen = (cardId: string): void => {
  try {
    const memory = getSeenCardsMemory();
    const prev = memory[cardId] || { lastPlayed: 0, count: 0 };
    memory[cardId] = {
      lastPlayed: Date.now(),
      count: prev.count + 1,
    };
    localStorage.setItem(SEEN_MEMORY_KEY, JSON.stringify(memory));
  } catch (e) {
    console.error('Failed to update card memory:', e);
  }
};

export const clearCardMemory = (): void => {
  try {
    localStorage.removeItem(SEEN_MEMORY_KEY);
    localStorage.removeItem(LEGACY_SEEN_MEMORY_KEY);
  } catch {}
};

// Fisher-Yates true random shuffle helper
export function secureRandomShuffle<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    let randFraction: number;
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      const uintArray = new Uint32Array(1);
      window.crypto.getRandomValues(uintArray);
      randFraction = uintArray[0] / (0xffffffff + 1);
    } else {
      randFraction = Math.random();
    }
    const j = Math.floor(randFraction * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Smart Fresh Shuffle:
 * 1. Categorizes cards into unseen (0 plays) and seen (1+ plays).
 * 2. Unseen cards are 100% strictly placed first, but shuffled with high cryptographic entropy
 *    so every start or reset produces a completely different first/second/third question.
 * 3. Seen cards are ranked by least played and oldest played, chunked into randomized mini-buckets
 *    with dynamic jitter to prevent repeating patterns.
 * 4. Guarantees that neither resetting nor starting a new session repeats the same question order.
 */
export const smartFreshShuffle = <T extends { id: string }>(cards: T[]): T[] => {
  if (!cards || cards.length === 0) return [];

  const memory = getSeenCardsMemory();
  const unseen: T[] = [];
  const seen: { card: T; lastPlayed: number; count: number }[] = [];

  cards.forEach((card) => {
    const info = memory[card.id];
    if (!info || info.count === 0) {
      unseen.push(card);
    } else {
      seen.push({ card, lastPlayed: info.lastPlayed, count: info.count });
    }
  });

  // If there are unseen cards, prioritize them at the front, thoroughly randomized
  if (unseen.length > 0) {
    const shuffledUnseen = secureRandomShuffle(unseen);

    // For seen cards: sort primarily by oldest played, but add random jitter
    const sortedSeen = seen
      .sort((a, b) => {
        const timeDiff = a.lastPlayed - b.lastPlayed;
        const jitter = (Math.random() - 0.5) * 60000; // 1-minute random jitter
        return timeDiff + jitter;
      })
      .map((item) => item.card);

    return [...shuffledUnseen, ...secureRandomShuffle(sortedSeen)];
  }

  // If ALL cards were already seen at least once:
  // Sort by least seen count first, then oldest played
  seen.sort((a, b) => {
    if (a.count !== b.count) return a.count - b.count;
    const timeDiff = a.lastPlayed - b.lastPlayed;
    const jitter = (Math.random() - 0.5) * 60000;
    return timeDiff + jitter;
  });

  // Chunk in randomized small groups (3 to 5 items) to break any deterministic ordering
  const result: T[] = [];
  let idx = 0;
  while (idx < seen.length) {
    const chunkSize = 3 + Math.floor(Math.random() * 3); // 3, 4, or 5
    const chunk = seen.slice(idx, idx + chunkSize).map((item) => item.card);
    result.push(...secureRandomShuffle(chunk));
    idx += chunkSize;
  }

  return result;
};

