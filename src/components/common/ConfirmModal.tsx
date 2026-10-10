import React, { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'تأكيد',
  cancelText = 'إلغاء',
  isDestructive = true,
  onConfirm,
  onClose,
}) => {
  // Support mobile back button and Escape key specifically when confirmation is displayed
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-white border border-stone-200/90 rounded-[28px] overflow-hidden p-6 shadow-2xl shadow-stone-950/30 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
              isDestructive
                ? 'bg-rose-50 text-rose-600 border border-rose-200'
                : 'bg-amber-50 text-amber-600 border border-amber-200'
            }`}
          >
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          {message}
        </p>

        <div className="flex items-center gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200/80 text-stone-700 border border-stone-200/80 transition-colors cursor-pointer"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm ${
              isDestructive
                ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20'
                : 'bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-amber-500/20'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

