export type GameId = 
  | 'open-topic'      // افتح الموضوع
  | 'tell-us'         // إحكيلنا
  | 'what-if'         // لو
  | 'choose'          // اختار
  | 'who-among-us'    // مين فينا؟
  | 'truth';          // صراحة

export type CardMood = 'light' | 'deep' | 'funny' | 'bold';

export interface Card {
  id: string;
  gameId: GameId;
  textAr: string;
  mood: CardMood;
  deckId: string;
  subtextAr?: string;
}

export interface DeckDefinition {
  id: string;
  nameAr: string;
  descriptionAr: string;
  mood?: CardMood;
}

export interface GameDefinition {
  id: GameId;
  titleAr: string;
  taglineAr: string;
  descriptionAr: string;
  accentColor: string;
  glowColor: string;
  badgeBg: string;
  cardPattern: string;
  instructionsAr: string;
  recommendedPlayersAr: string;
  defaultTurnMode: boolean;
}

export interface Player {
  id: string;
  name: string;
  color: string;
}

export interface PlayedCardRecord {
  cardId: string;
  gameId: GameId;
  playedAt: number;
  playerName?: string;
  liked?: boolean;
}

export interface GameSession {
  gameId: GameId;
  deckFilter: string;
  moodFilter: CardMood | 'all';
  cardIds: string[];
  currentIndex: number;
  isFlipped: boolean;
  historyCardIds: string[];
  turnMode: boolean;
  players: Player[];
  currentTurnPlayerIndex: number;
  startTime: number;
}

export interface UserSettings {
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  vibeTheme: 'obsidian' | 'midnight' | 'emerald';
}
