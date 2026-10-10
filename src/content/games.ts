import { GameDefinition, GameId } from '../types/game';

export const GAMES: Record<GameId, GameDefinition> = {
  'open-topic': {
    id: 'open-topic',
    titleAr: 'افتح الموضوع',
    taglineAr: 'نقاشات تبدأ خفيفة وتصل لأعماق غير متوقعة',
    descriptionAr: 'كروت مصممة لتفكيك الحواجز وبدء حوارات دافئة وممتعة بدون أي تكلف.',
    accentColor: '#F59E0B', // Amber
    glowColor: 'rgba(245, 158, 11, 0.25)',
    badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    cardPattern: 'dots-matrix',
    instructionsAr: 'اسحب الكارت، اقرأه بصوت واضح، وخلّوا كل شخص في السهرة يشارك رأيه بحرية.',
    recommendedPlayersAr: '2 - 10 لاعبين',
    defaultTurnMode: false,
  },
  'tell-us': {
    id: 'tell-us',
    titleAr: 'إحكيلنا',
    taglineAr: 'مواقف ومغامرات من الأرشيف الشخصي',
    descriptionAr: 'كل كارت هو مفتاح لقصة حقيقية عشتها ولم تُحكَ من قبل في هذه السهرة.',
    accentColor: '#10B981', // Emerald
    glowColor: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    cardPattern: 'rings',
    instructionsAr: 'صاحب الدور يقرأ الكارت ويحكي الموقف بالتفصيل وبدون فلترة.',
    recommendedPlayersAr: '3 - 8 لاعبين',
    defaultTurnMode: true,
  },
  'what-if': {
    id: 'what-if',
    titleAr: 'لو',
    taglineAr: 'مواقف افتراضية تأخذ العقل لمسارات غريبة',
    descriptionAr: 'سيناريوهات خيالية ومعضلات ممتعة تكشف طريقة تفكير كل شخص وقيمه الحقيقية.',
    accentColor: '#8B5CF6', // Purple / Violet
    glowColor: 'rgba(139, 92, 246, 0.25)',
    badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    cardPattern: 'waves',
    instructionsAr: 'تخيل أن الموقف واقعي تماماً، كيف ستتصرف وما هو مبررك؟',
    recommendedPlayersAr: '2 - 12 لاعب',
    defaultTurnMode: false,
  },
  'choose': {
    id: 'choose',
    titleAr: 'اختار',
    taglineAr: 'مفاضلات صعبة وخيارات لا تقبل الوسط',
    descriptionAr: 'خياران لا ثالث لهما.. أيهما ستضحي به؟ لا مجال للهروب أو الحياد.',
    accentColor: '#EC4899', // Pink / Rose
    glowColor: 'rgba(236, 72, 153, 0.25)',
    badgeBg: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    cardPattern: 'cross',
    instructionsAr: 'اختر جهة واحدة فوراً، وممنوع تقول "ولا واحدة" أو "الاثنين سوا"!',
    recommendedPlayersAr: '2 - 10 لاعبين',
    defaultTurnMode: false,
  },
  'who-among-us': {
    id: 'who-among-us',
    titleAr: 'مين فينا؟',
    taglineAr: 'تصويت جماعي يكشف حقيقتنا بروح مرحة',
    descriptionAr: 'عند العد لثلاثة، يشير الجميع بإصبعهم للشخص الأكثر انطباقاً عليه الكارت.',
    accentColor: '#06B6D4', // Cyan
    glowColor: 'rgba(6, 182, 212, 0.25)',
    badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    cardPattern: 'target',
    instructionsAr: 'القارئ يقرأ الكارت، والجميع يعد 1.. 2.. 3 ويشير إلى الشخص المقصود!',
    recommendedPlayersAr: '3 - 12 لاعب',
    defaultTurnMode: false,
  },
  'truth': {
    id: 'truth',
    titleAr: 'صراحة',
    taglineAr: 'أسئلة حقيقية بجرأة راقية وصدق نقي',
    descriptionAr: 'مساحة للأمان والمكاشفة الصادقة دون تجريح، لنقترب أكثر من بعضنا.',
    accentColor: '#F97316', // Orange
    glowColor: 'rgba(249, 115, 22, 0.25)',
    badgeBg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    cardPattern: 'diamonds',
    instructionsAr: 'الجواب يجب أن يكون نابعاً من القلب، ويحق للاعب تخطي كارت واحد فقط في السهرة.',
    recommendedPlayersAr: '2 - 6 لاعبين',
    defaultTurnMode: true,
  },
};

export const GAME_ORDER: GameId[] = [
  'open-topic',
  'tell-us',
  'what-if',
  'choose',
  'who-among-us',
  'truth',
];
