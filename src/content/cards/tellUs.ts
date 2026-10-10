import { Card, DeckDefinition } from '../../types/game';

export const TELL_US_DECKS: DeckDefinition[] = [
  { id: 'tu-memories', nameAr: 'ذكريات وعدت', descriptionAr: 'حاجات من الطفولة والمراهقة مستحيل تتنسي.', mood: 'light' },
  { id: 'tu-embarrassing', nameAr: 'فضايح ومواقف', descriptionAr: 'حكايات عن مواقف محرجة وكوارث عملتها.', mood: 'funny' },
  { id: 'tu-first-times', nameAr: 'أول مرة', descriptionAr: 'أول حب، أول شغل، أول خازوق.. احكيلنا.', mood: 'deep' },
];

export const TELL_US_CARDS: Card[] = [
  { id: 'tu-01', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن موقف عملت فيه ناصح وطلعت في الآخر مبصمجي ولبست في الحيط.' },
  { id: 'tu-02', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا أكتر موقف اتحرجت فيه قدام الكراش أو حد كنت معجب بيه زمان.' },
  { id: 'tu-03', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن كدبة كدبتها على أهلك وإنت صغير واكتشفوها وعملولك فضيحة.' },
  { id: 'tu-04', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن رسالة أو مسدج بعتها لشخص غلط وجابتلك كارثة.' },
  { id: 'tu-05', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن خناقة في الشارع أو في المواصلات دخلت فيها أو كنت شاهد عليها.' },
  
  { id: 'tu-06', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول انترفيو شغل تعمله في حياتك وكان إحساسك إيه.' },
  { id: 'tu-07', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول حب في حياتك (أيام المدرسة أو الجامعة) وانتهى إزاي.' },
  { id: 'tu-08', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول مرة شلت فيها مسؤولية كبيرة وحسيت إنك كبرت فجأة.' },
  { id: 'tu-09', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول مرة تسافر فيها لوحدك أو تبعد عن أهلك فترة طويلة.' },
  
  { id: 'tu-10', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا عن أكتر مقلب عملته في حد من صحابك أو العيلة.' },
  { id: 'tu-11', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا عن أكتر حاجة تافهة كنت بتخاف منها وإنت صغير (عفريت الدولاب، الخ).' },
  { id: 'tu-12', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا ذكرياتك مع امتحانات الثانوية العامة وأغرب حاجة حصلتلك وقتها.' },
  { id: 'tu-13', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا عن أغرب دكتور أو مدرس شفته في حياتك.' }
];
