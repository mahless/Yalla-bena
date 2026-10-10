import React, { useState } from 'react';
import { Card } from '../../types/game';
import { GAMES } from '../../content/games';
import { getCardById } from '../../content/cards';
import { ConfirmModal } from '../common/ConfirmModal';
import { X, Bookmark, Play, Trash2 } from 'lucide-react';
import { formatNumber } from '../../i18n/translations';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  onRemoveFavorite: (cardId: string) => void;
  onClearAllFavorites?: () => void;
  onPlayFavoritesGame?: (cardIds: string[]) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearAllFavorites,
  onPlayFavoritesGame,
}) => {
  const [showConfirmClearAll, setShowConfirmClearAll] = useState<boolean>(false);
  const [cardToRemove, setCardToRemove] = useState<string | null>(null);

  if (!isOpen) return null;

  const favoriteCards = favorites
    .map((id) => getCardById(id))
    .filter((c): c is Card => Boolean(c));

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
        <div
          className="w-full sm:max-w-lg bg-white border border-stone-200 rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col max-h-[88dvh] shadow-2xl shadow-stone-950/30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <Bookmark className="w-4 h-4 fill-amber-500" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">
                  الكروت المفضلة
                </h2>
                <p className="text-xs text-stone-500">
                  {formatNumber(favoriteCards.length)} كارت محفوظ
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {favoriteCards.length > 0 && onClearAllFavorites && (
                <button
                  type="button"
                  onClick={() => setShowConfirmClearAll(true)}
                  className="p-2 text-stone-400 hover:text-rose-600 rounded-full hover:bg-rose-50 transition-colors cursor-pointer"
                  title="مسح كل المفضلة"
                  aria-label="مسح كل المفضلة"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content list */}
          <div className="p-5 overflow-y-auto space-y-3 flex-1 no-scrollbar">
            {favoriteCards.length === 0 ? (
              <div className="py-16 text-center text-stone-400 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400 border border-stone-200">
                  <Bookmark className="w-6 h-6 stroke-1" />
                </div>
                <p className="text-sm text-stone-500 max-w-xs mx-auto">
                  لم تقم بحفظ أي كروت بعد. اضغط على أيقونة المفضلة أثناء اللعب لحفظ أي سؤال أعجبك هنا.
                </p>
              </div>
            ) : (
              favoriteCards.map((card) => {
                const game = GAMES[card.gameId];
                return (
                  <div
                    key={card.id}
                    className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between gap-3 relative shadow-2xs hover:border-stone-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs"
                        style={{
                          backgroundColor: `${game.accentColor}15`,
                          color: game.accentColor,
                          borderColor: `${game.accentColor}30`,
                        }}
                      >
                        {game.titleAr}
                      </span>

                      <button
                        type="button"
                        onClick={() => setCardToRemove(card.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                        title="حذف من المفضلة"
                        aria-label="حذف من المفضلة"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-sm font-bold text-stone-900 leading-relaxed">
                      {card.textAr}
                    </p>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {favoriteCards.length > 0 && onPlayFavoritesGame && (
            <div className="p-4 pb-[max(1.25rem,calc(0.75rem+env(safe-area-inset-bottom,0px)))] border-t border-stone-100 bg-stone-50">
              <button
                type="button"
                onClick={() => onPlayFavoritesGame(favoriteCards.map((c) => c.id))}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-2xl text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md cursor-pointer hover:brightness-105"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  العب مجموعة المفضلة كسهرة خاصة
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal to Clear All Favorites */}
      <ConfirmModal
        isOpen={showConfirmClearAll}
        title="مسح قائمة المفضلة"
        message="هل أنت متأكد من رغبتك في حذف جميع الكروت المحفوظة في المفضلة؟"
        confirmText="نعم، حذف الكل"
        cancelText="إلغاء"
        isDestructive={true}
        onConfirm={() => {
          onClearAllFavorites?.();
          setShowConfirmClearAll(false);
        }}
        onClose={() => setShowConfirmClearAll(false)}
      />

      {/* Confirmation Modal for Individual Card Removal */}
      <ConfirmModal
        isOpen={Boolean(cardToRemove)}
        title="إزالة الكارت من المفضلة"
        message="هل تريد إزالة هذا الكارت من قائمة الكروت المفضلة؟"
        confirmText="إزالة"
        cancelText="إلغاء"
        isDestructive={true}
        onConfirm={() => {
          if (cardToRemove) {
            onRemoveFavorite(cardToRemove);
            setCardToRemove(null);
          }
        }}
        onClose={() => setCardToRemove(null)}
      />
    </>
  );
};
