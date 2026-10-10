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
    descriptionAr: 'عن اللحظات اللي شعرنا فيها بالتردد أو الاحتياج للدعم.',
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
    textAr: 'إيه هو الحاجة اللي تخشى أن تكتشفه عن نفسك بعد 10 سنوات وتندم على أنك لم تتداركه مبكراً؟',
  },
  {
    id: 'tr-02',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'إيه هو القرار اللي اتخذته وندمت عليه بشدة في وقته، ولكنك اليوم تشكر الظروف أنه حدث لأنه صنع حديتك؟',
  },
  {
    id: 'tr-03',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'إمتى كانت آخر مرة بكيت فيها بصدق وما اللي كسر صمودك في تلك اللحظة بالذات؟',
  },
  {
    id: 'tr-04',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'إيه هو العيب في طبعك اللي تعترف به لنفسك، ولكنك تنكره وتدافع عنه بشراسة إذا واجهك به أحد؟',
  },
  {
    id: 'tr-05',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'هل تشعر أنك تحب نفسك بجد وتعاملها برفق، أم أنك أقسى ناقد لنفسك طوال الوقت؟',
  },

  // --- 2. مرآة العلاقات (tr-relations) ---
  {
    id: 'tr-rel-01',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'إيه هو التصرف اللي إذا صدر من حد تحبه ينهي مكانته في قلبك فوراً دون فرصة ثانية؟',
  },
  {
    id: 'tr-rel-02',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'هل يوجد حد في حياتك تشعر بالغيرة الإيجابية أو المقارنة غير المريحة معه وتتمنى لو تتخلص من ده الشعور؟',
  },
  {
    id: 'tr-rel-03',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'إيه هو الانطباع الأول الخاطئ اللي يأخذه الناس عنك دائماً قبل أن يقتربوا منك ويعرفوك على حقيقتك؟',
  },
  {
    id: 'tr-rel-04',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'من في دي السهرة تشعر أنك ظلمته في حكم أو لم تعطه حقه من التقدير اللي يستحقه؟',
  },

  // --- 3. كلام لم يُقَل (tr-unsaid) ---
  {
    id: 'tr-uns-01',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'لو كان بإمكانك إرسال رسالة لحد رحل عن حياتك (بالموت أو الفراق)، إيه ستقول له في سطرين؟',
  },
  {
    id: 'tr-uns-02',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'إيه هو الحاجة اللي تتمنى لو كان أهلك يفهمونه عنك وعن طريقة تفكيرك دون الحاجة لشرحه وتبريره؟',
  },
  {
    id: 'tr-uns-03',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'إيه هي الكلمة الطيبة اللي تنتظر سماعها من حد محدد في حياتك وتتمنى لو ينطق بها؟',
  },
  {
    id: 'tr-uns-04',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'إيه هو الحلم أو الطموح القديم اللي دفنته في صمت لأن الظروف لم تساعدك وتتمنى لو أعدت المحاولة؟',
  },

  // --- 4. اعترافات شجاعة (tr-vulnerabilities) ---
  {
    id: 'tr-vul-01',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'إمتى كانت آخر مرة تظاهرت فيها بالقوة والمعرفة وأنت في الحقيقة خائف ومرتبك وتتمنى لو ينقذك أحد؟',
  },
  {
    id: 'tr-vul-02',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'إيه هو الخطأ الجسيم اللي ارتكبته وما زلت تشعر بتأنيب الضمير بسببه حتى دي اللحظة؟',
  },
  {
    id: 'tr-vul-03',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'هل سبق أن تخليت عن مبدأ تؤمن به من أجل كسب رضا حد أو تجنب مشكلة؟ وإيه هو الموقف؟',
  },
  {
    id: 'tr-vul-04',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'إيه هي المخاطرة اللي لم تجرؤ على خوضها وتشعر أن حياتك كانت ستتغير كلياً لو تحليت بالشجاعة الكافية وقتها؟',
  },

  // --- 5. عرفان وتقدير (tr-gratitude) ---
  {
    id: 'tr-grt-01',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'وجه نظرك لحد في السهرة واذكر صفة واحدة فيه تتمنى لو تمتلكها وتتعلمها منه.',
  },
  {
    id: 'tr-grt-02',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'إيه هو الموقف الصغير جداً اللي فعله معك حد دون أن ينتبه، لكنه ترك في نفسك أثراً دافئاً لا يزول؟',
  },
  {
    id: 'tr-grt-03',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'لو كان لك أن تهدي باقة ورد لحد واحد في حياتك تقديراً لصبره وتحمله لك في أصعب أوقاتك، لمن ستهديها؟',
  },
  {
    id: 'tr-grt-04',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'إيه هي أعظم نعمة تشعر بالامتنان لها في حياتك اليوم وترى أنها السند الحقيقي لراحة بالك؟',
  },

  // --- إضافات مميزة لدعم المحتوى (تناسب الأعمار 10 - 50 سنة) ---
  // مواجهة الذات (tr-introspective)
  {
    id: 'tr-int-06',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'إيه هي العادة اليومية البسيطة اللي تتمنى التخلص منها لأنها تسرق وقتك وتركيزك دون فائدة؟',
    subtextAr: 'السهر بلا سبب؟ تصفح الهاتف الصامت أول ما تصحو؟ التأجيل المستمر؟',
  },
  {
    id: 'tr-int-07',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'لو عاد بك الزمن 5 سنوات إلى الوراء وقابلت نفسك، إيه هي النصيحة الذهبية الوحيدة اللي ستقولها لها؟',
  },
  {
    id: 'tr-int-08',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'إيه هو الهدف أو الحلم اللي تخليت عنه في مرحلة ما وتشعر اليوم بامتنان شديد لأنك لم تكمله؟',
  },
  {
    id: 'tr-int-09',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'إمتى كانت آخر مرة شعرت فيها بفخر حقيقي بنفسك وبإنجاز حققته حتى وإن لم يصفق لك أحد؟',
  },
  {
    id: 'tr-int-10',
    gameId: 'truth',
    deckId: 'tr-introspective',
    mood: 'deep',
    textAr: 'إيه هو الدرس الأكثر قسوة اللي علمته لك الحياة لكنه جعلك حداً أقوى وأنضج بكثير؟',
  },

  // مرآة العلاقات (tr-relations)
  {
    id: 'tr-rel-05',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'إيه هي الصفة اللي إذا رأيتها في أي حد جديد تجعلك تضع حاجزاً فورياً وتتحفظ في التعامل معه؟',
  },
  {
    id: 'tr-rel-06',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'هل هناك حد كنت مقرباً منه جداً في الماضي وتفرقت سبلكم دون خلاف، وتتمنى لو تطمئن عليه بصدق؟',
  },
  {
    id: 'tr-rel-07',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'ما اللي يجعلك تشعر بالأمان الحقيقي والراحة النفسية الكاملة مع صديقك المقرب؟',
  },
  {
    id: 'tr-rel-08',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'هل تجد صعوبة في قول كلمة "لا" للناس المقربين حتى عندما يكون ذلك على حساب راحتك ووقتك؟',
  },
  {
    id: 'tr-rel-09',
    gameId: 'truth',
    deckId: 'tr-relations',
    mood: 'bold',
    textAr: 'إيه هو الموقف اللي اختبر متانة صداقتك مع حد وأثبت لك أنه يستحق أن يكون رفيق العمر؟',
  },

  // كلام لم يُقَل (tr-unsaid)
  {
    id: 'tr-uns-05',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'إيه هي العبارة أو كلمة التشجيع اللي كنت في أشد الحاجة لسماعها في فترة صعبة ولم يقلها لك أحد؟',
  },
  {
    id: 'tr-uns-06',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'هل هناك اعتذار مدين به لحد ما في حياتك ولم تجد الشجاعة أو الفرصة المناسبة لقوله بعد؟',
  },
  {
    id: 'tr-uns-07',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'حاجة يساء فهمه غالباً عن حديتك من النظرة الأولى وتتمنى لو يعرف الناس حقيقته عنك؟',
    subtextAr: 'يعتقدون أنك مغرور؟ بارد؟ سريع الغضب؟ وأنت في الحقيقة خجول أو مرهف المشاعر؟',
  },
  {
    id: 'tr-uns-08',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'إيه هو الحاجة اللي يسعدك جداً في تصرفات المحيطين بك ولكنك تخجل من طلبه صراحة؟',
  },
  {
    id: 'tr-uns-09',
    gameId: 'truth',
    deckId: 'tr-unsaid',
    mood: 'deep',
    textAr: 'لو كان بإمكانك إرسال رسالة مجهولة لحد ساعدك في بداياتك دون أن يعرف قيمته، إيه ستكتب له؟',
  },

  // اعترافات شجاعة (tr-vulnerabilities)
  {
    id: 'tr-vul-05',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'إيه هو الخوف الطفولي أو الحاجة غير المنطقي اللي ما زلت تشعر بالرهبة منه حتى اليوم؟',
    subtextAr: 'الظلام الدامس؟ الحشرات؟ الحديث أمام حشد كبير؟ أو أصوات معينة؟',
  },
  {
    id: 'tr-vul-06',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'هل سبق أن شعرت بالغيرة المؤقتة من نجاح حد مقرب منك ثم وبخت نفسك وتمنيت له كل الخير؟',
  },
  {
    id: 'tr-vul-07',
    gameId: 'truth',
    deckId: 'tr-vulnerabilities',
    mood: 'bold',
    textAr: 'إيه هو الموقف اللي تصرفت فيه بتسرع أو عناد واكتشفت لابجد أن الطرف الآخر كان على حق تماماً؟',
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
    textAr: 'إيه هو الحاجة اللي تتردد في البدء به وتخاف من الفشل فيه رغم أنك تتمنى تحقيقه بشدة؟',
  },

  // عرفان وتقدير (tr-gratitude)
  {
    id: 'tr-grt-05',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'اذكر فضلاً أو معروفاً كبيراً لوالديك أو أحدهما أدركت قيمته الحقيقية بس بعد أن كبرت وخضت تجارب الحياة.',
  },
  {
    id: 'tr-grt-06',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'من هو المعلم أو القدوة اللي غير مسار تفكيرك أو شجع موهبتك في الصغر وما زلت تدعو له بالخير؟',
  },
  {
    id: 'tr-grt-07',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'إيه هو أكثر مكان في العالم تشعر فيه بالسكينة والطمأنينة بمجرد أن تدخله؟',
  },
  {
    id: 'tr-grt-08',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'وجه كلمة تقدير وامتنان للحد الجالس على يمينك، واذكر موقفاً أو تصرفاً يعجبك فيه.',
  },
  {
    id: 'tr-grt-09',
    gameId: 'truth',
    deckId: 'tr-gratitude',
    mood: 'light',
    textAr: 'إيه هو الحاجة الصغير المبهج اللي حدث معك في آخر 48 ساعة ورسم الابتسامة على وجهك؟',
  },

  { id: 'tr-e-01', gameId: 'truth', deckId: 'tr-relationships', mood: 'deep', textAr: 'إيه أكتر سبب تافه خليك تفركش أو تبعد عن حد كنت مرتبط بيه؟' },
  { id: 'tr-e-02', gameId: 'truth', deckId: 'tr-relationships', mood: 'deep', textAr: 'لو الأكس (Ex) بتاعك بعتلك رسالة دلوقتي بيقولك نرجع.. رد فعلك الحقيقي هيكون إيه؟' },
  { id: 'tr-e-03', gameId: 'truth', deckId: 'tr-secrets', mood: 'bold', textAr: 'إيه أكتر حاجة عملتها وندمت عليها ومحدش في أهلك يعرفها لحد دلوقتي؟' },
  { id: 'tr-e-04', gameId: 'truth', deckId: 'tr-secrets', mood: 'bold', textAr: 'لو فتحنا الموبايل بتاعك دلوقتي وبصينا في السيرش هيستوري، إيه أكتر حاجة هتكسفك؟' },
  { id: 'tr-e-05', gameId: 'truth', deckId: 'tr-spicy', mood: 'funny', textAr: 'مين في القعدة دي تحسه دمه تقيل أحيانا بس بتجاملوه؟' },
  { id: 'tr-e-06', gameId: 'truth', deckId: 'tr-spicy', mood: 'funny', textAr: 'إيه أكتر كدبة بتكدبها على الناس ومصدقينها عنك؟' }

];
