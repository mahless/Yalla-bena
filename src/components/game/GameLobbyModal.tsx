import React, { useState } from 'react';
import { GameDefinition, Player, CardMood } from '../../types/game';
import { GAME_DECKS, getCardsForGame } from '../../content/cards';
import { getSeenCardsMemory } from '../../services/storage';
import { ToggleSwitch } from '../common/ToggleSwitch';
import { X, Play } from 'lucide-react';
import { formatNumber } from '../../i18n/translations';

interface GameLobbyModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: GameDefinition | null;
  players: Player[];
  onOpenPlayerManager: () => void;
  onStartGame: (params: {
    deckFilter: string;
    moodFilter: CardMood | 'all';
    turnMode: boolean;
  }) => void;
}

export const GameLobbyModal: React.FC<GameLobbyModalProps> = ({
  isOpen,
  onClose,
  game,
  players,
  onOpenPlayerManager,
  onStartGame,
}) => {
  if (!isOpen || !game) return null;

  const decks = GAME_DECKS[game.id] || [];
  const [selectedDeck, setSelectedDeck] = useState<string>('all');
  const [selectedMood, setSelectedMood] = useState<CardMood | 'all'>('all');
  const [turnMode, setTurnMode] = useState<boolean>(game.defaultTurnMode);

  const availableCards = getCardsForGame(game.id, selectedDeck, selectedMood);
  const memory = getSeenCardsMemory();
  const freshCount = availableCards.filter((c) => !memory[c.id] || memory[c.id].count === 0).length;

  const handleStart = () => {
    onStartGame({
      deckFilter: selectedDeck,
      moodFilter: selectedMood,
      turnMode,
    });
  };

  const moods: { id: CardMood | 'all'; labelAr: string }[] = [
    { id: 'all', labelAr: 'الكل' },
    { id: 'light', labelAr: 'خفيف' },
    { id: 'deep', labelAr: 'عميق' },
    { id: 'funny', labelAr: 'مضحك' },
    { id: 'bold', labelAr: 'جريء' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full sm:max-w-lg bg-white border border-stone-200 rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col max-h-[92dvh] shadow-2xl shadow-stone-950/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Game Visual */}
        <div
          className="relative px-6 pt-6 pb-5 border-b border-stone-100 overflow-hidden shrink-0"
          style={{
            backgroundImage: `radial-gradient(circle at top right, ${game.glowColor}, transparent 70%), linear-gradient(180deg, rgba(250,248,245,0.9) 0%, #FFFFFF 100%)`,
          }}
        >
          <div className="flex items-center justify-between relative z-10 mb-2.5">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full border tracking-wide uppercase shadow-2xs"
              style={{
                backgroundColor: `${game.accentColor}15`,
                color: game.accentColor,
                borderColor: `${game.accentColor}30`,
              }}
            >
              {game.recommendedPlayersAr}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 className="text-2xl xs:text-[26px] font-black text-stone-900 leading-snug pb-1 tracking-tight">
            {game.titleAr}
          </h2>
          <p className="text-xs text-stone-600 leading-relaxed max-w-md pt-0.5">
            {game.descriptionAr}
          </p>
        </div>

        {/* Scrollable Setup Options */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 no-scrollbar">
          {/* Deck Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                اختر المجموعة / المود
              </span>
              <div className="flex items-center gap-2 text-xs font-mono">
                {freshCount > 0 && (
                  <span className="text-emerald-700 font-bold flex items-center gap-1 font-sans text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {formatNumber(freshCount)} جديد لم تره
                  </span>
                )}
                <span className="text-stone-400 font-bold">
                  {formatNumber(availableCards.length)} كارت
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => setSelectedDeck('all')}
                className={`p-3.5 rounded-2xl text-start transition-all border cursor-pointer ${
                  selectedDeck === 'all'
                    ? 'bg-amber-50/80 border-amber-300 text-stone-900 shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-100/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-stone-900">
                    جميع الكروت في هذه اللعبة
                  </span>
                  {selectedDeck === 'all' && (
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: game.accentColor }}
                    />
                  )}
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  تشكيلة كاملة ومتنوعة من كل المستويات
                </p>
              </button>

              {decks.map((deck) => (
                <button
                  key={deck.id}
                  type="button"
                  onClick={() => setSelectedDeck(deck.id)}
                  className={`p-3.5 rounded-2xl text-start transition-all border cursor-pointer ${
                    selectedDeck === deck.id
                      ? 'bg-amber-50/80 border-amber-300 text-stone-900 shadow-2xs'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-100/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-stone-900">
                      {deck.nameAr}
                    </span>
                    {selectedDeck === deck.id && (
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: game.accentColor }}
                      />
                    )}
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {deck.descriptionAr}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Mood Filter */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
              جو الأسئلة
            </span>
            <div className="flex flex-wrap gap-2">
              {moods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMood(m.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    selectedMood === m.id
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-stone-100 border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-200/80'
                  }`}
                >
                  {m.labelAr}
                </button>
              ))}
            </div>
          </div>

          {/* Turn Mode & Players with robust ToggleSwitch */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-stone-900 block">
                  نظام الأدوار (دور مين؟)
                </span>
                <span className="text-xs text-stone-500">
                  تحديد وتدوير الدور بين اللاعبين بالترتيب
                </span>
              </div>
              <ToggleSwitch
                checked={turnMode}
                onChange={(val) => setTurnMode(val)}
                ariaLabel="تفعيل نظام الأدوار"
              />
            </div>

            {turnMode && (
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <span className="text-xs text-stone-500 font-medium">
                    اللاعبين:
                  </span>
                  <div className="flex -space-x-1.5 rtl:space-x-reverse">
                    {players.slice(0, 4).map((p) => (
                      <span
                        key={p.id}
                        className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px] font-bold text-black shadow-2xs"
                        style={{ backgroundColor: p.color }}
                        title={p.name}
                      >
                        {p.name.charAt(0)}
                      </span>
                    ))}
                    {players.length > 4 && (
                      <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 border border-white flex items-center justify-center text-[9px] font-bold">
                        +{players.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenPlayerManager}
                  className="text-xs text-amber-700 hover:text-amber-800 font-bold underline cursor-pointer"
                >
                  تعديل الأسماء
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="p-5 pb-[max(1.25rem,calc(0.75rem+env(safe-area-inset-bottom,0px)))] border-t border-stone-100 bg-stone-50">
          <button
            type="button"
            onClick={handleStart}
            disabled={availableCards.length === 0}
            className="w-full py-3.5 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] shadow-lg disabled:opacity-50 text-stone-950 cursor-pointer hover:brightness-105"
            style={{ backgroundColor: game.accentColor }}
          >
            <Play className="w-5 h-5 fill-current" />
            <span>
              ابدأ اللعب الآن
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
