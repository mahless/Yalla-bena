import React, { useState } from 'react';
import { Card, GameDefinition, GameSession } from '../../types/game';
import { PlayCard } from '../card/PlayCard';
import { Confetti } from '../common/Confetti';
import { ConfirmModal } from '../common/ConfirmModal';
import { formatNumber } from '../../i18n/translations';
import {
  ArrowLeft,
  ArrowRight,
  Shuffle,
  RotateCcw,
  Sparkles,
  History,
  ChevronRight,
} from 'lucide-react';

interface GameplayScreenProps {
  session: GameSession;
  game: GameDefinition;
  cards: Card[];
  isFavorite: (cardId: string) => boolean;
  onToggleFavorite: (cardId: string) => void;
  onNextCard: () => void;
  onPrevCard: () => void;
  onFlipCard: () => void;
  onShuffleDeck: () => void;
  onRestartDeck: () => void;
  onExitGame: () => void;
  onOpenHistory: () => void;
}

export const GameplayScreen: React.FC<GameplayScreenProps> = ({
  session,
  game,
  cards,
  isFavorite,
  onToggleFavorite,
  onNextCard,
  onPrevCard,
  onFlipCard,
  onShuffleDeck,
  onRestartDeck,
  onExitGame,
  onOpenHistory,
}) => {
  const [showConfirmShuffle, setShowConfirmShuffle] = useState<boolean>(false);
  const [showConfirmExit, setShowConfirmExit] = useState<boolean>(false);

  const currentIndex = session.currentIndex;
  const isCompleted = currentIndex >= cards.length;
  const currentCard = !isCompleted ? cards[currentIndex] : null;

  // Turn player calculation
  const currentTurnPlayer =
    session.turnMode && session.players.length > 0
      ? session.players[session.currentTurnPlayerIndex % session.players.length]
      : undefined;

  const nextTurnPlayer =
    session.turnMode && session.players.length > 1
      ? session.players[(session.currentTurnPlayerIndex + 1) % session.players.length]
      : undefined;

  const progressPercentage = cards.length > 0 ? Math.min(100, Math.round(((currentIndex) / cards.length) * 100)) : 0;

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF8F5]">
        {/* Background Ambient Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[400px] pointer-events-none blur-3xl opacity-12"
          style={{
            background: `radial-gradient(circle, ${game.accentColor} 0%, transparent 70%)`,
          }}
        />

        {/* Confetti celebration if completed */}
        <Confetti active={isCompleted} />

        {/* =========================================
            TOP NAV BAR
            ========================================= */}
        <header className="relative z-20 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2.5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              if (currentIndex > 0 && !isCompleted) {
                setShowConfirmExit(true);
              } else {
                onExitGame();
              }
            }}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-white hover:bg-stone-100 text-stone-700 text-xs font-semibold border border-stone-200/90 shadow-sm active:scale-95 transition-all cursor-pointer"
            aria-label="الرجوع للرئيسية"
          >
            <ChevronRight className="w-4 h-4" />
            <span>الرئيسية</span>
          </button>

          {/* Game Title Pill */}
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold text-stone-900 shadow-sm">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: game.accentColor }} />
            <span>{game.titleAr}</span>
          </div>

          {/* Top Actions: Shuffle & History */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                if (currentIndex > 0) {
                  setShowConfirmShuffle(true);
                } else {
                  onShuffleDeck();
                }
              }}
              className="p-2 rounded-full bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 shadow-sm transition-colors active:scale-95 cursor-pointer"
              title="خلط ذكي"
              aria-label="خلط ذكي"
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onOpenHistory}
              className="p-2 rounded-full bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 shadow-sm transition-colors active:scale-95 cursor-pointer"
              title="السجل"
              aria-label="السجل"
            >
              <History className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* =========================================
            NON-TRADITIONAL PROGRESS BAR & TURN BANNER
            ========================================= */}
        <div className="relative z-10 px-6 py-1">
          {/* Progress track */}
          <div className="w-full h-1.5 bg-stone-200/90 rounded-full overflow-hidden mb-2 shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progressPercentage}%`,
                backgroundColor: game.accentColor,
              }}
            />
          </div>

          {/* Turn banner if turn mode active */}
          {session.turnMode && currentTurnPlayer && !isCompleted && (
            <div className="flex items-center justify-between text-xs py-1.5 px-3.5 rounded-xl bg-white border border-stone-200 text-stone-700 shadow-2xs">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full ring-2 ring-stone-200 animate-pulse"
                  style={{ backgroundColor: currentTurnPlayer.color }}
                />
                <span className="font-bold text-stone-900">
                  دور {currentTurnPlayer.name}
                </span>
              </div>
              {nextTurnPlayer && (
                <span className="text-[11px] text-stone-500 font-medium">
                  التالي: {nextTurnPlayer.name}
                </span>
              )}
            </div>
          )}
        </div>

        {/* =========================================
            MAIN CARD ARENA
            ========================================= */}
        <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 py-3">
          {isCompleted ? (
            /* Deck Finished Card */
            <div className="w-full max-w-[340px] aspect-[1/1.38] rounded-[28px] p-6 flex flex-col justify-between text-center border border-stone-200 bg-white shadow-xl animate-fade-in">
              <div className="my-auto space-y-4">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-amber-600 bg-amber-50 border border-amber-200"
                >
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-extrabold text-stone-900">
                  انتهت المجموعة!
                </h3>

                <p className="text-xs text-stone-600 max-w-[240px] mx-auto leading-relaxed">
                  تم لعب جميع كروت هذه المجموعة دون أي تكرار. يمكنك إعادة الخلط أو استكشاف لعبة أخرى!
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={onRestartDeck}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-stone-950 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                  style={{ backgroundColor: game.accentColor }}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>إعادة الخلط واللعب</span>
                </button>

                <button
                  type="button"
                  onClick={onExitGame}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer border border-stone-200"
                >
                  الرجوع لاختيار لعبة
                </button>
              </div>
            </div>
          ) : currentCard ? (
            <PlayCard
              key={currentCard.id}
              card={currentCard}
              game={game}
              isFlipped={session.isFlipped}
              onFlip={onFlipCard}
              onSwipeNext={onNextCard}
              onSwipePrev={currentIndex > 0 ? onPrevCard : undefined}
              isFavorite={isFavorite(currentCard.id)}
              onToggleFavorite={() => onToggleFavorite(currentCard.id)}
              currentTurnPlayer={currentTurnPlayer}
              cardIndex={currentIndex}
              totalCards={cards.length}
            />
          ) : null}
        </main>

        {/* =========================================
            BOTTOM CONTROLS DOCK
            ========================================= */}
        {!isCompleted && (
          <footer className="relative z-20 px-6 pb-[max(1.5rem,calc(1rem+env(safe-area-inset-bottom,0px)))] pt-2">
            <div className="max-w-[360px] mx-auto flex items-center justify-between gap-3">
              {/* Previous card button */}
              <button
                type="button"
                onClick={onPrevCard}
                disabled={currentIndex === 0}
                className="p-3.5 rounded-2xl bg-white disabled:opacity-30 hover:bg-stone-100 text-stone-800 border border-stone-200 shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="الكارت السابق"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Primary Action Button (Flip / Reveal or Next) */}
              <button
                type="button"
                onClick={session.isFlipped ? onNextCard : onFlipCard}
                className="flex-1 py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg text-stone-950 cursor-pointer hover:brightness-105"
                style={{ backgroundColor: game.accentColor }}
              >
                {!session.isFlipped ? (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>كشف السؤال</span>
                  </>
                ) : (
                  <>
                    <span>الكارت التالي</span>
                    <ArrowLeft className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Skip Card button */}
              <button
                type="button"
                onClick={onNextCard}
                className="p-3.5 rounded-2xl bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 border border-stone-200 shadow-md transition-all active:scale-95 cursor-pointer"
                title="تخطي الكارت"
                aria-label="تخطي الكارت"
              >
                <RotateCcw className="w-5 h-5 rotate-90" />
              </button>
            </div>
          </footer>
        )}
      </div>

      {/* Confirmation Modal for Shuffle */}
      <ConfirmModal
        isOpen={showConfirmShuffle}
        title="إعادة خلط الكروت"
        message="هل تريد إعادة خلط كروت هذه المجموعة والبدء من جديد مع إعطاء الأولوية للأسئلة الطازجة؟"
        confirmText="نعم، خلط وبدء"
        cancelText="إلغاء"
        isDestructive={false}
        onConfirm={() => {
          onShuffleDeck();
          setShowConfirmShuffle(false);
        }}
        onClose={() => setShowConfirmShuffle(false)}
      />

      {/* Confirmation Modal for Exit */}
      <ConfirmModal
        isOpen={showConfirmExit}
        title="الخروج إلى القائمة الرئيسية"
        message="سيتم حفظ تقدمك الحالي في السهرة تلقائياً، ويمكنك العودة ومتابعة الكروت في أي وقت."
        confirmText="الخروج للرئيسية"
        cancelText="متابعة اللعب"
        isDestructive={false}
        onConfirm={() => {
          onExitGame();
          setShowConfirmExit(false);
        }}
        onClose={() => setShowConfirmExit(false)}
      />
    </>
  );
};
