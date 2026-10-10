import { Card, DeckDefinition } from '../../types/game';

export const TRUTH_DECKS: DeckDefinition[] = [
  {
    id: 'tr-introspective',
    nameAr: 'مواجهة الذات',
    descriptionAr: 'أسئلة صادقة عن المخاوف، الأحلام، والدروس الحياتية الكبرى.',
    mood: 'deep',
  },
  {
    id: 'tr-relations',
    nameAr: 'مرآة العلاقات',
    descriptionAr: 'صدق وشفافية في مشاعرك، خطوطك الحمراء، وما تبحث عنه في الناس.',
    mood: 'bold',
  },
  {
    id: 'tr-unsaid',
    nameAr: 'كلام لم يُقَل',
    descriptionAr: 'مشاعر أو مواقف كتمتها طويلاً وحان وقت إفصاحها في بيئة آمنة.',
    mood: 'deep',
  },
  {
    id: 'tr-vulnerabilities',
    nameAr: 'اعترافات شجاعة',
    descriptionAr: 'عن اللحظات التي شعرنا فيها بالتردد أو الاحتياج للدعم.',
    mood: 'bold',
  },
  {
    id: 'tr-gratitude',
    nameAr: 'عرفان وتقدير',
    descriptionAr: 'كلمات امتنان واعتراف بالفضل نادراً ما نقولها في زحمة الأيام.',
    mood: 'light',
  },
];

