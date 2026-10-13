import React, { useState } from 'react';
import { Player } from '../../types/game';
import { ConfirmModal } from '../common/ConfirmModal';
import { X, Plus, Trash2, User } from 'lucide-react';

interface PlayerManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  players: Player[];
  onSavePlayers: (players: Player[]) => void;
}

const AVATAR_COLORS = [
  '#F59E0B', '#10B981', '#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#3B82F6', '#84CC16'
];

export const PlayerManagerModal: React.FC<PlayerManagerModalProps> = ({
  isOpen,
  onClose,
  players,
  onSavePlayers,
}) => {
  const [list, setList] = useState<Player[]>(players);
  const [newName, setNewName] = useState<string>('');
  const [playerToDelete, setPlayerToDelete] = useState<Player | null>(null);
  const [showMinLimitNotice, setShowMinLimitNotice] = useState<boolean>(false);

  // Sync internal list if props change
  React.useEffect(() => {
    setList(players);
  }, [players]);

  if (!isOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    const newPlayer: Player = {
      id: `p_${Date.now()}`,
      name: newName.trim(),
      color: AVATAR_COLORS[list.length % AVATAR_COLORS.length],
    };
    const updated = [...list, newPlayer];
    setList(updated);
    onSavePlayers(updated);
    setNewName('');
  };

  const initiateDelete = (player: Player) => {
    if (list.length <= 2) {
      setShowMinLimitNotice(true);
      return;
    }
    setPlayerToDelete(player);
  };

  const confirmDeletePlayer = () => {
    if (!playerToDelete) return;
    const updated = list.filter((p) => p.id !== playerToDelete.id);
    setList(updated);
    onSavePlayers(updated);
    setPlayerToDelete(null);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
        <div
          className="w-full sm:max-w-md bg-white border border-stone-200 rounded-t-[28px] sm:rounded-[28px] overflow-hidden flex flex-col max-h-[85dvh] shadow-2xl shadow-stone-950/30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-stone-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900">
                  إدارة اللاعبين
                </h2>
                <p className="text-xs text-stone-500">
                  لتحديد وتدوير الدور بين اللاعبين أثناء اللعب
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full bg-stone-100 hover:bg-stone-200 cursor-pointer transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Players List */}
          <div className="p-5 overflow-y-auto space-y-2.5 flex-1">
            {list.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-stone-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded-full flex-shrink-0 shadow-2xs"
                    style={{ backgroundColor: player.color }}
                  />
                  <span className="text-sm font-bold text-stone-900">{player.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => initiateDelete(player)}
                  className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                  aria-label={`حذف ${player.name}`}
                  title={`حذف ${player.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* Add Player Input */}
            <form onSubmit={handleAdd} className="flex gap-2 pt-2">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="اسم لاعب جديد..."
                className="flex-1 bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-2xs"
                maxLength={20}
              />
              <button
                type="submit"
                disabled={!newName.trim()}
                className="px-4 py-2.5 bg-amber-500 disabled:opacity-40 text-stone-950 font-bold rounded-xl text-sm flex items-center gap-1 active:scale-95 transition-all cursor-pointer shadow-2xs"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة</span>
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="p-4 pb-[max(1.25rem,calc(0.75rem+env(safe-area-inset-bottom,0px)))] border-t border-stone-100 bg-stone-50">
            <button
              onClick={onClose}
              className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-sm transition-colors text-center cursor-pointer shadow-sm active:scale-98"
            >
              تم
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal to Delete Player */}
      <ConfirmModal
        isOpen={Boolean(playerToDelete)}
        title="حذف اللاعب"
        message={playerToDelete ? `هل أنت متأكد من رغبتك في حذف "${playerToDelete.name}" من قائمة اللاعبين؟` : ''}
        confirmText="نعم، حذف"
        cancelText="إلغاء"
        isDestructive={true}
        onConfirm={confirmDeletePlayer}
        onClose={() => setPlayerToDelete(null)}
      />

      {/* Minimum Limit Notice Modal */}
      <ConfirmModal
        isOpen={showMinLimitNotice}
        title="تنبيه عدد اللاعبين"
        message="يجب الإبقاء على لاعبين اثنين على الأقل لتفعيل نظام الأدوار في السهرة."
        confirmText="حسناً"
        cancelText="إغلاق"
        isDestructive={false}
        onConfirm={() => setShowMinLimitNotice(false)}
        onClose={() => setShowMinLimitNotice(false)}
      />
    </>
  );
};
