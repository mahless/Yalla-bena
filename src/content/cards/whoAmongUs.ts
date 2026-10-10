import { Card, DeckDefinition } from '../../types/game';

export const WHO_AMONG_US_DECKS: DeckDefinition[] = [
  { id: 'wau-friends', nameAr: 'صحاب وعشرة', descriptionAr: 'عشان نشوف مين أكتر واحد معروف بصفات معينة.', mood: 'light' },
  { id: 'wau-dark', nameAr: 'المستخبي', descriptionAr: 'أسئلة خبيثة بتطلع فضايح القعدة.', mood: 'bold' },
];

export const WHO_AMONG_US_CARDS: Card[] = [
  { id: 'wau-01', gameId: 'who-among-us', deckId: 'wau-friends', mood: 'light', textAr: 'مين أكتر واحد ممكن يتأخر على خروجة ويقول "أنا تحت البيت" وهو لسه في السرير؟' },
  { id: 'wau-02', gameId: 'who-among-us', deckId: 'wau-friends', mood: 'light', textAr: 'مين أكتر واحد بيصرف فلوسه على الأكل واللبس وبيفلس أول الشهر؟' },
  { id: 'wau-03', gameId: 'who-among-us', deckId: 'wau-friends', mood: 'light', textAr: 'مين أكتر واحد مدمن سوشيال ميديا وموبايله مبيفارقش إيده أبداً؟' },
  { id: 'wau-04', gameId: 'who-among-us', deckId: 'wau-friends', mood: 'light', textAr: 'مين أكتر واحد فينا دراما كوين وبيكبر أي مشكلة تافهة؟' },
  { id: 'wau-05', gameId: 'who-among-us', deckId: 'wau-friends', mood: 'light', textAr: 'مين أكتر واحد بيعمل خطط ومشاريع ومبينفذش منها أي حاجة؟' },
  
  { id: 'wau-06', gameId: 'who-among-us', deckId: 'wau-dark', mood: 'bold', textAr: 'مين أكتر واحد ممكن يبيعنا كلنا لو ارتبط أو حب جديد؟' },
  { id: 'wau-07', gameId: 'who-among-us', deckId: 'wau-dark', mood: 'bold', textAr: 'مين أكتر واحد لسانه متبري منه وبيقول كلام دبش من غير ما يحس؟' },
  { id: 'wau-08', gameId: 'who-among-us', deckId: 'wau-dark', mood: 'bold', textAr: 'مين أكتر واحد بيبان ملاك بس هو من جواه سوسة ومصيبة؟' },
  { id: 'wau-09', gameId: 'who-among-us', deckId: 'wau-dark', mood: 'bold', textAr: 'مين أكتر واحد صوره على السوشيال ميديا أحلى بكتير من الحقيقة؟' },
  { id: 'wau-10', gameId: 'who-among-us', deckId: 'wau-dark', mood: 'bold', textAr: 'مين أكتر واحد عنده القدرة يكذب ويبصلك في عينك ويقنعك وهو بيكذب؟' },
];
