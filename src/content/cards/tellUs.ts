import { Card, DeckDefinition } from '../../types/game';

export const TELL_US_DECKS: DeckDefinition[] = [
  {
    id: 'tu-memories',
    nameAr: 'أرشيف المواقف',
    descriptionAr: 'مواقف محرجة أو مضحكة حدثت معك في الواقع ولا يمكن نسيانها.',
    mood: 'funny',
  },
  {
    id: 'tu-milestones',
    nameAr: 'محطات لا تُنسى',
    descriptionAr: 'تجارب مفصلية غيرت طريقة تفكيرك أو تركت أثراً عميقاً في روحك.',
    mood: 'deep',
  },
  {
    id: 'tu-work',
    nameAr: 'الشغل والدراسة',
    descriptionAr: 'كوامش أول وظيفة، مقالب الامتحانات، ومفارقات بيئات العمل.',
    mood: 'funny',
  },
  {
    id: 'tu-confessions',
    nameAr: 'اعترافات هادئة',
    descriptionAr: 'أسرار لطيفة، كوارث صغيرة ارتكبتها وأنكرتها، ومواقف حان وقت كشفها.',
    mood: 'bold',
  },
  {
    id: 'tu-travel',
    nameAr: 'مغامرات وسفر',
    descriptionAr: 'طرقات ضائعة، قطارات فاتت، ومواقف غير متوقعة في رحلات السفر.',
    mood: 'light',
  },
  {
    id: 'tu-childhood',
    nameAr: 'شغب الطفولة',
    descriptionAr: 'مغامرات الصغر، ألعاب الشارع، وكوارث الطفولة البريئة.',
    mood: 'funny',
  },
];

