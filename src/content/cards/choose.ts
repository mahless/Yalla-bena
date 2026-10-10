import { Card, DeckDefinition } from '../../types/game';

export const CHOOSE_DECKS: DeckDefinition[] = [
  { id: 'ch-career', nameAr: 'فلوس وكارير', descriptionAr: 'مفاضلات بين الشغف والفلوس، والراحة وطموح القمة.', mood: 'deep' },
  { id: 'ch-impossible', nameAr: 'مواقف متتحسدش عليها', descriptionAr: 'خيارات صعبة مفيهاش هروب ولازم تختار.', mood: 'bold' },
  { id: 'ch-lifestyle', nameAr: 'روقان ولا فرهدة', descriptionAr: 'مفاضلات يومية بين السفر والتكنولوجيا والراحة.', mood: 'light' },
  { id: 'ch-relationships', nameAr: 'علاقات وصحاب', descriptionAr: 'مفاضلات بتكشف خطوطك الحمرا مع الناس.', mood: 'bold' },
  { id: 'ch-hilarious', nameAr: 'فصلان وضحك للركب', descriptionAr: 'مفاضلات هبلة تخليك تختار بين الإحراج والأكتر إحراج.', mood: 'funny' },
];

export const CHOOSE_CARDS: Card[] = [
  // --- فلوس وكارير ---
  { id: 'ch-c-01', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تشتغل شغلانة بتقبض منها مبلغ خرافي بس شغال ١٤ ساعة ومضغوط دايما، ولا شغلانة بمرتب يكفيك بالعافية بس شغال ٥ ساعات وعندك وقت لنفسك؟' },
  { id: 'ch-c-02', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تبقى مدير في شركة متوسطة بس كلمتك هي اللي بتمشي، ولا موظف عادي في أكبر شركة في العالم وبتقبض الضعف؟' },
  { id: 'ch-c-03', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تحط كل فلوسك في مشروع أحلامك بنسبة خسارة ٥٠٪، ولا تحط فلوسك في بنك أو حتة أمان بمكسب قليل بس مضمون؟' },
  { id: 'ch-c-04', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تاخد مليون دولار بكرة وتقعد في البيت، ولا تاخد ٥٠ ألف جنيه في الشهر مدى الحياة بس تشتغل شغلانة الحكومة تختارها لك؟' },
  { id: 'ch-c-05', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تشتغل الحاجة اللي بتحبها جدا بس مرتبها ميعيشكش، ولا شغلانة روتينية ومملة موت بس بتخليك تشتري وتصرف براحتك؟' },
  { id: 'ch-c-06', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تبقى انت أشطر واحد في دايرة صغيرة وكلهم بيسألوك، ولا تبقى شخص عادي وسط عمالقة وناس جامدة بتتعلم منهم؟' },
  { id: 'ch-c-07', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تسافر تدرس أو تشتغل برة في مكان أحلامك بس لوحدك ٣ سنين بعيد عن أهلك، ولا تفضل معاهم وفرصتك هنا نص نص؟' },
  { id: 'ch-c-08', gameId: 'choose', deckId: 'ch-career', mood: 'deep', textAr: 'تفتح مشروعك الخاص وتتحمل كل المخاطرة والمجهود لوحدك، ولا تشارك أعز صاحب ليك بالنص في كل حاجة وتخاطر بصداقتكم لو اختلفوا؟' },
  
  // --- مواقف متتحسدش عليها ---
  { id: 'ch-i-01', gameId: 'choose', deckId: 'ch-impossible', mood: 'bold', textAr: 'تعرف تاريخ وفاتك بالدقيقة، ولا تعرف هتموت إزاي (السبب) من غير ما تعرف إمتى؟' },
  { id: 'ch-i-02', gameId: 'choose', deckId: 'ch-impossible', mood: 'bold', textAr: 'تفقد القدرة على الكذب والمجاملة وتبقى صريح بوقاحة طول حياتك، ولا تصدق كل كدبة تتقالك من غير ما تشك؟' },
  { id: 'ch-i-03', gameId: 'choose', deckId: 'ch-impossible', mood: 'bold', textAr: 'تعيش في الماضي مع ذكرياتك الحلوة وأهلك بس من غير أي تكنولوجيا، ولا تعيش في المستقبل المتطور جدا بس متعرفش فيه أي حد؟' },
  { id: 'ch-i-04', gameId: 'choose', deckId: 'ch-impossible', mood: 'bold', textAr: 'تنسى كل الناس اللي عرفتهم قبل ما تتم ٢٠ سنة، ولا تنسى أي حد جديد تقابله بعد ٢٤ ساعة من مقابلته؟' },
  { id: 'ch-i-05', gameId: 'choose', deckId: 'ch-impossible', mood: 'bold', textAr: 'تمسح أسوأ ذكرى أو يوم عدى عليك من ذاكرتك للأبد، ولا تحتفظ بقدرتك إنك تعيش أحلى يوم في حياتك بكل تفاصيله وقت ما تحب؟' },
  { id: 'ch-i-06', gameId: 'choose', deckId: 'ch-impossible', mood: 'bold', textAr: 'تعيش في بلد تلج وبرد طول السنة، ولا تعيش في بلد حر ورطوبة وتلزيق ومفيش شتا أبدا؟' },
  { id: 'ch-i-07', gameId: 'choose', deckId: 'ch-impossible', mood: 'bold', textAr: 'تتكلم وتفهم كل لغات البشر بطلاقة، ولا تفهم لغة الحيوانات وتقدر تتواصل معاهم؟' },
  
  // --- روقان ولا فرهدة ---
  { id: 'ch-l-01', gameId: 'choose', deckId: 'ch-lifestyle', mood: 'light', textAr: 'تسافر سفرية واحدة فخمة جدا في السنة لوحدك وتقعد في أحسن أوتيل، ولا تسافر سفريات كتير اقتصادية طول السنة بس مع صحابك المقربين؟' },
  { id: 'ch-l-02', gameId: 'choose', deckId: 'ch-lifestyle', mood: 'light', textAr: 'تتخلى عن الموبايل وتستخدم تليفون بزراير لمدة سنة، ولا تتخلى عن السكر والبيبسي والحلويات طول حياتك؟' },
  { id: 'ch-l-03', gameId: 'choose', deckId: 'ch-lifestyle', mood: 'light', textAr: 'فيلا معزولة وحواليها طبيعة بس بعيدة عن وسط البلد بساعة ونص، ولا شقة روف في قلب العاصمة والدوشة وتحتك كل الخدمات؟' },
  { id: 'ch-l-04', gameId: 'choose', deckId: 'ch-lifestyle', mood: 'light', textAr: 'كل أكلك يبقى مطبوخ ببلاش من شيف عالمي، ولا تاخد تذاكر طيران ببلاش لأي حتة في العالم مدى الحياة؟' },
  { id: 'ch-l-05', gameId: 'choose', deckId: 'ch-lifestyle', mood: 'light', textAr: 'تقضي الويك إند في شاليه على البحر هدوء ومفيش شبكة موبايل، ولا في مكان زحمة كله مزيكا وأنشطة وناس بتسهر للصبح؟' },
  { id: 'ch-l-06', gameId: 'choose', deckId: 'ch-lifestyle', mood: 'light', textAr: 'تصوم عن السوشيال ميديا شهر، ولا تقعد شهر من غير ما تخرج من البيت أبدا غير للضرورة القصوى؟' },
  
  // --- علاقات وصحاب ---
  { id: 'ch-r-01', gameId: 'choose', deckId: 'ch-relationships', mood: 'bold', textAr: 'صاحب جدع جدا بيقف جنبك في الشدايد بس بيختفي ومبيسألش بالشهور، ولا صاحب معاك كل يوم في الخروجات بس وقت الجد متلاقيهوش؟' },
  { id: 'ch-r-02', gameId: 'choose', deckId: 'ch-relationships', mood: 'bold', textAr: 'تبقى محبوب ومعروف وكل الناس بتشكر فيك بس مفيش ولا صاحب بيفهمك بجد، ولا يبقى عندك صاحب واحد بس توأم روحك بس باقي الناس بتتجاهلك؟' },
  { id: 'ch-r-03', gameId: 'choose', deckId: 'ch-relationships', mood: 'bold', textAr: 'تسامح حد كسر ثقتك وتفضل شاكك فيه من جواك، ولا تقطع علاقتك بيه نهائي وتتوجع من الفراق بس ترتاح من الشك؟' },
  { id: 'ch-r-04', gameId: 'choose', deckId: 'ch-relationships', mood: 'bold', textAr: 'شريك حياة شبهك بالمللي في كل الهوايات والتفكير، ولا شريك عكسك تماما بس بيكمل عيوبك ودايما في ضهرك؟' },
  { id: 'ch-r-05', gameId: 'choose', deckId: 'ch-relationships', mood: 'bold', textAr: 'صاحب صريح بزيادة وبيواجهك بعيوبك لدرجة إنه بيحرجك، ولا صاحب لطيف بزيادة دايما بيطبل لك ومبيقولكش الحقيقة؟' },
  { id: 'ch-r-06', gameId: 'choose', deckId: 'ch-relationships', mood: 'bold', textAr: 'لو زعلت من حد.. تعاتبه في ساعتها حتى لو بصوت عالي وتخلصوا الموضوع، ولا تكبر دماغك وتتجاهل بس تفضل شايل في قلبك شوية؟' },
  
  // --- فصلان وضحك للركب ---
  { id: 'ch-h-01', gameId: 'choose', deckId: 'ch-hilarious', mood: 'funny', textAr: 'كل ما تعجبك فكرة تضحك بصوت بطة عالي ومتعرفش تكتمه، ولا كل ما تتعصب تلاقي نفسك بترقص شرقي لا إراديا؟' },
  { id: 'ch-h-02', gameId: 'choose', deckId: 'ch-hilarious', mood: 'funny', textAr: 'تقرأ آخر ٥ رسايل على الواتس بصوت عالي للناس اللي قاعدة، ولا تدي موبايلك لأي حد فيهم يقلب في الجاليري (الصور) دقيقتين؟' },
  { id: 'ch-h-03', gameId: 'choose', deckId: 'ch-hilarious', mood: 'funny', textAr: 'تروح انترفيو شغل لابس لبس بلياتشو، ولا تروح فرح أعز صحابك لابس بيجامة نوم؟' },
  { id: 'ch-h-04', gameId: 'choose', deckId: 'ch-hilarious', mood: 'funny', textAr: 'تتكلم بكل اللي في دماغك من غير أي فلتر لمدة ٣ أيام، ولا تقعد أسبوع كامل أخرس مبتتكلمش غير بالإشارات؟' },
  { id: 'ch-h-05', gameId: 'choose', deckId: 'ch-hilarious', mood: 'funny', textAr: 'كل ما حد يقول نكتة بايخة تضحك بهيستريا لمدة ٣ دقايق، ولا كل ما تسمع نكتة تموت من الضحك يبقى وشك مقشر ومكشر زي الصنم؟' },
  { id: 'ch-h-06', gameId: 'choose', deckId: 'ch-hilarious', mood: 'funny', textAr: 'تمشي بجزمة بتعمل صوت تزييق عالي ومستفز طول اليوم، ولا تلبس طاقية عليها مروحة بتلف بصوت هليكوبتر فوق دماغك؟' },
  { id: 'ch-h-07', gameId: 'choose', deckId: 'ch-hilarious', mood: 'funny', textAr: 'تبعت ريكورد وإنت بتغني بصوت نشاز لجروب العيلة بالغلط، ولا تبعت إيموجي بوسة وقلب أحمر لمديرك في الشغل؟' },
];
