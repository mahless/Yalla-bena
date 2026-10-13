import React, { useRef, useState } from 'react';
import { Card, GameDefinition, Player, CardMood } from '../../types/game';
import { Bookmark, Sparkles, RefreshCw } from 'lucide-react';
import { formatNumber } from '../../i18n/translations';

interface PlayCardProps {
  card: Card;
  game: GameDefinition;
  isFlipped: boolean;
  onFlip: () => void;
  onSwipeNext: () => void;
  onSwipePrev?: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  currentTurnPlayer?: Player;
  cardIndex: number;
  totalCards: number;
}

export const PlayCard: React.FC<PlayCardProps> = ({
  card,
  game,
  isFlipped,
  onFlip,
  onSwipeNext,
  onSwipePrev,
  isFavorite,
  onToggleFavorite,
  currentTurnPlayer,
  cardIndex,
  totalCards,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Touch swipe handling in RTL
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX;
    setDragOffset(Math.max(-120, Math.min(120, diff)));
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragOffset) > 60) {
      if (dragOffset < -60) {
        // Swipe left in RTL advances to next card
        onSwipeNext();
      } else if (dragOffset > 60 && onSwipePrev) {
        onSwipePrev();
      }
    }
    setDragOffset(0);
    setTouchStartX(null);
    setIsDragging(false);
  };

  // Pure Arabic labels
  const text = card.textAr;
  const subtext = card.subtextAr;
  const title = game.titleAr;
  const tapPrompt = 'المس الكارت للقلب';

  const getMoodLabel = (mood: CardMood) => {
    switch (mood) {
      case 'light': return 'خفيف';
      case 'deep': return 'عميق';
      case 'funny': return 'مضحك';
      case 'bold': return 'جريء';
    }
  };

  // Render SVG geometric patterns tailored to the game
  const renderCardFrontArt = () => {
    switch (game.cardPattern) {
      case 'rings':
        return (
          <svg className="w-full h-full opacity-35" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="56" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="8" fill="currentColor" />
          </svg>
        );
      case 'waves':
        return (
          <svg className="w-full h-full opacity-35" viewBox="0 0 200 200">
            <path d="M 20 60 Q 60 20 100 60 T 180 60" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 20 100 Q 60 60 100 100 T 180 100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 20 140 Q 60 100 100 140 T 180 140" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        );
      case 'cross':
        return (
          <svg className="w-full h-full opacity-35" viewBox="0 0 200 200">
            <line x1="30" y1="30" x2="170" y2="170" stroke="currentColor" strokeWidth="2" />
            <line x1="170" y1="30" x2="30" y2="170" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        );
      case 'target':
        return (
          <svg className="w-full h-full opacity-35" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        );
      case 'diamonds':
        return (
          <svg className="w-full h-full opacity-35" viewBox="0 0 200 200">
            <polygon points="100,20 180,100 100,180 20,100" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <polygon points="100,50 150,100 100,150 50,100" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="10" fill="currentColor" />
          </svg>
        );
      default: // dots-matrix
        return (
          <svg className="w-full h-full opacity-35" viewBox="0 0 200 200">
            {[-60, -30, 0, 30, 60].map((x) =>
              [-60, -30, 0, 30, 60].map((y) => (
                <circle key={`${x}-${y}`} cx={100 + x} cy={100 + y} r="2.5" fill="currentColor" />
              ))
            )}
            <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        );
    }
  };

  const rotationY = isFlipped ? 180 : 0;
  const tiltStyle = {
    transform: `translateX(${dragOffset}px) rotateY(${rotationY}deg) rotateZ(${dragOffset * 0.05}deg)`,
    transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)',
  };

  return (
    <div
      className="relative w-full max-w-[340px] xs:max-w-[360px] aspect-[1/1.42] perspective-1000 mx-auto select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={cardRef}
        style={tiltStyle}
        onClick={onFlip}
        className="w-full h-full relative preserve-3d cursor-pointer rounded-[28px] card-ambient-shadow will-change-transform"
      >
        {/* =========================================
            FRONT OF CARD (Cover State) - LIGHT THEME
            ========================================= */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-[28px] overflow-hidden p-6 flex flex-col justify-between border border-stone-200/90 shadow-xl shadow-stone-900/10"
          style={{
            backgroundColor: '#FFFFFF',
            backgroundImage: `radial-gradient(circle at 50% 25%, ${game.glowColor}, transparent 65%), linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)`,
          }}
        >
          {/* Top Edge Pips */}
          <div className="flex items-center justify-between text-xs tracking-wider font-mono text-stone-500">
            <span className="flex items-center gap-1.5 font-bold text-stone-800">
              <span className="w-2.5 h-2.5 rounded-full shadow-2xs" style={{ backgroundColor: game.accentColor }} />
              {title}
            </span>
            <span className="text-stone-400 font-bold tabular-nums">
              {formatNumber(cardIndex + 1)} / {formatNumber(totalCards)}
            </span>
          </div>

          {/* Central Emblem & Geometry */}
          <div className="relative my-auto flex flex-col items-center justify-center text-center py-4">
            <div
              className="w-36 h-36 flex items-center justify-center relative rounded-full"
              style={{ color: game.accentColor }}
            >
              {renderCardFrontArt()}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-15 pointer-events-none"
                style={{ backgroundColor: game.accentColor }}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-extrabold tracking-tight text-stone-900 mb-1">
                {title}
              </h3>
              <p className="text-xs text-stone-500 max-w-[220px] mx-auto line-clamp-1">
                {game.taglineAr}
              </p>
            </div>
          </div>

          {/* Bottom Flip Action Hint */}
          <div className="flex items-center justify-between border-t border-stone-100 pt-3.5 text-xs text-stone-500">
            <span className="flex items-center gap-1.5 text-stone-700 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {tapPrompt}
            </span>
            <span className="text-[11px] text-stone-400 uppercase tracking-wider font-bold">
              يلا نرغي
            </span>
          </div>
        </div>

        {/* =========================================
            BACK OF CARD (Revealed Question State) - LIGHT THEME
            ========================================= */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[28px] overflow-hidden p-6 flex flex-col justify-between border border-stone-200/90 shadow-xl shadow-stone-900/10"
          style={{
            backgroundColor: '#FFFFFF',
            backgroundImage: `radial-gradient(circle at 50% 15%, ${game.glowColor}, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)`,
          }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs"
                style={{
                  backgroundColor: `${game.accentColor}15`,
                  color: game.accentColor,
                  borderColor: `${game.accentColor}30`,
                }}
              >
                {getMoodLabel(card.mood)}
              </span>

              {/* Turn player pill if turn mode is active */}
              {currentTurnPlayer && (
                <span className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 border border-stone-200/80 shadow-2xs">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: currentTurnPlayer.color }}
                  />
                  <span>
                    دور {currentTurnPlayer.name}
                  </span>
                </span>
              )}
            </div>

            {/* Favorite button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className="p-1.5 rounded-full hover:bg-stone-100 transition-colors text-stone-400 active:scale-95 cursor-pointer"
              aria-label="حفظ في المفضلة"
            >
              <Bookmark
                className={`w-4 h-4 transition-colors ${
                  isFavorite ? 'fill-amber-500 text-amber-500' : 'text-stone-400'
                }`}
              />
            </button>
          </div>

          {/* Question Body */}
          <div className="my-auto flex flex-col items-center justify-center text-center px-1 py-4">
            <p
              className="text-lg xs:text-xl font-bold leading-relaxed text-stone-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              {text}
            </p>

            {subtext && (
              <p className="mt-4 text-xs text-stone-500 leading-normal max-w-[260px] italic">
                {subtext}
              </p>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between border-t border-stone-100 pt-3.5 text-xs text-stone-400">
            <span className="text-[11px] font-mono text-stone-500 font-bold">
              {formatNumber(cardIndex + 1)} / {formatNumber(totalCards)}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition-colors text-[11px] font-medium cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>اقلب مجدداً</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
