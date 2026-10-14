import React, { useRef, useState } from 'react';
import { Card, GameDefinition, Player, CardMood } from '../../types/game';
import { Bookmark, Sparkles, RefreshCw, Compass } from 'lucide-react';
import { formatNumber } from '../../i18n/translations';
import { GAME_DECKS } from '../../content/cards';

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

  // Render SVG geometric patterns tailored to each specific card with clear distinct shapes
  const renderCardFrontArt = () => {
    // Generate a stable numeric seed from card ID + card index
    let hash = cardIndex * 7;
    for (let i = 0; i < card.id.length; i++) {
      hash = (hash << 5) - hash + card.id.charCodeAt(i);
      hash |= 0;
    }
    const patternType = Math.abs(hash) % 12;

    switch (patternType) {
      case 0:
        // Concentric Rings with Inner Crosshairs
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 4" />
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="100" y1="24" x2="100" y2="176" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="24" y1="100" x2="176" y2="100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="7" fill="currentColor" />
          </svg>
        );

      case 1:
        // Double Overlapping Diamonds (Rhombus Star)
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <polygon points="100,20 178,100 100,180 22,100" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="52" y="52" width="96" height="96" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
            <polygon points="100,56 144,100 100,144 56,100" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="9" fill="currentColor" />
          </svg>
        );

      case 2:
        // Sacred Hexagon & Star Matrix
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <polygon points="100,24 168,62 168,138 100,176 32,138 32,62" stroke="currentColor" strokeWidth="2" fill="none" />
            <polygon points="100,50 142,75 142,125 100,150 58,125 58,75" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="6" fill="currentColor" />
          </svg>
        );

      case 3:
        // Target Compass with Cardinal Markers
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <polygon points="100,28 107,44 93,44" fill="currentColor" />
            <polygon points="100,172 107,156 93,156" fill="currentColor" />
            <polygon points="28,100 44,93 44,107" fill="currentColor" />
            <polygon points="172,100 156,93 156,107" fill="currentColor" />
            <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="5" fill="currentColor" />
          </svg>
        );

      case 4:
        // Dynamic Multi-Wave & Flowing Sine Lines
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
            <path d="M 30 65 Q 65 35 100 65 T 170 65" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <path d="M 30 100 Q 65 70 100 100 T 170 100" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <path d="M 30 135 Q 65 105 100 135 T 170 135" stroke="currentColor" strokeWidth="2.5" fill="none" />
            <circle cx="100" cy="100" r="8" fill="currentColor" />
          </svg>
        );

      case 5:
        // Geometric 8-Pointed Star (Octagram)
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <rect x="42" y="42" width="116" height="116" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="42" y="42" width="116" height="116" rx="4" transform="rotate(45 100 100)" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="8" fill="currentColor" />
          </svg>
        );

      case 6:
        // Dot-Matrix Constellation with Radial Grid
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="2 4" />
            {[-50, -25, 0, 25, 50].map((x) =>
              [-50, -25, 0, 25, 50].map((y) => (
                <circle
                  key={`dot-${x}-${y}`}
                  cx={100 + x}
                  cy={100 + y}
                  r={(x === 0 && y === 0) ? 6 : ((Math.abs(x) === 50 || Math.abs(y) === 50) ? 2 : 3)}
                  fill="currentColor"
                />
              ))
            )}
            <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        );

      case 7:
        // Hourglass / Intersection Diagonals
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="2" fill="none" />
            <polygon points="40,40 160,40 100,100" stroke="currentColor" strokeWidth="2" fill="none" />
            <polygon points="40,160 160,160 100,100" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="6" fill="currentColor" />
          </svg>
        );

      case 8:
        // Concentric Triple Nested Triangles
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <polygon points="100,26 176,164 24,164" stroke="currentColor" strokeWidth="2" fill="none" />
            <polygon points="100,68 152,152 48,152" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <polygon points="100,104 128,144 72,144" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="126" r="6" fill="currentColor" />
          </svg>
        );

      case 9:
        // Radar / Sonar Arcs & Quadrants
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 100 20 A 80 80 0 0 1 180 100 L 100 100 Z" fill="currentColor" opacity="0.18" />
            <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="7" fill="currentColor" />
          </svg>
        );

      case 10:
        // Infinite Orbital Ellipses (Atomic Loop)
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <ellipse cx="100" cy="100" rx="80" ry="32" stroke="currentColor" strokeWidth="2" fill="none" />
            <ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(60 100 100)" stroke="currentColor" strokeWidth="2" fill="none" />
            <ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(120 100 100)" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="10" fill="currentColor" />
          </svg>
        );

      default:
        // Sunburst / Radiating Gear Petals
        return (
          <svg className="w-full h-full opacity-45" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={`ray-${deg}`}
                x1="100"
                y1="40"
                x2="100"
                y2="58"
                transform={`rotate(${deg} 100 100)`}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ))}
            <circle cx="100" cy="100" r="38" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="8" fill="currentColor" />
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
      className="relative w-full max-w-[340px] xs:max-w-[360px] aspect-[1/1.42] perspective-1000 mx-auto select-none animate-card-in"
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
              style={{
                color: game.accentColor,
              }}
            >
              {renderCardFrontArt()}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-15 pointer-events-none"
                style={{ backgroundColor: game.accentColor }}
              />
            </div>

            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-2xl font-extrabold tracking-tight text-stone-900 mb-1.5">
                {title}
              </h3>

              {/* Dynamic Deck Topic Badge on Cover */}
              {(() => {
                const gameDecks = GAME_DECKS[card.gameId] || [];
                const deckInfo = gameDecks.find((d) => d.id === card.deckId);
                const deckName = deckInfo?.nameAr;

                return deckName ? (
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-2xs transition-all mb-1"
                    style={{
                      backgroundColor: `${game.accentColor}12`,
                      borderColor: `${game.accentColor}30`,
                      color: game.accentColor,
                    }}
                  >
                    <Compass className="w-3 h-3" />
                    <span>{deckName}</span>
                  </span>
                ) : (
                  <p className="text-xs text-stone-500 max-w-[220px] mx-auto line-clamp-1">
                    {game.taglineAr}
                  </p>
                );
              })()}
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
