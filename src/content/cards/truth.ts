import { Card, DeckDefinition } from '../../types/game';

export const TRUTH_DECKS: DeckDefinition[] = [
  { id: 'tr-secrets', nameAr: 'أسرار وفضايح', descriptionAr: 'أسئلة هتدخلك في الغميق وتطلع المستخبي.', mood: 'bold' },
  { id: 'tr-relationships', nameAr: 'علاقات وكراشات', descriptionAr: 'أسئلة عن الحب والارتباط وتاريخك الأسود.', mood: 'deep' },
  { id: 'tr-spicy', nameAr: 'ع المكشوف', descriptionAr: 'أسئلة جريئة جداً ولازم تجاوب بصراحة.', mood: 'funny' },
];

export const TRUTH_CARDS: Card[] = [
  { id: 'tr-01', gameId: 'truth', deckId: 'tr-relationships', mood: 'deep', textAr: 'إيه أكتر سبب تافه خليك تفركش أو تبعد عن حد كنت مرتبط بيه؟' },
  { id: 'tr-02', gameId: 'truth', deckId: 'tr-relationships', mood: 'deep', textAr: 'هل عمرك عملت فيك أكونت (Fake Account) عشان تراقب حد؟ مين وليه؟' },
  { id: 'tr-03', gameId: 'truth', deckId: 'tr-relationships', mood: 'deep', textAr: 'لو الأكس (Ex) بتاعك بعتلك رسالة دلوقتي بيقولك نرجع.. رد فعلك الحقيقي هيكون إيه؟' },
  { id: 'tr-04', gameId: 'truth', deckId: 'tr-relationships', mood: 'deep', textAr: 'مين أكتر شخص في القعدة دي ممكن تأتمنه على سر يخص علاقاتك؟' },
  
  { id: 'tr-05', gameId: 'truth', deckId: 'tr-secrets', mood: 'bold', textAr: 'إيه أكتر حاجة عملتها وندمت عليها ومحدش في أهلك يعرفها لحد دلوقتي؟' },
  { id: 'tr-06', gameId: 'truth', deckId: 'tr-secrets', mood: 'bold', textAr: 'لو فتحنا الموبايل بتاعك دلوقتي وبصينا في السيرش هيستوري، إيه أكتر حاجة هتكسفك؟' },
  { id: 'tr-07', gameId: 'truth', deckId: 'tr-secrets', mood: 'bold', textAr: 'عمرك سرقت حاجة (حتى لو تافهة زي قلم أو بونبوني) وإنت صغير؟ احكيلنا.' },
  { id: 'tr-08', gameId: 'truth', deckId: 'tr-secrets', mood: 'bold', textAr: 'مين من صحابك المقربين كنت بتغير منه أو بتحقده عليه في فترة من الفترات؟' },
  
  { id: 'tr-09', gameId: 'truth', deckId: 'tr-spicy', mood: 'funny', textAr: 'مين في القعدة دي تحسه دمه تقيل أحيانا بس بتجاملوه؟' },
  { id: 'tr-10', gameId: 'truth', deckId: 'tr-spicy', mood: 'funny', textAr: 'إيه أكتر كدبة بتكدبها على الناس ومصدقينها عنك؟' },
  { id: 'tr-11', gameId: 'truth', deckId: 'tr-spicy', mood: 'funny', textAr: 'لو عرفت إن العالم هينتهي بكرة، إيه أول حاجة مجنونة أو ممنوعة هتعملها؟' },
  { id: 'tr-12', gameId: 'truth', deckId: 'tr-spicy', mood: 'funny', textAr: 'إيه أسوأ هدية جاتلك وعملت نفسك مبسوط بيها؟ ومن مين؟' }
];
