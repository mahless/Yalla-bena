import { Card, DeckDefinition, GameId } from '../../types/game';
import { OPEN_TOPIC_CARDS, OPEN_TOPIC_DECKS } from './openTopic';
import { TELL_US_CARDS, TELL_US_DECKS } from './tellUs';
import { WHAT_IF_CARDS, WHAT_IF_DECKS } from './whatIf';
import { CHOOSE_CARDS, CHOOSE_DECKS } from './choose';
import { WHO_AMONG_US_CARDS, WHO_AMONG_US_DECKS } from './whoAmongUs';
import { TRUTH_CARDS, TRUTH_DECKS } from './truth';
import { DARES_CARDS, DARES_DECKS } from './dares';

export const ALL_CARDS: Card[] = [
  ...OPEN_TOPIC_CARDS,
  ...TELL_US_CARDS,
  ...WHAT_IF_CARDS,
  ...CHOOSE_CARDS,
  ...WHO_AMONG_US_CARDS,
  ...TRUTH_CARDS,
  ...DARES_CARDS,
];

export const GAME_DECKS: Record<GameId, DeckDefinition[]> = {
  'open-topic': OPEN_TOPIC_DECKS,
  'tell-us': TELL_US_DECKS,
  'what-if': WHAT_IF_DECKS,
  'choose': CHOOSE_DECKS,
  'who-among-us': WHO_AMONG_US_DECKS,
  'truth': TRUTH_DECKS,
  'dares': DARES_DECKS,
};

export const getCardsForGame = (gameId: GameId, deckId?: string, mood?: string): Card[] => {
  return ALL_CARDS.filter((card) => {
    if (card.gameId !== gameId) return false;
    if (deckId && deckId !== 'all' && card.deckId !== deckId) return false;
    if (mood && mood !== 'all' && card.mood !== mood) return false;
    return true;
  });
};

export const getCardById = (cardId: string): Card | undefined => {
  return ALL_CARDS.find((card) => card.id === cardId);
};
