import React, { useState } from 'react';
import { UserSettings } from '../../types/game';
import { ToggleSwitch } from '../common/ToggleSwitch';
import { ConfirmModal } from '../common/ConfirmModal';
import { X, Volume2, Vibrate, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

interface SettingsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  settings: UserSettings;
  onUpdateSettings: (newSettings: UserSettings) => void;
  onResetProgress: () => void;
}

export const SettingsSheet: React.FC<SettingsSheetProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetProgress,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState<boolean>(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
        <div
          className="w-full sm:max-w-md bg-white border border-stone-200 rounded-t-[32px] sm:rounded-[32px] overflow-hidden flex flex-col max-h-[88dvh] shadow-2xl shadow-stone-950/30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-stone-900">
                الإعدادات
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Settings items */}
          <div className="p-6 pb-[max(1.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))] space-y-4 overflow-y-auto flex-1 no-scrollbar text-sm">
            {/* Sound FX */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-stone-200/70 flex items-center justify-center text-stone-700 shadow-2xs">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-stone-900 block">
                    المؤثرات الصوتية
                  </span>
                  <span className="text-xs text-stone-500">
                    أصوات تفاعلية خفيفة وممتعة للكروت
                  </span>
                </div>
              </div>
              <ToggleSwitch
                checked={settings.soundEnabled}
                onChange={(val) => onUpdateSettings({ ...settings, soundEnabled: val })}
                ariaLabel="تفعيل المؤثرات الصوتية"
              />
            </div>

            {/* Haptics */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-stone-200/70 flex items-center justify-center text-stone-700 shadow-2xs">
                  <Vibrate className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-stone-900 block">
                    الاهتزاز اللمسي
                  </span>
                  <span className="text-xs text-stone-500">
                    نبضات خفيفة مع كل لمسة وسحب للكارت
                  </span>
                </div>
              </div>
              <ToggleSwitch
                checked={settings.hapticsEnabled}
                onChange={(val) => onUpdateSettings({ ...settings, hapticsEnabled: val })}
                ariaLabel="تفعيل الاهتزاز اللمسي"
              />
            </div>

            {/* Offline Badge Note */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs mt-2">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-emerald-600" />
              <div>
                <p className="font-bold text-emerald-900">
                  تطبيق محلي أوفلاين 100%
                </p>
                <p className="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
                  يعمل في أي مكان وفي السفر بدون أي اتصال بالإنترنت أو تسجيل دخول، وتظل بياناتك محفوظة محلياً.
                </p>
              </div>
            </div>

            {/* Reset progress */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setShowConfirmReset(true)}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 flex items-center justify-center gap-2 transition-colors active:scale-98 cursor-pointer shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة ضبط كل البيانات المحفوظة</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Resetting All Data */}
      <ConfirmModal
        isOpen={showConfirmReset}
        title="إعادة ضبط كل البيانات"
        message="هل أنت متأكد من رغبتك في حذف السهرة الجارية ومسح سجل الأسئلة وتصفير ذاكرة الكروت والمفضلة؟ لا يمكن التراجع عن هذا الإجراء."
        confirmText="نعم، إعادة ضبط الكل"
        cancelText="إلغاء"
        isDestructive={true}
        onConfirm={() => {
          onResetProgress();
          setShowConfirmReset(false);
          onClose();
        }}
        onClose={() => setShowConfirmReset(false)}
      />
    </>
  );
};
