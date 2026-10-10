import { Card, DeckDefinition } from '../../types/game';

export const WHAT_IF_DECKS: DeckDefinition[] = [
  { id: 'wi-fantasy', nameAr: 'تخيلات مجنونة', descriptionAr: 'سيناريوهات مستحيلة بس ممتعة للتفكير.', mood: 'light' },
  { id: 'wi-dilemmas', nameAr: 'زنقة ومواقف', descriptionAr: 'مواقف هتحطك في كورنر وتشوفك هتعمل إيه.', mood: 'deep' },
  { id: 'wi-egyptian', nameAr: 'من قلب الشارع', descriptionAr: 'مواقف مصرية أصيلة هتموتك من الضحك.', mood: 'funny' },
];

export const WHAT_IF_CARDS: Card[] = [
  { id: 'wi-01', gameId: 'what-if', deckId: 'wi-egyptian', mood: 'funny', textAr: 'لو ركبت ميكروباص ولقيت السواق بيتخانق معاك وعايزك تدفع أجرة زيادة بالعافية، والميكروباص كله ساكت.. هتعمل إيه؟' },
  { id: 'wi-02', gameId: 'what-if', deckId: 'wi-egyptian', mood: 'funny', textAr: 'لو روحت فرح ولقيت البوفيه بيخلص والناس بتهجم عليه.. هتدخل المعركة ولا هتحافظ على برستيجك؟' },
  { id: 'wi-03', gameId: 'what-if', deckId: 'wi-egyptian', mood: 'funny', textAr: 'لو عازم حد مهم جداً في مطعم فخم، وبعد ما أكلتوا اكتشفت إنك نسيت المحفظة والموبايل فاصل شحن.. هتتصرف إزاي؟' },
  
  { id: 'wi-04', gameId: 'what-if', deckId: 'wi-fantasy', mood: 'light', textAr: 'لو صحيت الصبح لقيت نفسك اختفيت وتقدر تدخل أي مكان من غير ما حد يشوفك.. هتروح فين أول حاجة؟' },
  { id: 'wi-05', gameId: 'what-if', deckId: 'wi-fantasy', mood: 'light', textAr: 'لو قدامك زرار أحمر لو دست عليه هتاخد مليون جنيه، بس في شخص متعرفوش في العالم هيموت.. هتدوس عليه؟' },
  { id: 'wi-06', gameId: 'what-if', deckId: 'wi-fantasy', mood: 'light', textAr: 'لو الزمن وقف لمدة ٢٤ ساعة وكل الناس متجمدة ما عدا إنت.. هتعمل إيه في اليوم ده؟' },
  
  { id: 'wi-07', gameId: 'what-if', deckId: 'wi-dilemmas', mood: 'deep', textAr: 'لو اكتشفت إن صديقك الانتيم بيخون خطيبته أو مراته، وهي سألتك.. هتقولها الحقيقة وتخسره ولا هتداري عليه؟' },
  { id: 'wi-08', gameId: 'what-if', deckId: 'wi-dilemmas', mood: 'deep', textAr: 'لو عرفت إن باقي من عمرك شهر واحد بس، إيه أول ٣ حاجات هتعملهم وإيه الحاجة اللي هتندم إنك معملتهاش؟' },
  { id: 'wi-09', gameId: 'what-if', deckId: 'wi-dilemmas', mood: 'deep', textAr: 'لو جالك عرض شغل بضعف مرتبك بس في شركة بتعمل منتجات بتضر الناس (زي السجاير مثلاً).. هتقبل؟' }
];
