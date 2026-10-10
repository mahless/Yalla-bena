import React, { useState } from 'react';
import { PlayedCardRecord } from '../../types/game';
import { GAMES } from '../../content/games';
import { getCardById } from '../../content/cards';
import { ConfirmModal } from '../common/ConfirmModal';
import { X, History, Trash2, Clock } from 'lucide-react';
import { formatNumber } from '../../i18n/translations';

interface HistorySheetProps {
  isOpen: boolean;
  onClose: () => void;
  history: PlayedCardRecord[];
  onClearHistory: () => void;
}

export const HistorySheet: React.FC<HistorySheetProps> = ({
  isOpen,
  onClose,
  history,
  onClearHistory,
}) => {
  const [showConfirmClear, setShowConfirmClear] = useState<boolean>(false);

  if (!isOpen) return null;

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
              <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center border border-stone-200">
                <History className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">
                  سجل الأسئلة الأخيرة
                </h2>
                <p className="text-xs text-stone-500">
                  {formatNumber(history.length)} سؤال ملعوب
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {history.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowConfirmClear(true)}
                  className="p-2 text-stone-400 hover:text-rose-600 rounded-full hover:bg-rose-50 transition-colors cursor-pointer"
                  title="مسح السجل"
                  aria-label="مسح السجل"
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
          <div className="p-5 pb-[max(1.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))] overflow-y-auto space-y-3 flex-1 no-scrollbar">
            {history.length === 0 ? (
              <div className="py-16 text-center text-stone-400 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400 border border-stone-200">
                  <Clock className="w-6 h-6 stroke-1" />
                </div>
                <p className="text-sm text-stone-500 max-w-xs mx-auto">
                  لم تقم بلعب أي كروت بعد. اختر أي لعبة وستظهر أسئلتك هنا تلقائياً.
                </p>
              </div>
            ) : (
              history.map((record, index) => {
                const card = getCardById(record.cardId);
                if (!card) return null;
                const game = GAMES[card.gameId];

                return (
                  <div
                    key={`${record.cardId}-${index}`}
                    className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between gap-2.5 shadow-2xs hover:border-stone-300 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs text-stone-500">
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

                      {record.playerName && (
                        <span className="text-[11px] text-stone-600 font-bold">
                          اللاعب: {record.playerName}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-stone-900 leading-relaxed">
                      {card.textAr}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={showConfirmClear}
        title="مسح سجل الأسئلة"
        message="هل أنت متأكد من مسح جميع الأسئلة المسجلة في السجل؟"
        confirmText="مسح السجل"
        cancelText="إلغاء"
        isDestructive={true}
        onConfirm={() => {
          onClearHistory();
          setShowConfirmClear(false);
        }}
        onClose={() => setShowConfirmClear(false)}
      />
    </>
  );
};
