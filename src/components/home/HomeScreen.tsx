import React, { useState } from 'react';
import { GameId, GameSession, Player } from '../../types/game';
import { GAMES, GAME_ORDER } from '../../content/games';
import { getCardsForGame } from '../../content/cards';
import { ConfirmModal } from '../common/ConfirmModal';
import {
  Sparkles,
  Settings as SettingsIcon,
  Bookmark,
  History as HistoryIcon,
  Users,
  Play,
  ShieldCheck,
  ChevronLeft,
  RotateCcw,
  Layers,
  MessageSquare,
  BookOpen,
  Compass,
  Scale,
  Target,
  Flame,
  Zap,
} from 'lucide-react';
import { formatNumber } from '../../i18n/translations';

interface HomeScreenProps {
  onSelectGame: (gameId: GameId) => void;
  activeSession: GameSession | null;
  onResumeSession: () => void;
  onResetActiveSession: () => void;
  onQuickPlay: () => void;
  onOpenSettings: () => void;
  onOpenFavorites: () => void;
  onOpenHistory: () => void;
  onOpenPlayers: () => void;
  players: Player[];
  favoritesCount: number;
}

interface GameCardTheme {
  gradient: string;
  hoverGradient: string;
  glowRgba: string;
  borderColor: string;
  hoverBorderColor: string;
  iconBg: string;
  iconText: string;
  Icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const GAME_CARD_THEMES: Record<GameId, GameCardTheme> = {
  'open-topic': {
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF7 40%, #FEF8EC 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEB 35%, #FEF3C7 100%)',
    glowRgba: 'rgba(245, 158, 11, 0.16)',
    borderColor: 'rgba(245, 158, 11, 0.22)',
    hoverBorderColor: 'rgba(245, 158, 11, 0.5)',
    iconBg: 'bg-amber-500/10 border-amber-500/25',
    iconText: 'text-amber-700',
    Icon: MessageSquare,
    tag: 'حوارات ودفء',
  },
  'tell-us': {
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FAFEFC 40%, #EFFBF4 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 35%, #D1FAE5 100%)',
    glowRgba: 'rgba(16, 185, 129, 0.16)',
    borderColor: 'rgba(16, 185, 129, 0.22)',
    hoverBorderColor: 'rgba(16, 185, 129, 0.5)',
    iconBg: 'bg-emerald-500/10 border-emerald-500/25',
    iconText: 'text-emerald-700',
    Icon: BookOpen,
    tag: 'أرشيف وحكايات',
  },
  'what-if': {
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FDFBFF 40%, #F5EEFE 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFFFFF 0%, #FAF5FF 35%, #EDE9FE 100%)',
    glowRgba: 'rgba(139, 92, 246, 0.16)',
    borderColor: 'rgba(139, 92, 246, 0.22)',
    hoverBorderColor: 'rgba(139, 92, 246, 0.5)',
    iconBg: 'bg-purple-500/10 border-purple-500/25',
    iconText: 'text-purple-700',
    Icon: Compass,
    tag: 'خيال وتخيل',
  },
  'choose': {
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FDF9FB 40%, #FDF0F6 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFFFFF 0%, #FDF2F8 35%, #FCE7F3 100%)',
    glowRgba: 'rgba(236, 72, 153, 0.16)',
    borderColor: 'rgba(236, 72, 153, 0.22)',
    hoverBorderColor: 'rgba(236, 72, 153, 0.5)',
    iconBg: 'bg-pink-500/10 border-pink-500/25',
    iconText: 'text-pink-700',
    Icon: Scale,
    tag: 'مفاضلات صعبة',
  },
  'who-among-us': {
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #F8FCFD 40%, #EBF8FA 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFFFFF 0%, #ECFEFF 35%, #CFFAFE 100%)',
    glowRgba: 'rgba(6, 182, 212, 0.16)',
    borderColor: 'rgba(6, 182, 212, 0.22)',
    hoverBorderColor: 'rgba(6, 182, 212, 0.5)',
    iconBg: 'bg-cyan-500/10 border-cyan-500/25',
    iconText: 'text-cyan-700',
    Icon: Target,
    tag: 'تصويت ومرح',
  },
  'truth': {
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FCFAF7 40%, #FFF2E8 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 35%, #FFEDD5 100%)',
    glowRgba: 'rgba(249, 115, 22, 0.16)',
    borderColor: 'rgba(249, 115, 22, 0.22)',
    hoverBorderColor: 'rgba(249, 115, 22, 0.5)',
    iconBg: 'bg-orange-500/10 border-orange-500/25',
    iconText: 'text-orange-700',
    Icon: Flame,
    tag: 'صراحة وشفافية',
  },
  'dares': {
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #FEFDFD 40%, #FEF2F2 100%)',
    hoverGradient: 'linear-gradient(135deg, #FFFFFF 0%, #FEF2F2 35%, #FEE2E2 100%)',
    glowRgba: 'rgba(239, 68, 68, 0.16)',
    borderColor: 'rgba(239, 68, 68, 0.22)',
    hoverBorderColor: 'rgba(239, 68, 68, 0.5)',
    iconBg: 'bg-red-500/10 border-red-500/25',
    iconText: 'text-red-700',
    Icon: Zap,
    tag: 'أحكام مسخرة',
  },
};

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectGame,
  activeSession,
  onResumeSession,
  onResetActiveSession,
  onQuickPlay,
  onOpenSettings,
  onOpenFavorites,
  onOpenHistory,
  onOpenPlayers,
  players,
  favoritesCount,
}) => {
  const [showConfirmResetSession, setShowConfirmResetSession] = useState<boolean>(false);
  const [hoveredGameId, setHoveredGameId] = useState<GameId | null>(null);

  const activeGame =
    activeSession && activeSession.gameId in GAMES
      ? GAMES[activeSession.gameId as GameId]
      : null;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F5] text-stone-900 pb-10 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Top Header with Warm Orange Gradient & Layered Depth Shadow */}
      <header className="sticky top-0 z-30 px-5 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3.5 flex items-center justify-between bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-md shadow-orange-500/25 border-b border-orange-400/30 text-white">
        {/* Brand Title */}
        <div>
          <h1 className="text-xl xs:text-2xl font-black tracking-tight text-white leading-tight">
            يلا نرغي
          </h1>
          <p className="text-[11px] xs:text-xs text-orange-100/90 font-medium mt-0.5">
            سهرات ممتعة وحوارات تصنع الذكريات
          </p>
        </div>

        {/* Top actions */}
        <div className="flex items-center gap-1.5">
          {/* Favorites */}
          <button
            type="button"
            onClick={onOpenFavorites}
            className="p-2 rounded-xl text-white/95 hover:text-white bg-white/15 hover:bg-white/25 active:scale-95 border border-white/25 transition-all relative cursor-pointer backdrop-blur-xs shadow-2xs"
            title="المفضلة"
            aria-label="المفضلة"
          >
            <Bookmark className="w-4 h-4" />
            {favoritesCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-200 ring-2 ring-orange-500" />
            )}
          </button>

          {/* History */}
          <button
            type="button"
            onClick={onOpenHistory}
            className="p-2 rounded-xl text-white/95 hover:text-white bg-white/15 hover:bg-white/25 active:scale-95 border border-white/25 transition-all cursor-pointer backdrop-blur-xs shadow-2xs"
            title="السجل"
            aria-label="السجل"
          >
            <HistoryIcon className="w-4 h-4" />
          </button>

          {/* Settings */}
          <button
            type="button"
            onClick={onOpenSettings}
            className="p-2 rounded-xl text-white/95 hover:text-white bg-white/15 hover:bg-white/25 active:scale-95 border border-white/25 transition-all cursor-pointer backdrop-blur-xs shadow-2xs"
            title="الإعدادات"
            aria-label="الإعدادات"
          >
            <SettingsIcon className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="px-5 pt-4 space-y-6 flex-1 max-w-md mx-auto w-full">
        {/* Editorial Greeting & Tagline */}
        <section className="pt-2">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-700 mb-1 flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            جاهز أوفلاين بالكامل 100%
          </p>
          <h2 className="text-2xl xs:text-3xl font-extrabold tracking-tight text-stone-900 leading-tight">
            كروت وأسئلة لسهره أحلي ...
          </h2>
        </section>

        {/* Active Session / Quick Play Hero Tile */}
        {activeSession && activeGame ? (
          <section className="relative overflow-hidden rounded-[26px] p-5 border border-amber-200/90 bg-gradient-to-br from-white via-[#FFFDF9] to-[#FEF8EC] shadow-xl shadow-amber-500/10">
            <div
              className="absolute -right-12 -top-12 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: activeGame.accentColor }}
            />
            <div className="relative z-10 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-300/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  سهرة جارية حالياً
                </span>
                <span className="text-xs font-mono text-stone-600 font-bold">
                  {formatNumber(activeSession.currentIndex + 1)} / {formatNumber(activeSession.cardIds.length)}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-0.5">
                  {activeGame.titleAr}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-1">
                  {activeGame.taglineAr}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={onResumeSession}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 text-stone-950 transition-all active:scale-[0.98] cursor-pointer shadow-md hover:brightness-105"
                  style={{ backgroundColor: activeGame.accentColor }}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>متابعة السهرة</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmResetSession(true)}
                  className="py-3 px-3.5 rounded-xl bg-white hover:bg-stone-100 hover:text-stone-900 text-stone-600 text-xs font-semibold border border-stone-200 cursor-pointer transition-colors flex items-center gap-1.5 shadow-2xs"
                  title="إنهاء السهرة وإعادة التعيين"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة ضبط</span>
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className="relative overflow-hidden rounded-[26px] p-5 border border-amber-200/80 bg-gradient-to-br from-white via-[#FFFDF9] to-[#FEF8EB] shadow-lg shadow-amber-500/12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-300/60 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-600" />
                لعب سريع فوري
              </span>
              <span className="text-[11px] text-stone-600 font-mono font-medium">
                بنقرة واحدة
              </span>
            </div>

            <p className="text-xs text-stone-700 mb-4 leading-relaxed">
              ابدأ مباشرة بمجموعة أسئلة مختارة عشوائياً بدون إعدادات أو انتظار.
            </p>

            <button
              type="button"
              onClick={onQuickPlay}
              className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-amber-500/25 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>ابدأ كارت الليلة</span>
            </button>
          </section>
        )}

        {/* Players Quick Bar */}
        <section className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-md shadow-stone-200/60">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700 border border-stone-200/60">
              <Users className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-stone-900 block">
                رواد السهرة
              </span>
              <p className="text-[11px] text-stone-600 truncate">
                {players.map((p) => p.name).join(' · ')}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenPlayers}
            className="text-xs font-bold text-amber-800 hover:text-amber-900 whitespace-nowrap px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200/70 transition-colors cursor-pointer shadow-2xs"
          >
            تعديل
          </button>
        </section>

        {/* Games Discovery Grid */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600">
              اختر لعبتك
            </h3>
            <span className="text-xs text-stone-600 font-mono font-medium">
              {formatNumber(GAME_ORDER.length)} ألعاب متوفرة
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {GAME_ORDER.map((gameId) => {
              const game = GAMES[gameId];
              const theme = GAME_CARD_THEMES[gameId];
              const isHovered = hoveredGameId === gameId;
              const cardCount = getCardsForGame(gameId).length;
              const Icon = theme.Icon;

              return (
                <div
                  key={gameId}
                  onClick={() => onSelectGame(gameId)}
                  onMouseEnter={() => setHoveredGameId(gameId)}
                  onMouseLeave={() => setHoveredGameId(null)}
                  className="group relative overflow-hidden rounded-[24px] p-5 transition-all duration-300 cursor-pointer active:scale-[0.99] border hover:-translate-y-0.5"
                  style={{
                    background: isHovered ? theme.hoverGradient : theme.gradient,
                    borderColor: isHovered ? theme.hoverBorderColor : theme.borderColor,
                    boxShadow: isHovered
                      ? `0 20px 36px -6px ${theme.glowRgba}, 0 8px 16px -4px rgba(0,0,0,0.08), 0 0 0 1px ${theme.hoverBorderColor}`
                      : '0 8px 24px -4px rgba(0, 0, 0, 0.07), 0 3px 8px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  {/* Subtle top chic gradient bar */}
                  <div
                    className="absolute top-0 right-0 left-0 h-[3px] transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to left, ${game.accentColor}, ${game.accentColor}33)`,
                      opacity: isHovered ? 1 : 0.85,
                    }}
                  />

                  {/* Soft ambient light glow in bottom corner */}
                  <div
                    className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full pointer-events-none blur-2xl transition-opacity duration-500"
                    style={{
                      backgroundColor: game.accentColor,
                      opacity: isHovered ? 0.22 : 0.12,
                    }}
                  />

                  <div className="relative z-10 flex items-start justify-between gap-3.5">
                    {/* Left details */}
                    <div className="space-y-2 flex-1">
                      {/* Title & Tag */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {/* Game Icon */}
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${theme.iconBg} ${theme.iconText}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        <h4 className="text-lg font-bold text-stone-900 group-hover:text-stone-950 transition-colors">
                          {game.titleAr}
                        </h4>

                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide"
                          style={{
                            backgroundColor: `${game.accentColor}12`,
                            color: game.accentColor,
                            borderColor: `${game.accentColor}30`,
                          }}
                        >
                          {theme.tag}
                        </span>
                      </div>

                      {/* Tagline */}
                      <p className="text-xs text-stone-600 line-clamp-1 pr-0.5 leading-relaxed">
                        {game.taglineAr}
                      </p>

                      {/* Info badges */}
                      <div className="pt-1 flex items-center gap-2.5 text-[11px] text-stone-600">
                        <span className="flex items-center gap-1 font-mono font-medium bg-white/80 px-2 py-0.5 rounded-md border border-stone-200/60 shadow-2xs">
                          <Layers className="w-3 h-3 text-stone-400" />
                          <span>{formatNumber(cardCount)} كارت</span>
                        </span>

                        <span className="flex items-center gap-1 font-mono font-medium bg-white/80 px-2 py-0.5 rounded-md border border-stone-200/60 shadow-2xs">
                          <Users className="w-3 h-3 text-stone-400" />
                          <span>{game.recommendedPlayersAr}</span>
                        </span>
                      </div>
                    </div>

                    {/* Right Chevron Button */}
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shrink-0 shadow-2xs"
                      style={{
                        backgroundColor: isHovered ? `${game.accentColor}25` : `${game.accentColor}15`,
                        color: game.accentColor,
                        borderColor: `${game.accentColor}35`,
                      }}
                    >
                      <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-xs text-stone-600 px-5">
        <p className="flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
          <span>يلا نرغي · ألعاب كروت اجتماعية أوفلاين</span>
        </p>
      </footer>

      {/* Confirmation Modal for Resetting Active Session */}
      <ConfirmModal
        isOpen={showConfirmResetSession}
        title="إعادة تعيين السهرة الحالية"
        message={
          activeGame
            ? `هل أنت متأكد من رغبتك في إنهاء السهرة الجارية للعبة "${activeGame.titleAr}"؟ سيتم حذف تقدم الكروت والبدء من جديد.`
            : 'هل أنت متأكد من رغبتك في إنهاء السهرة الجارية؟'
        }
        confirmText="نعم، إنهاء السهرة"
        cancelText="تراجع"
        isDestructive={true}
        onConfirm={() => {
          onResetActiveSession();
          setShowConfirmResetSession(false);
        }}
        onClose={() => setShowConfirmResetSession(false)}
      />
    </div>
  );
};
