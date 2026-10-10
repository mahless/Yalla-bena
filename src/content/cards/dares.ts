import { Card, DeckDefinition } from '../../types/game';

export const DARES_DECKS: DeckDefinition[] = [
  {
    id: 'dare-funny',
    nameAr: 'أحكام مسخرة',
    descriptionAr: 'حاجات هبلة ومضحكة هتعملها غصب عنك وتخلي الكل يفطس من الضحك.',
    mood: 'funny',
  },
  {
    id: 'dare-bold',
    nameAr: 'تحديات جريئة',
    descriptionAr: 'أحكام تقيلة ومحرجة للي قلبه ميت بس!',
    mood: 'bold',
  },
];

export const DARES_CARDS: Card[] = [
  // --- أحكام مسخرة ---
  {
    id: 'dare-f-01',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'اتكلم لمدة دقيقتين كأنك مذيع نشرة أخبار بيعلق على اللي بيحصل في القعدة دلوقتي.',
  },
  {
    id: 'dare-f-02',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'قلد طريقة كلام ومشي أكتر واحد بتاخد عليه في القعدة دي لمدة دقيقة كاملة.',
  },
  {
    id: 'dare-f-03',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'صور سيلفي بشكلك وإنت بتعمل أغرب رياكشن بوشك ونزلها ستوري على إنستجرام لمده ساعة.',
  },
  {
    id: 'dare-f-04',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'غني أغنية رومانسية لأي جماد في الأوضة (كرسي، كوباية، الخ) كأنك متيم بيه.',
  },
  {
    id: 'dare-f-05',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'خلي حد من القعدة يحطلك ميك أب (أو يرسم على وشك بالقلم) وأفضل بيه لآخر السهرة.',
  },
  {
    id: 'dare-f-06',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'اشرب كوباية مية كاملة وإنت حاطط إيدك على مناخيرك وعامل صوت بطة بعد كل شفطة.',
  },
  {
    id: 'dare-f-07',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'اتصل بمطعم بيتزا واطلب كشري وحاول تقنعهم إنهم بيعملوه بس مخبيينه.',
  },
  {
    id: 'dare-f-08',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'كل لقمة من أكل موجود أو عصير بنكهتين مش لايقين على بعض خالص (مثلا شيبسي على شيكولاتة).',
  },
  {
    id: 'dare-f-09',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'اعمل نفسك روبوت بيعلق شحن وأطلب من اللي جنبك يشحنك.',
  },
  {
    id: 'dare-f-10',
    gameId: 'dares',
    deckId: 'dare-funny',
    mood: 'funny',
    textAr: 'ارقص بلدي لمدة ٣٠ ثانية من غير أي مزيكا، القعدة هما اللي هيسقفولك.',
  },
  
  // --- تحديات جريئة ---
  {
    id: 'dare-b-01',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'افتح آخر محادثة واتساب عندك واقرأ آخر 3 رسايل بصوت عالي قدامنا كلنا.',
  },
  {
    id: 'dare-b-02',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'ادي تليفونك للشخص اللي على يمينك يبعت رسالة من اختيارُه لأي حد في الـ Contacts.',
  },
  {
    id: 'dare-b-03',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'اتصل بحد من صحابك اللي مش موجودين وقوله "أنا اكتشفت سر خطير" واقفل السكة في وشه.',
  },
  {
    id: 'dare-b-04',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'ورينا الـ Search History بتاعك على يوتيوب أو جوجل آخر ٢٤ ساعة.',
  },
  {
    id: 'dare-b-05',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'قيم كل واحد في القعدة من ١ لـ ١٠ في الذكاء بصراحة تامة ومن غير زعل.',
  },
  {
    id: 'dare-b-06',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'اعترف بإيه أكتر صفة مستفزة في الشخص اللي على شمالك وإنت بتبصله في عينه.',
  },
  {
    id: 'dare-b-07',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'اتصل بوالدك أو والدتك وقولهم بجدية تامة إنك هتهاجر وتعيش في غابة.',
  },
  {
    id: 'dare-b-08',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'اختار حد في القعدة يعمل سيرش باسمك في صور تليفونك لمدة دقيقة كاملة.',
  },
  {
    id: 'dare-b-09',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'ابعث رسالة صوتية للمدير بتاعك (أو الدكتور) وقوله وحشتني جداً.',
  },
  {
    id: 'dare-b-10',
    gameId: 'dares',
    deckId: 'dare-bold',
    mood: 'bold',
    textAr: 'اعترف قدام الكل بكدبة كبيرة كدبتها على حد قاعد معانا أو حد من صحابنا المقربين.',
  }
];