export const TELL_US_CARDS: Card[] = [
  // --- 1. أرشيف المواقف (tu-memories) ---
  {
    id: 'tu-01',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن أكبر موقف محرج تعرضت له أمام حد كنت حريصاً جداً أن تبدو مثالياً ورصيناً أمامه.',
    subtextAr: 'تعثر بالخطوات؟ كلام دخل في بعضه؟ نسيت اسمه تماماً؟',
  },
  {
    id: 'tu-02',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن كذبة بيضاء صغيرة قلتها وتضخمت فجأة حتى كادت تورطك في مأزق درامي كبير.',
  },
  {
    id: 'tu-03',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف ظننت فيه أنك تعرف حداً ورحبت به بحرارة في الشارع، واكتشفت أنه حد غريب تماماً!',
    subtextAr: 'إزاي تداركت الفضيحة أم هربت بسرعة؟',
  },
  {
    id: 'tu-04',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن هدية غريبة أو غير مناسبة إطلاقاً تلقيتها واضطررت للمجاملة وإظهار الانبهار بها.',
  },
  {
    id: 'tu-05',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف شعرت فيه أن الأرض تبتلعك من فرط الإحراج خلال تجمع أو مناسبة رسمية.',
  },
  {
    id: 'tu-06',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف أرسلت فيه رسالة أو سكرين شوت للحد المعني نفسه بالخطأ!',
    subtextAr: 'وإيه كان رد فعلك ورد فعله في تلك اللحظة المرعبة؟',
  },
  {
    id: 'tu-07',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن تجربة طبخ أو اختراع قمت به في المطبخ وانتهى بكارثة ودخان وإخلاء المكان.',
  },

  // --- 2. محطات لا تُنسى (tu-milestones) ---
  {
    id: 'tu-11',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن أول مرة كسبت فيها مالاً من عرق جبينك.. كم كان المبلغ وفيم أنفقته؟',
  },
  {
    id: 'tu-12',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن لحظة شعرت فيها أنك ودعت مرحلة الشباب الطائش وبدأت تتحمل مسؤولية حقيقية.',
  },
  {
    id: 'tu-13',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن حد غريب التقيته صدفة في قطار أو طائرة أو مستشفى، ولن تنسى محادثته ما حييت.',
  },
  {
    id: 'tu-14',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن أزمة ظننت في وقتها أنها نهاية العالم، ولكنها كانت البداية الحقيقية لأفضل حاجة حدث لك.',
  },
  {
    id: 'tu-15',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن قرار جريء جداً اتخذته ضد رغبة الجميع وأثبتت الأيام أنك كنت على صواب تام.',
  },
  {
    id: 'tu-16',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن تجربة جعلتك تعيد تقدير وجود عائلتك وصحتك بنظرة مختلفة كلياً.',
  },

  // --- 3. الشغل والدراسة (tu-work) ---
  {
    id: 'tu-wrk-01',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن أسوأ أو أغرب مقابلة عمل (Interview) خضتها في حياتك والأسئلة العجيبة اللي سُئلت إياها.',
  },
  {
    id: 'tu-wrk-02',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن امتحان دخلته وأنت لم تفتح الكتاب، واضطررت لتأليف إجابات خيالية ملحمية.',
  },
  {
    id: 'tu-wrk-03',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف تورطت فيه في العمل أو الجامعة وألصقت التهمة بحاجة وهمي لتنجو بنفسك!',
  },
  {
    id: 'tu-wrk-04',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن أغرب زميل عمل أو دراسة تعاملت معه وعاداته اللي كانت تصيب الجميع بالدهشة.',
  },
  {
    id: 'tu-wrk-05',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف نمت فيه أثناء محاضرة أو اجتماع مهم، وإزاي كان الاستيقاظ المفاجئ!',
  },

  // --- 4. اعترافات هادئة (tu-confessions) ---
  {
    id: 'tu-21',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن حاجة كسرته أو أتلفتَه في صغرك أو في بيت أحد الأقارب وأخفيت الدليل وأنكرت المعرفة به حتى اليوم!',
  },
  {
    id: 'tu-22',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن رأي حدي في صديق مقرب لم تجرؤ على مصارحته به حتى لا تجرح مشاعره.',
  },
  {
    id: 'tu-23',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن عادة أو طقس تفعله وتظن أنك الوحيد في العالم اللي يقوم به.',
  },
  {
    id: 'tu-24',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن شراء حاجة باهظ الثمن وندمت عليه فور مغادرتك للمتجر.',
  },
  {
    id: 'tu-25',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن مجاملة قلتها في موقف ما وكانت عكس ما في قلبك تماماً.',
  },

  // --- 5. مغامرات وسفر (tu-travel) ---
  {
    id: 'tu-31',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن موقف ضعت فيه تماماً في مدينة غريبة بدون إنترنت أو وسيلة لمعرفة الطريق.',
  },
  {
    id: 'tu-32',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن رحلة سفر خططت لها بعناية وحدثت فيها مفاجأة قلبت كل الموازين وجعلتها لا تُنسى.',
  },
  {
    id: 'tu-33',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن أغرب وسيلة مواصلات ركبتها أو أطول طريق بري قضيته مع أصدقاء.',
  },
  {
    id: 'tu-34',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن أكلة غريبة جداً جربتها في سفر أو مطعم شعبي وكانت صدمة لذائقتك.',
  },

  // --- 6. شغب الطفولة (tu-childhood) ---
  {
    id: 'tu-41',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن أكبر مصيبة ارتكبتها في المدرسة واستدعى الأمر استدعاء ولي أمرك.',
  },
  {
    id: 'tu-42',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن اختراع أو تجربة علمية خطيرة نفذتها في طفولتك وكادت تسبب كارثة في البيت.',
  },
  {
    id: 'tu-43',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن لعبة طفولية كنت تلعبها في الحارة أو النادي وأصابتك بندبة ما زالت موجودة في جسدك حتى اليوم.',
  },
  {
    id: 'tu-44',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن حاجة كنت تجمعه بشغف في طفولتك (ستيكرز، بطاقات بوكيمون، عملات، ألعاب كندر).',
  },

  // --- إضافات مميزة لدعم المحتوى (تناسب الأعمار 10 - 50 سنة) ---
  // أرشيف المواقف (tu-memories)
  {
    id: 'tu-mem-08',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف ظننت فيه أن حداً يلوح لك ويسلم بحرارة فرددت عليه بحماس، ثم اكتشفت أنه يلوح لحد يقف خلفك مباشرة!',
  },
  {
    id: 'tu-mem-09',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف اشتريت فيه غرضاً عبر الإنترنت ووصلك بحجم أو شكل مضحك مختلف تماماً عن الصورة.',
  },
  {
    id: 'tu-mem-10',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف ارتبكت فيه جداً أثناء إلقاء كلمة أو قراءة نص أمام جمع من الناس وتلعثم لسانك بكلمة غريبة.',
  },
  {
    id: 'tu-mem-11',
    gameId: 'tell-us',
    deckId: 'tu-memories',
    mood: 'light',
    textAr: 'إحكيلنا عن صدفة غريبة وجميلة جمعتك بحد غير متوقع في مكان بعيد جداً عن مدينتك.',
  },

  // محطات لا تُنسى (tu-milestones)
  {
    id: 'tu-mls-07',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن لحظة استلام أول مكافأة أو راتب من عرق جبينك، وإيه هو أول حاجة اشتريته به أو لمن أهديته؟',
  },
  {
    id: 'tu-mls-08',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن قرار جريء اتخذته والجميع يعارضك، وأثبتت الأيام لابجد أنه كان من أفضل القرارات في حياتك.',
  },
  {
    id: 'tu-mls-09',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن مرحلة صعبة أو سنة مليئة بالتحديات مررت بها، وإزاي تغيرت نظرتك للأمور بعدها.',
  },
  {
    id: 'tu-mls-10',
    gameId: 'tell-us',
    deckId: 'tu-milestones',
    mood: 'deep',
    textAr: 'إحكيلنا عن إنجاز بسيط لا يعرف عنه أحد غيرك لكنه كان يعني لك انتصاراً حدياً هائلاً على نفسك.',
  },

  // الشغل والدراسة (tu-work)
  {
    id: 'tu-wrk-06',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن موقف طريف حدث معك في امتحان مادة لم تكن مذاكراً فيها شيئاً واضطررت لتأليف إجابات خيالية.',
  },
  {
    id: 'tu-wrk-07',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن أول مقابلة عمل (Interview) خضتها في حياتك والتوتر المضحك اللي صاحبها.',
  },
  {
    id: 'tu-wrk-08',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'light',
    textAr: 'إحكيلنا عن زميل دراسة أو عمل كان غريب الأطوار بتصرفاته لكنه ترك بصمة لا تُنسى في ذاكرتك.',
  },
  {
    id: 'tu-wrk-09',
    gameId: 'tell-us',
    deckId: 'tu-work',
    mood: 'funny',
    textAr: 'إحكيلنا عن أسوأ عرض تقديمي (Presentation) قدمته وكان جهاز العرض أو الميكروفون يعاندك طوال الوقت.',
  },

  // اعترافات هادئة (tu-confessions)
  {
    id: 'tu-cnf-06',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن طبخة أو وصفة قمت بإعدادها وخرجت كارثية لكن الحاضرين جاملوك وأكلوها بصعوبة.',
  },
  {
    id: 'tu-cnf-07',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن هدية وصلتك ولم تعجبك أبداً، وتظاهرت بالانبهار بها ثم أعدت إهداءها أو خبأتها في الدولاب.',
  },
  {
    id: 'tu-cnf-08',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن مناسبة تظاهرت بالمرض أو التعب بس للهروب من حضورها وقضاء وقت راحة في المنزل.',
  },
  {
    id: 'tu-cnf-09',
    gameId: 'tell-us',
    deckId: 'tu-confessions',
    mood: 'bold',
    textAr: 'إحكيلنا عن عادة سرية أو طقس خاص تفعله عندما تكون وحدك في البيت تماماً ولا يعلم عنه أحد.',
  },

  // مغامرات وسفر (tu-travel)
  {
    id: 'tu-trv-05',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن رحلة سفر كادت تفوتك بسبب النوم أو الزحمة ووصلت إلى البوابة في آخر ثانية بأنفاس مقطوعة.',
  },
  {
    id: 'tu-trv-06',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن موقف ضعت فيه تماماً في شوارع مدينة غريبة واكتشفت بسبب ذلك أجمل مكان سياحي بالصدفة.',
  },
  {
    id: 'tu-trv-07',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن أطيب حد غريب قابلته في سفرية وقدم لك مساعدة كريمة دون أن ينتظر منك أي مقابل.',
  },
  {
    id: 'tu-trv-08',
    gameId: 'tell-us',
    deckId: 'tu-travel',
    mood: 'light',
    textAr: 'إحكيلنا عن أطرف سوء تفاهم لغوي حدث معك في بلد أجنبي بسبب عدم فهم الكلمات أو الإشارات.',
  },

  // شغب الطفولة (tu-childhood)
  {
    id: 'tu-chd-05',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن كذبة طفولية بريئة كنت مقتنعاً تماماً بصحتها لسنوات (مثل: لو بلعت بذرة البطيخ ستنبت شجرة في بطنك).',
  },
  {
    id: 'tu-chd-06',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن مقلب نفذته في إخوانك أو أولاد جيرانك في الصغر وظلوا يذكرونك به في كل سهرة.',
  },
  {
    id: 'tu-chd-07',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن لعبة أو هدية تمنيتها وبكيت من أجلها شهوراً حتى اشتراها لك والداك، وإزاي كان شعورك حينها.',
  },
  {
    id: 'tu-chd-08',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'funny',
    textAr: 'إحكيلنا عن مصيبة أحدثتها في أثاث المنزل أو الحائط (مثل الرسم بالألوان) وحاولت إلصاق التهمة بأحد إخوانك.',
  },
  {
    id: 'tu-chd-09',
    gameId: 'tell-us',
    deckId: 'tu-childhood',
    mood: 'light',
    textAr: 'إحكيلنا عن صديق طفولة قديم جمعتكم ذكريات ذهبية في المدرسة أو الحارة وتتمنى لو تلتقي به اليوم.',
  },

  { id: 'tu-e-01', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن موقف عملت فيه ناصح وطلعت في الآخر مبصمجي ولبست في الحيط.' },
  { id: 'tu-e-02', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا أكتر موقف اتحرجت فيه قدام الكراش أو حد كنت معجب بيه زمان.' },
  { id: 'tu-e-03', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول انترفيو شغل تعمله في حياتك وكان إحساسك إيه.' },
  { id: 'tu-e-04', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول مرة تسافر فيها لوحدك أو تبعد عن أهلك فترة طويلة.' },
  { id: 'tu-e-05', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا عن أكتر مقلب عملته في حد من صحابك أو العيلة.' },
  { id: 'tu-e-06', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا ذكرياتك مع امتحانات الثانوية العامة وأغرب حاجة حصلتلك وقتها.' },



  { id: 'tu-n-01', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن مرة لبست فيها طقم فاكره شيك جدا ولما كبرت وشوفت صورك اتصدمت من المنظر.' },
  { id: 'tu-n-02', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول مرة حسيت إنك خذلت حد قريب منك جدا.' },
  { id: 'tu-n-03', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا عن أكلة كنت بتكرهها جدا وإنت صغير ودلوقتي بقيت مدمنها.' },
  { id: 'tu-n-04', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن أغبى سؤال سألته في الفصل أو المدرج وخليت الدفعة كلها تضحك عليك.' },
  { id: 'tu-n-05', gameId: 'tell-us', deckId: 'tu-first-times', mood: 'deep', textAr: 'إحكيلنا عن أول خناقة كبيرة بينك وبين أعز صحابك واتصالحتوا إزاي.' },
  { id: 'tu-n-06', gameId: 'tell-us', deckId: 'tu-memories', mood: 'light', textAr: 'إحكيلنا عن رحلة مدرسية أو جامعية حصلت فيها كارثة منسيتهاش لحد دلوقتي.' },
  { id: 'tu-n-07', gameId: 'tell-us', deckId: 'tu-embarrassing', mood: 'funny', textAr: 'إحكيلنا عن مرة نمت فيها في مكان عام أو مواصلات وحصل معاك موقف محرج.' },

];