export const TRUTH_CARDS: Card[] = [
  // --- 1. مواجهة الذات (tr-introspective) ---
  {
    id: 'tr-01',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'ما هو الشيء الذي تخشى أن تكتشفه عن نفسك بعد 10 سنوات وتندم على أنك لم تتداركه مبكراً؟',
  },
  {
    id: 'tr-02',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'ما هو القرار الذي اتخذته وندمت عليه بشدة في وقته، ولكنك اليوم تشكر الظروف أنه حدث لأنه صنع شخصيتك؟',
  },
  {
    id: 'tr-03',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'متى كانت آخر مرة بكيت فيها بصدق وما الذي كسر صمودك في تلك اللحظة بالذات؟',
  },
  {
    id: 'tr-04',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'ما هو العيب في طبعك الذي تعترف به لنفسك، ولكنك تنكره وتدافع عنه بشراسة إذا واجهك به أحد؟',
  },
  {
    id: 'tr-05',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'هل تشعر أنك تحب نفسك حقاً وتعاملها برفق، أم أنك أقسى ناقد لنفسك طوال الوقت؟',
  },

  // --- 2. مرآة العلاقات (tr-relations) ---
  {
    id: 'tr-rel-01',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'ما هو التصرف الذي إذا صدر من شخص تحبه ينهي مكانته في قلبك فوراً دون فرصة ثانية؟',
  },
  {
    id: 'tr-rel-02',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'هل يوجد شخص في حياتك تشعر بالغيرة الإيجابية أو المقارنة غير المريحة معه وتتمنى لو تتخلص من هذا الشعور؟',
  },
  {
    id: 'tr-rel-03',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'ما هو الانطباع الأول الخاطئ الذي يأخذه الناس عنك دائماً قبل أن يقتربوا منك ويعرفوك على حقيقتك؟',
  },
  {
    id: 'tr-rel-04',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'من في هذه السهرة تشعر أنك ظلمته في حكم أو لم تعطه حقه من التقدير الذي يستحقه؟',
  },

  // --- 3. كلام لم يُقَل (tr-unsaid) ---
  {
    id: 'tr-uns-01',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'لو كان بإمكانك إرسال رسالة لشخص رحل عن حياتك (بالموت أو الفراق)، ماذا ستقول له في سطرين؟',
  },
  {
    id: 'tr-uns-02',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'ما هو الشيء الذي تتمنى لو كان أهلك يفهمونه عنك وعن طريقة تفكيرك دون الحاجة لشرحه وتبريره؟',
  },
  {
    id: 'tr-uns-03',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'ما هي الكلمة الطيبة التي تنتظر سماعها من شخص محدد في حياتك وتتمنى لو ينطق بها؟',
  },
  {
    id: 'tr-uns-04',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'ما هو الحلم أو الطموح القديم الذي دفنته في صمت لأن الظروف لم تساعدك وتتمنى لو أعدت المحاولة؟',
  },

  // --- 4. اعترافات شجاعة (tr-vulnerabilities) ---
  {
    id: 'tr-vul-01',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'متى كانت آخر مرة تظاهرت فيها بالقوة والمعرفة وأنت في الحقيقة خائف ومرتبك وتتمنى لو ينقذك أحد؟',
  },
  {
    id: 'tr-vul-02',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'ما هو الخطأ الجسيم الذي ارتكبته وما زلت تشعر بتأنيب الضمير بسببه حتى هذه اللحظة؟',
  },
  {
    id: 'tr-vul-03',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'هل سبق أن تخليت عن مبدأ تؤمن به من أجل كسب رضا شخص أو تجنب مشكلة؟ وما هو الموقف؟',
  },
  {
    id: 'tr-vul-04',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'ما هي المخاطرة التي لم تجرؤ على خوضها وتشعر أن حياتك كانت ستتغير كلياً لو تحليت بالشجاعة الكافية وقتها؟',
  },

  // --- 5. عرفان وتقدير (tr-gratitude) ---
  {
    id: 'tr-grt-01',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'وجه نظرك لشخص في السهرة واذكر صفة واحدة فيه تتمنى لو تمتلكها وتتعلمها منه.',
  },
  {
    id: 'tr-grt-02',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'ما هو الموقف الصغير جداً الذي فعله معك شخص دون أن ينتبه، لكنه ترك في نفسك أثراً دافئاً لا يزول؟',
  },
  {
    id: 'tr-grt-03',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'لو كان لك أن تهدي باقة ورد لشخص واحد في حياتك تقديراً لصبره وتحمله لك في أصعب أوقاتك، لمن ستهديها؟',
  },
  {
    id: 'tr-grt-04',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'ما هي أعظم نعمة تشعر بالامتنان لها في حياتك اليوم وترى أنها السند الحقيقي لراحة بالك؟',
  },

  // --- إضافات مميزة لدعم المحتوى (تناسب الأعمار 10 - 50 سنة) ---
  // مواجهة الذات (tr-introspective)
  {
    id: 'tr-int-06',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'ما هي العادة اليومية البسيطة التي تتمنى التخلص منها لأنها تسرق وقتك وتركيزك دون فائدة؟',
    subtextAr: 'السهر بلا سبب؟ تصفح الهاتف الصامت أول ما تصحو؟ التأجيل المستمر؟',
  },
  {
    id: 'tr-int-07',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'لو عاد بك الزمن 5 سنوات إلى الوراء وقابلت نفسك، ما هي النصيحة الذهبية الوحيدة التي ستقولها لها؟',
  },
  {
    id: 'tr-int-08',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'ما هو الهدف أو الحلم الذي تخليت عنه في مرحلة ما وتشعر اليوم بامتنان شديد لأنك لم تكمله؟',
  },
  {
    id: 'tr-int-09',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'متى كانت آخر مرة شعرت فيها بفخر حقيقي بنفسك وبإنجاز حققته حتى وإن لم يصفق لك أحد؟',
  },
  {
    id: 'tr-int-10',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'ما هو الدرس الأكثر قسوة الذي علمته لك الحياة لكنه جعلك شخصاً أقوى وأنضج بكثير؟',
  },

  // مرآة العلاقات (tr-relations)
  {
    id: 'tr-rel-05',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'ما هي الصفة التي إذا رأيتها في أي شخص جديد تجعلك تضع حاجزاً فورياً وتتحفظ في التعامل معه؟',
  },
  {
    id: 'tr-rel-06',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'هل هناك شخص كنت مقرباً منه جداً في الماضي وتفرقت سبلكم دون خلاف، وتتمنى لو تطمئن عليه بصدق؟',
  },
  {
    id: 'tr-rel-07',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'ما الذي يجعلك تشعر بالأمان الحقيقي والراحة النفسية الكاملة مع صديقك المقرب؟',
  },
  {
    id: 'tr-rel-08',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'هل تجد صعوبة في قول كلمة "لا" للأشخاص المقربين حتى عندما يكون ذلك على حساب راحتك ووقتك؟',
  },
  {
    id: 'tr-rel-09',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'ما هو الموقف الذي اختبر متانة صداقتك مع شخص وأثبت لك أنه يستحق أن يكون رفيق العمر؟',
  },

  // كلام لم يُقَل (tr-unsaid)
  {
    id: 'tr-uns-05',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'ما هي العبارة أو كلمة التشجيع التي كنت في أشد الحاجة لسماعها في فترة صعبة ولم يقلها لك أحد؟',
  },
  {
    id: 'tr-uns-06',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'هل هناك اعتذار مدين به لشخص ما في حياتك ولم تجد الشجاعة أو الفرصة المناسبة لقوله بعد؟',
  },
  {
    id: 'tr-uns-07',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'شيء يساء فهمه غالباً عن شخصيتك من النظرة الأولى وتتمنى لو يعرف الناس حقيقته عنك؟',
    subtextAr: 'يعتقدون أنك مغرور؟ بارد؟ سريع الغضب؟ وأنت في الحقيقة خجول أو مرهف المشاعر؟',
  },
  {
    id: 'tr-uns-08',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'ما هو الشيء الذي يسعدك جداً في تصرفات المحيطين بك ولكنك تخجل من طلبه صراحة؟',
  },
  {
    id: 'tr-uns-09',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'لو كان بإمكانك إرسال رسالة مجهولة لشخص ساعدك في بداياتك دون أن يعرف قيمته، ماذا ستكتب له؟',
  },

  // اعترافات شجاعة (tr-vulnerabilities)
  {
    id: 'tr-vul-05',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'ما هو الخوف الطفولي أو الشيء غير المنطقي الذي ما زلت تشعر بالرهبة منه حتى اليوم؟',
    subtextAr: 'الظلام الدامس؟ الحشرات؟ الحديث أمام حشد كبير؟ أو أصوات معينة؟',
  },
  {
    id: 'tr-vul-06',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'هل سبق أن شعرت بالغيرة المؤقتة من نجاح شخص مقرب منك ثم وبخت نفسك وتمنيت له كل الخير؟',
  },
  {
    id: 'tr-vul-07',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'ما هو الموقف الذي تصرفت فيه بتسرع أو عناد واكتشفت لاحقاً أن الطرف الآخر كان على حق تماماً؟',
  },
  {
    id: 'tr-vul-08',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'هل تجد سهولة في طلب المساعدة عندما تضيق بك الأمور، أم تفضل تحمل المعاناة بمفردك حتى النهاية؟',
  },
  {
    id: 'tr-vul-09',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'ما هو الشيء الذي تتردد في البدء به وتخاف من الفشل فيه رغم أنك تتمنى تحقيقه بشدة؟',
  },

  // عرفان وتقدير (tr-gratitude)
  {
    id: 'tr-grt-05',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'اذكر فضلاً أو معروفاً كبيراً لوالديك أو أحدهما أدركت قيمته الحقيقية فقط بعد أن كبرت وخضت تجارب الحياة.',
  },
  {
    id: 'tr-grt-06',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'من هو المعلم أو القدوة الذي غير مسار تفكيرك أو شجع موهبتك في الصغر وما زلت تدعو له بالخير؟',
  },
  {
    id: 'tr-grt-07',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'ما هو أكثر مكان في العالم تشعر فيه بالسكينة والطمأنينة بمجرد أن تدخله؟',
  },
  {
    id: 'tr-grt-08',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'وجه كلمة تقدير وامتنان للشخص الجالس على يمينك، واذكر موقفاً أو تصرفاً يعجبك فيه.',
  },
  {
    id: 'tr-grt-09',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'ما هو الشيء الصغير المبهج الذي حدث معك في آخر 48 ساعة ورسم الابتسامة على وجهك؟',
  },
];
