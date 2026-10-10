import { Card, DeckDefinition } from '../../types/game';

export const OPEN_TOPIC_DECKS: DeckDefinition[] = [
  { id: 'ot-icebreakers', nameAr: 'كسر التلج', descriptionAr: 'أسئلة خفيفة عشان نفك بيها القعدة.', mood: 'light' },
  { id: 'ot-deep', nameAr: 'في الغميق', descriptionAr: 'نقاشات عن الحياة، المبادئ، والقرارات الكبيرة.', mood: 'deep' },
  { id: 'ot-funny', nameAr: 'هبد وضحك', descriptionAr: 'مواضيع ملهاش لازمة بس هتموتنا من الضحك.', mood: 'funny' },
];

export const OPEN_TOPIC_CARDS: Card[] = [
  { id: 'ot-01', gameId: 'open-topic', deckId: 'ot-icebreakers', mood: 'light', textAr: 'إيه أكتر حاجة تافهة بتعصبك جداً ومش مبررة؟' },
  { id: 'ot-02', gameId: 'open-topic', deckId: 'ot-icebreakers', mood: 'light', textAr: 'لو تقدر تلغي أكلة واحدة من الوجود ومحدش ياكلها تاني.. هتختار إيه؟' },
  { id: 'ot-03', gameId: 'open-topic', deckId: 'ot-icebreakers', mood: 'light', textAr: 'مين أكتر شخصية كرتونية كنت بتحبها وإنت صغير وليه؟' },
  { id: 'ot-04', gameId: 'open-topic', deckId: 'ot-icebreakers', mood: 'light', textAr: 'إيه أول حاجة بتعملها أول ما بتصحى من النوم؟' },
  { id: 'ot-05', gameId: 'open-topic', deckId: 'ot-icebreakers', mood: 'light', textAr: 'لو حياتك كانت مسلسل.. تفتكر هيكون اسمه إيه وتصنيفه إيه؟' },
  { id: 'ot-06', gameId: 'open-topic', deckId: 'ot-icebreakers', mood: 'light', textAr: 'إيه أكتر تريند طلع على السوشيال ميديا ومكنتوش طايقينه؟' },
  { id: 'ot-07', gameId: 'open-topic', deckId: 'ot-icebreakers', mood: 'light', textAr: 'لو معاك تذكرة سفر دلوقتي لأي حتة في العالم.. هتطير على فين وتاخد مين معاك؟' },
  
  { id: 'ot-08', gameId: 'open-topic', deckId: 'ot-deep', mood: 'deep', textAr: 'تفتكر إيه أهم صفة لازم تكون موجودة في شريك حياتك ومفيش فيها فصال؟' },
  { id: 'ot-09', gameId: 'open-topic', deckId: 'ot-deep', mood: 'deep', textAr: 'إمتى بتحس إنك فعلاً حققت إنجاز في يومك؟ وإيه هو تعريفك للنجاح؟' },
  { id: 'ot-10', gameId: 'open-topic', deckId: 'ot-deep', mood: 'deep', textAr: 'لو قدامك فرصة ترجع بالزمن وتغير قرار واحد أخدته.. هتغير إيه؟' },
  { id: 'ot-11', gameId: 'open-topic', deckId: 'ot-deep', mood: 'deep', textAr: 'إيه أكتر درس اتعلمته من أكبر خسارة أو صدمة في حياتك؟' },
  { id: 'ot-12', gameId: 'open-topic', deckId: 'ot-deep', mood: 'deep', textAr: 'تفتكر السعادة قرار ولا مرتبطة بالظروف والفلوس والناس اللي حوالينا؟' },
  { id: 'ot-13', gameId: 'open-topic', deckId: 'ot-deep', mood: 'deep', textAr: 'إيه الحاجة اللي نفسك الناس دايماً تفتكرك بيها بعد عمر طويل؟' },
  
  { id: 'ot-14', gameId: 'open-topic', deckId: 'ot-funny', mood: 'funny', textAr: 'لو الحيوانات كانت بتتكلم.. تفتكر إيه أوقح حيوان فيهم وهيبقى بيقول إيه؟' },
  { id: 'ot-15', gameId: 'open-topic', deckId: 'ot-funny', mood: 'funny', textAr: 'إيه أكتر موقف محرج حصلك في المواصلات أو الشارع وكنت عايز الأرض تنشق وتبلعك؟' },
  { id: 'ot-16', gameId: 'open-topic', deckId: 'ot-funny', mood: 'funny', textAr: 'تخيل إنك بقيت وزير السعادة في مصر.. إيه أول قرار هتاخده؟' },
  { id: 'ot-17', gameId: 'open-topic', deckId: 'ot-funny', mood: 'funny', textAr: 'لو اتفرض عليك تلبس لبس واحد بس طول حياتك.. تفتكر هيكون بيجامة ولا بدلة ولا إيه؟' },
  { id: 'ot-18', gameId: 'open-topic', deckId: 'ot-funny', mood: 'funny', textAr: 'مين في القعدة دي تحسه أكتر واحد بيكبر المواضيع وبيعمل من الحبة قبة؟' }
];
