// ১০০টি শব্দের পূর্ণাঙ্গ ডাটাবেস
const quranData = [
    // Day 1: Demonstrative Pronouns
    { word: "هَذَا", pron: "(হাযা)", trans: "এটা/এই", count: "২২৫", ayat_ar: "<span class='hl'>هَذَا</span> بَيَانٌ لِّلنَّاسِ", ayat_bn: "<span class='hl'>এটা</span> মানুষের জন্য এক স্পষ্ট বর্ণনা।" },
    { word: "هَـذِهِ", pron: "(হাযিহি)", trans: "এটা (স্ত্রীবাচক)", count: "৪২", ayat_ar: "قَالُوا <span class='hl'>هَـذِهِ</span> أَنْعَامٌ", ayat_bn: "তারা বলল, <span class='hl'>এগুলো</span> গবাদি পশু।" },
    { word: "هَـؤُلآءِ", pron: "(হা-উলা-ই)", trans: "এইসকল", count: "৪৬", ayat_ar: "إِنَّ <span class='hl'>هَـؤُلآءِ</span> يُحِبُّونَ الْعَاجِلَةَ", ayat_bn: "নিশ্চয়ই <span class='hl'>এরা</span> ইহকালকে ভালবাসে।" },
    { word: "ذَلِكَ", pron: "(যালিকা)", trans: "তাহা/ঐটি", count: "৪৮১", ayat_ar: "<span class='hl'>ذَلِكَ</span> الْكِتَابُ لاَ رَيْبَ فِيهِ", ayat_bn: "<span class='hl'>ঐ</span> কিতাবে কোন সন্দেহ নেই।" },
    { word: "تِلْكَ", pron: "(তিলকা)", trans: "তাহা/ঐটি (স্ত্রীবাচক)", count: "৪২", ayat_ar: "<span class='hl'>تِلْكَ</span> آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ", ayat_bn: "<span class='hl'>ওগুলো</span> আল্লাহর আয়াত, যা আমি আপনার কাছে পাঠ করি।" },

    // Day 2: Relative Pronouns & Prepositions
    { word: "أُولَئِكَ", pron: "(উলাইকা)", trans: "ওরা/তাহারা", count: "২০৫", ayat_ar: "<span class='hl'>أُولَئِكَ</span> هُمُ الْمُفْلِحُونَ", ayat_bn: "<span class='hl'>তারাই</span> সফলকাম।" },
    { word: "اَلَّذِىْ", pron: "(আল্লাযি)", trans: "যিনি/যে", count: "৩১২", ayat_ar: "<span class='hl'>الَّذِي</span> خَلَقَ الْمَوْتَ وَالْحَيَاةَ", ayat_bn: "<span class='hl'>যিনি</span> সৃষ্টি করেছেন মৃত্যু ও জীবন।" },
    { word: "اَلَّتِي", pron: "(আল্লাতি)", trans: "যিনি (স্ত্রীবাচক)", count: "২০", ayat_ar: "نَارُ اللَّهِ الْمُوقَدَةُ <span class='hl'>الَّتِي</span> تَطَّلِعُ عَلَى الأَفْئِدَةِ", ayat_bn: "আল্লাহর প্রজ্বলিত আগুন, <span class='hl'>যা</span> হৃদয়ে পর্যন্ত পৌঁছাবে।" },
    { word: "اَلَّذِيْنَ", pron: "(আল্লাযিনা)", trans: "যারা", count: "১০৮০", ayat_ar: "وَبَشِّرِ <span class='hl'>الَّذِينَ</span> آمَنُوا", ayat_bn: "এবং <span class='hl'>যারা</span> ঈমান এনেছে তাদের সুসংবাদ দিন।" },
    { word: "تَحْتَ", pron: "(তাহতা)", trans: "নিচে/তলদেশে", count: "৫০", ayat_ar: "جَنَّاتٍ تَجْرِي مِن <span class='hl'>تَحْتِهَا</span> الأَنْهَارُ", ayat_bn: "এমন জান্নাত যার <span class='hl'>তলদেশ দিয়ে</span> ঝরনাধারা প্রবাহিত।" },

    // Day 3: Space & Time Prepositions
    { word: "فَوْقَ", pron: "(ফাওক্বা)", trans: "উপরে", count: "৩৮", ayat_ar: "وَهُوَ الْقَاهِرُ <span class='hl'>فَوْقَ</span> عِبَادِهِ", ayat_bn: "তিনিই তাঁর বান্দাদের <span class='hl'>উপর</span> প্রবল।" },
    { word: "قَبْلَ", pron: "(ক্ববলা)", trans: "আগে/পূর্বে", count: "১২০", ayat_ar: "مِن <span class='hl'>قَبْلِ</span> أَن يَأْتِيَ يَوْمٌ", ayat_bn: "ঐ দিন আসার <span class='hl'>আগে</span>।" },
    { word: "بَعْدَ", pron: "(বা'দা)", trans: "পরে/পরবর্তীতে", count: "১৬৫", ayat_ar: "فَبِأَيِّ حَدِيثٍ <span class='hl'>بَعْدَ</span> اللَّهِ يُؤْمِنُونَ", ayat_bn: "আল্লাহর <span class='hl'>পর</span> তারা আর কোন কথায় বিশ্বাস করবে?" },
    { word: "بَيْنَ", pron: "(বাইনা)", trans: "মধ্যে/মধ্যবর্তী", count: "১৪০", ayat_ar: "يَعْلَمُ مَا <span class='hl'>بَيْنَ</span> أَيْدِيهِمْ", ayat_bn: "তিনি জানেন যা তাদের <span class='hl'>সামনে</span> (মধ্যে) আছে।" },
    { word: "دُونَ", pron: "(দুনা)", trans: "ছাড়া/ব্যতীত", count: "৮৫", ayat_ar: "مِن <span class='hl'>دُونِ</span> اللَّهِ أَوْلِيَاء", ayat_bn: "আল্লাহকে <span class='hl'>ছাড়া</span> অন্যকে অভিভাবক বানিও না।" },

    // Day 4: Directions & Core Words
    { word:"عِنْدَ", pron:"(ইন্দা)", trans:"নিকট/কাছে", count:"১২৫", ayat_ar:"قُلْ كُلٌّ مِّنْ <span class='hl'>عِندِ</span> اللَّهِ", ayat_bn:"বলুন, সবকিছুই আল্লাহর <span class='hl'>নিকট</span> থেকে।" },
    { word: "يَمِيْن", pron: "(ইয়ামিন)", trans: "ডান/সত্য", count: "২০", ayat_ar: "أَصْحَابُ <span class='hl'>الْيَمِينِ</span> مَا أَصْحَابُ الْيَمِينِ", ayat_bn: "যারা <span class='hl'>ডানপার্শ্বস্থ</span>, কত ভাগ্যবান তারা।" },
    { word: "شِمَال", pron: "(শিমাল)", trans: "বাম/বাদিকে", count: "১০", ayat_ar: "عَنِ الْيَمِينِ وَعَنِ <span class='hl'>الشِّمَالِ</span>", ayat_bn: "ডান ও <span class='hl'>বাম</span> দিক থেকে।" },
    { word: "اللَّه", pron: "(আল্লাহ্)", trans: "আল্লাহ", count: "২৫৫০", ayat_ar: "قُلْ هُوَ <span class='hl'>اللَّهُ</span> أَحَدٌ", ayat_bn: "বলুন, তিনিই <span class='hl'>আল্লাহ</span> একক।" },
    { word: "رَب", pron: "(রব)", trans: "প্রতিপালক", count: "৯৭০", ayat_ar: "الْحَمْدُ لِلَّهِ <span class='hl'>رَبِّ</span> الْعَالَمِينَ", ayat_bn: "সকল প্রশংসা আল্লাহর, যিনি বিশ্বজগতের <span class='hl'>পালনকর্তা</span>।" },

    // Day 5: Creation & People
    { word: "أَرْض", pron: "(আরদ্বা)", trans: "পৃথিবী/জমিন", count: "৪৬১", ayat_ar: "فِي السَّمَاوَاتِ وَفِي <span class='hl'>الأَرْضِ</span>", ayat_bn: "আকাশমন্ডলীতে ও <span class='hl'>পৃথিবীতে</span>।" },
    { word: "قَوْم", pron: "(ক্বওম)", trans: "জাতি/সম্প্রদায়", count: "৩৮৩", ayat_ar: "إِنَّ اللَّهَ لاَ يَهْدِي <span class='hl'>الْقَوْمَ</span> الْفَاسِقِينَ", ayat_bn: "নিশ্চয়ই আল্লাহ পাপাচারী <span class='hl'>সম্প্রদায়কে</span> পথ দেখান না।" },
    { word: "آيَة", pron: "(আয়াহ্)", trans: "চিহ্ন/নিদর্শন", count: "৩৮২", ayat_ar: "لَقَدْ كَانَ فِي يُوسُفَ وَإِخْوَتِهِ <span class='hl'>آيَاتٌ</span>", ayat_bn: "ইউসুফ ও তার ভাইদের কাহিনীতে অনেক <span class='hl'>নিদর্শন</span> রয়েছে।" },
    { word: "كُل", pron: "(কুল্লু)", trans: "সব/প্রত্যেক", count: "৩৬০", ayat_ar: "<span class='hl'>كُلُّ</span> نَفْسٍ ذَائِقَةُ الْمَوْتِ", ayat_bn: "<span class='hl'>প্রত্যেক</span> প্রাণীকে মৃত্যুর স্বাদ গ্রহণ করতে হবে।" },
    { word: "رَسُول", pron: "(রসূল)", trans: "বার্তাবাহক/দূত", count: "৩৩২", ayat_ar: "مُّحَمَّدٌ <span class='hl'>رَّسُولُ</span> اللَّهِ", ayat_bn: "মুহাম্মদ আল্লাহর <span class='hl'>রাসূল</span>।" },

    // Day 6: Basic Concepts
    { word: "يَوْم", pron: "(ইয়াওম)", trans: "দিন", count: "৪০৫", ayat_ar: "مَالِكِ <span class='hl'>يَوْمِ</span> الدِّينِ", ayat_bn: "যিনি বিচার <span class='hl'>দিনের</span> মালিক।" },
    { word: "عَذَاب", pron: "('আযাব)", trans: "শাস্তি", count: "৩২২", ayat_ar: "لَهُمْ <span class='hl'>عَذَابٌ</span> أَلِيمٌ", ayat_bn: "তাদের জন্য রয়েছে যন্ত্রণাদায়ক <span class='hl'>শাস্তি</span>।" },
    { word: "سَمَآء", pron: "(সামা')", trans: "আকাশ", count: "৩১০", ayat_ar: "رَفَعَ سَمْكَهَا فَسَوَّاهَا", ayat_bn: "তিনি <span class='hl'>আকাশকে</span> সুউচ্চ করেছেন এবং তাকে সুবিন্যস্ত করেছেন।" },
    { word: "شَىْء", pron: "(শাইই্)", trans: "জিনিস/বস্তু", count: "২৮৩", ayat_ar: "وَاللَّهُ عَلَى كُلِّ <span class='hl'>شَيْءٍ</span> قَدِيرٌ", ayat_bn: "আল্লাহ সর্ব <span class='hl'>বিষয়ে</span> (বস্তুর ওপর) শক্তিমান।" },
    { word: "كِتَاب", pron: "(কিতাব)", trans: "বই/কিতাব", count: "২৬১", ayat_ar: "نَزَّلَ عَلَيْكَ <span class='hl'>الْكِتَابَ</span> بِالْحَقِّ", ayat_bn: "তিনি সত্যসহ আপনার প্রতি <span class='hl'>কিতাব</span> নাজিল করেছেন।" },

    // Day 7: Truth & People
    { word: "حَق", pron: "(হাক্ব)", trans: "সত্য", count: "২৪৭", ayat_ar: "وَقُلْ جَاءَ <span class='hl'>الْحَقُّ</span>", ayat_bn: "আর বলুন, <span class='hl'>সত্য</span> এসেছে।" },
    { word: "نَاس", pron: "(নাস)", trans: "মানুষ/সম্প্রদায়", count: "২৪১", ayat_ar: "قُلْ أَعُوذُ بِرَبِّ <span class='hl'>النَّاسِ</span>", ayat_bn: "বলুন, আমি আশ্রয় চাই <span class='hl'>মানুষের</span> প্রতিপালকের।" },
    { word: "مِن", pron: "(মিন)", trans: "হতে/থেকে", count: "৩২২৩", ayat_ar: "<span class='hl'>مِنَ</span> الْجِنَّةِ وَالنَّاسِ", ayat_bn: "জ্বিন এবং মানুষের <span class='hl'>মধ্য থেকে</span>।" },
    { word: "فِى", pron: "(ফী)", trans: "মধ্যে/ভিতরে", count: "১১৮৫", ayat_ar: "<span class='hl'>فِي</span> قُلُوبِهِم مَّرَضٌ", ayat_bn: "তাদের অন্তরের <span class='hl'>মধ্যে</span> ব্যাধি রয়েছে।" },
    { word: "عَلَى", pron: "('আলা)", trans: "উপরে/সন্নিকটে", count: "১১৮২", ayat_ar: "<span class='hl'>عَلَى</span> صِرَاطٍ مُّسْتَقِيمٍ", ayat_bn: "সরল পথের <span class='hl'>ওপর</span>।" },

    // Day 8: Relations & Prepositions
    { word: "اِلَى", pron: "(ইলা)", trans: "প্রতি/দিকে/কাছে", count: "৬৯৭", ayat_ar: "تُوبُوا <span class='hl'>إِلَى</span> اللَّهِ", ayat_bn: "আল্লাহর <span class='hl'>দিকে</span> ফিরে আসো।" },
    { word: "عَن", pron: "('আন)", trans: "সম্পর্কে/হতে", count: "৪৬৫", ayat_ar: "رَضِيَ اللَّهُ <span class='hl'>عَنْهُمْ</span>", ayat_bn: "আল্লাহ তাদের <span class='hl'>প্রতি</span> (সম্পর্কে) সন্তুষ্ট হয়েছেন।" },
    { word: "حَتَّی", pron: "(হাঁত্তা)", trans: "পর্যন্ত/যতক্ষণ না", count: "১৪২", ayat_ar: "<span class='hl'>حَتَّى</span> زُرْتُمُ الْمَقَابِرَ", ayat_bn: "এমনকি <span class='hl'>যতক্ষণ না</span> তোমরা কবরে পৌঁছাও।" },
    { word: "مَعَ", pron: "(মা'আ)", trans: "সঙ্গে/একত্রে", count: "১৬৩", ayat_ar: "إِنَّ اللَّهَ <span class='hl'>مَعَ</span> الصَّابِرِينَ", ayat_bn: "নিশ্চয়ই আল্লাহ ধৈর্যশীলদের <span class='hl'>সাথেই</span> আছেন।" },
    { word: "بِ", pron: "(বি)", trans: "সাথে/দ্বারা", count: "৪৭৬", ayat_ar: "<span class='hl'>بِ</span>سْمِ اللَّهِ", ayat_bn: "আল্লাহর নামের <span class='hl'>সাথে</span>।" },

    // Day 9: Interrogative & Comparative
    { word: "كَ", pron: "(কা)", trans: "মতো/প্রায়", count: "৩৬৫", ayat_ar: "فَجَعَلَهُمْ <span class='hl'>كَ</span>عَصْفٍ مَّأْكُولٍ", ayat_bn: "অতঃপর তিনি তাদের ভক্ষিত তৃণসদৃশ (<span class='hl'>মতো</span>) করে দিলেন।" },
    { word: "لِ", pron: "(লি)", trans: "জন্য", count: "৫৪৮", ayat_ar: "الْحَمْدُ <span class='hl'>لِ</span>لَّهِ", ayat_bn: "সকল প্রশংসা আল্লাহর <span class='hl'>জন্য</span>।" },
    { word: "مَن", pron: "(মান)", trans: "যে/কে", count: "৮৩১", ayat_ar: "<span class='hl'>مَن</span> ذَا الَّذِي يَشْفَعُ عِندَهُ", ayat_bn: "<span class='hl'>কে</span> সেই ব্যক্তি যে তাঁর অনুমতি ছাড়া সুপারিশ করবে?" },
    { word: "مَا", pron: "(মা)", trans: "কী/যাহা", count: "২১৬০", ayat_ar: "<span class='hl'>مَا</span> عِندَكُمْ يَنفَدُ", ayat_bn: "তোমাদের কাছে <span class='hl'>যা</span> আছে তা ফুরিয়ে যাবে।" },
    { word: "أَيْنَ", pron: "(আইনা)", trans: "কোথায়", count: "৩০", ayat_ar: "<span class='hl'>أَيْنَ</span> مَا كُنتُمْ تَعْبُدُونَ", ayat_bn: "তোমরা যাদের ইবাদত করতে তারা <span class='hl'>কোথায়</span>?" },

    // Day 10: Adverbs & Questioning
    { word: "مَتى", pron: "(মাতা)", trans: "কখন/তখন", count: "১৫", ayat_ar: "<span class='hl'>مَتَى</span> نَصْرُ اللَّهِ", ayat_bn: "আল্লাহর সাহায্য <span class='hl'>কখন</span> আসবে?" },
    { word: "لِمَاذَا", pron: "(লিমা যা)", trans: "কেন/কী জন্য", count: "১০", ayat_ar: "<span class='hl'>لِمَ</span> تَقُولُونَ مَا لا تَفْعَلُونَ", ayat_bn: "তোমরা <span class='hl'>কেন</span> তা বলো যা তোমরা করো না?" },
    { word: "كَيْفَ", pron: "(কাইফা)", trans: "কেমন/কিভাবে", count: "৮৩", ayat_ar: "<span class='hl'>كَيْفَ</span> تَكْفُرُونَ بِاللَّهِ", ayat_bn: "তোমরা <span class='hl'>কিভাবে</span> আল্লাহর সাথে কুফরি করো?" },
    { word: "هَلْ", pron: "(হাল)", trans: "কী/নাকি (Are/Is)", count: "৯৩", ayat_ar: "<span class='hl'>هَلْ</span> أَتَاكَ حَدِيثُ الْغَاشِيَةِ", ayat_bn: "তোমার কাছে <span class='hl'>কি</span> আচ্ছন্নকারীর সংবাদ পৌঁছেছে?" },
    { word: "أَيُّ", pron: "(আইয়্যু)", trans: "কোনটি/যেটি", count: "২৮", ayat_ar: "فَبِأَيِّ آلاءِ رَبِّكُمَا تُكَذِّبَانِ", ayat_bn: "অতএব তোমরা তোমাদের রবের <span class='hl'>কোন</span> নেয়ামতকে অস্বীকার করবে?" },

    // Day 11: Negatives & Quantities
    { word: "كَمْ", pron: "(কামা)", trans: "কত/কতটুকু", count: "২০", ayat_ar: "<span class='hl'>كَم</span> مِّن فِئَةٍ قَلِيلَةٍ", ayat_bn: "<span class='hl'>কত</span> ছোট ছোট দল বড় দলের ওপর বিজয়ী হয়েছে।" },
    { word: "لَا", pron: "(লা)", trans: "না/নেই", count: "১৮১২", ayat_ar: "<span class='hl'>لا</span> إِلَهَ إِلا اللَّه", ayat_bn: "আল্লাহ ছাড়া কোনো মাবুদ <span class='hl'>নেই</span>।" },
    { word: "مَا", pron: "(মা)", trans: "নয় (Negative)", count: "৫০০", ayat_ar: "و<span class='hl'>مَا</span> اللَّهُ بِغَافِلٍ", ayat_bn: "আর আল্লাহ গাফেল <span class='hl'>নন</span>।" },
    { word: "لَمْ", pron: "(লাম)", trans: "না/নয়", count: "৩৬০", ayat_ar: "<span class='hl'>لَمْ</span> يَلِدْ وَ<span class='hl'>لَمْ</span> يُولَدْ", ayat_bn: "তিনি জন্ম দেননি এবং জন্ম নেন<span class='hl'>নি</span>।" },
    { word: "لَنْ", pron: "(লান)", trans: "কখনো না", count: "১০৬", ayat_ar: "<span class='hl'>لَن</span> تَنَالُوا الْبِرَّ", ayat_bn: "তোমরা <span class='hl'>কখনোও</span> পুণ্য লাভ করতে পারবে না।" },

    // Day 12: Emphasis & Belief
    { word: "كَلَّا", pron: "(ক্বাল্লা)", trans: "বস্তুত/মোটেই না", count: "৩৩", ayat_ar: "<span class='hl'>كَلا</span> سَوْفَ تَعْلَمُونَ", ayat_bn: "<span class='hl'>কখনো নয়</span>, শীঘ্রই তোমরা জানতে পারবে।" },
    { word: "لَيْسَ", pron: "(লাইসা)", trans: "নয়/মতো নয়", count: "৮৯", ayat_ar: "<span class='hl'>لَيْسَ</span> كَمِثْلِهِ شَيْءٌ", ayat_bn: "তাঁর <span class='hl'>মতো</span> কিছুই <span class='hl'>নেই</span>।" },
    { word: "بَلَى", pron: "(বালা)", trans: "হ্যাঁ/অবশ্যই", count: "২২", ayat_ar: "<span class='hl'>بَلَى</span> مَنْ أَسْلَمَ وَجْهَهُ لِلَّهِ", ayat_bn: "<span class='hl'>হ্যাঁ (অবশ্যই)</span>, যে আল্লাহর কাছে আত্মসমর্পণ করবে।" },
    { word: "نَعَمْ", pron: "(না'আম)", trans: "হ্যাঁ", count: "৪", ayat_ar: "قَالُوا <span class='hl'>نَعَمْ</span>", ayat_bn: "তারা বলল, <span class='hl'>হ্যাঁ</span>।" },
    { word: "مُؤْمِن", pron: "(মু'মিন)", trans: "বিশ্বাসী", count: "২৩০", ayat_ar: "قَدْ أَفْلَحَ <span class='hl'>الْمُؤْمِنُونَ</span>", ayat_bn: "নিশ্চয়ই <span class='hl'>মুমিনগণ</span> সফলকাম হয়েছে।" },

    // Day 13: Path & Goodness
    { word: "سَبِيل", pron: "(সাবিল)", trans: "পথ/উপায়", count: "১৭৬", ayat_ar: "فِي <span class='hl'>سَبِيلِ</span> اللَّهِ", ayat_bn: "আল্লাহর <span class='hl'>পথে</span>।" },
    { word: "أَمْر", pron: "(আম্র)", trans: "আজ্ঞা/নির্দেশ", count: "১৬৮", ayat_ar: "أَتَى <span class='hl'>أَمْرُ</span> اللَّهِ", ayat_bn: "আল্লাহর <span class='hl'>আদেশ</span> এসে পড়েছে।" },
    { word: "بَعْض", pron: "(বা'দ)", trans: "কিছু/কেহ", count: "১৫৭", ayat_ar: "<span class='hl'>بَعْضُ</span>كُمْ لِبَعْضٍ عَدُوٌّ", ayat_bn: "তোমরা একে <span class='hl'>অপরের</span> (কারো কারো) শত্রু।" },
    { word: "خَيْر", pron: "(খইর)", trans: "উত্তম/শ্রেষ্ঠ", count: "১৮৮", ayat_ar: "اللَّهُ <span class='hl'>خَيْرٌ</span> وَأَبْقَى", ayat_bn: "আল্লাহ <span class='hl'>শ্রেষ্ঠ</span> ও চিরস্থায়ী।" },
    { word: "إِلَٰه", pron: "(ইলাহ)", trans: "উপাস্য", count: "১৪৭", ayat_ar: "لا إِلَهَ <span class='hl'>إِلا</span> هُوَ", ayat_bn: "তিনি ছাড়া আর কোনো <span class='hl'>উপাস্য</span> নেই।" },

    // Day 14: Afterlife & Heart
    { word: "آخِر", pron: "(আখির)", trans: "শেষ", count: "১১০", ayat_ar: "فِي الدُّنْيَا وَال<span class='hl'>آخِرَ</span>ةِ", ayat_bn: "দুনিয়া ও <span class='hl'>আখেরাতে</span> (পরকালে)।" },
    { word: "جَنَّة", pron: "(জান্নাহ)", trans: "বাগান/জান্নাত", count: "১৪৭", ayat_ar: "تِلْكَ الْ<span class='hl'>جَنَّةُ</span> الَّتِي نُورِثُ", ayat_bn: "এই সেই <span class='hl'>জান্নাত</span> যার উত্তরাধিকারী আমি তোমাদের বানাবো।" },
    { word: "نَار", pron: "(নার)", trans: "আগুন", count: "১৪৫", ayat_ar: "فَاتَّقُوا <span class='hl'>النَّارَ</span>", ayat_bn: "অতএব <span class='hl'>আগুন</span> থেকে বেঁচে থাকো।" },
    { word: "غَيْر", pron: "(গইর)", trans: "ব্যতীত/ছাড়া", count: "১৪৫", ayat_ar: "<span class='hl'>غَيْرِ</span> الْمَغْضُوبِ عَلَيْهِمْ", ayat_bn: "তাদের পথ <span class='hl'>ব্যতীত</span> যারা অভিশপ্ত।" },
    { word: "قَلْب", pron: "(ক্বলব)", trans: "অন্তর", count: "১৩২", ayat_ar: "فِي <span class='hl'>قُلُوبِ</span>هِم مَّرَضٌ", ayat_bn: "তাদের <span class='hl'>অন্তরে</span> ব্যাধি রয়েছে।" },

    // Day 15: Servitude & Family
    { word: "عَبْد", pron: "(আব্দ)", trans: "গোলাম/বান্দা", count: "১২৫", ayat_ar: "سُبْحَانَ الَّذِي أَسْرَى بِ<span class='hl'>عَبْدِ</span>هِ", ayat_bn: "পরম পবিত্র তিনি যিনি তাঁর <span class='hl'>বান্দাকে</span> ভ্রমণ করিয়েছিলেন।" },
    { word: "أَهْل", pron: "(আহল)", trans: "পরিবার/পরিজন", count: "১২৭", ayat_ar: "قُوا أَنفُسَكُمْ وَ<span class='hl'>أَهْلِي</span>كُمْ", ayat_bn: "তোমরা নিজেদের এবং তোমাদের <span class='hl'>পরিবারকে</span> রক্ষা করো।" },
    { word: "يَد", pron: "(ইয়াদ)", trans: "হাত", count: "১২০", ayat_ar: "<span class='hl'>يَدُ</span> اللَّهِ فَوْقَ أَيْدِيهِمْ", ayat_bn: "আল্লাহর <span class='hl'>হাত</span> তাদের হাতের ওপরে।" },
    { word: "قَالَ", pron: "(ক্বলা)", trans: "তিনি বললেন", count: "১৬১৮", ayat_ar: "<span class='hl'>قَالَ</span> إِنِّي عَبْدُ اللَّهِ", ayat_bn: "<span class='hl'>তিনি বললেন</span>, নিশ্চয়ই আমি আল্লাহর বান্দা।" },
    { word: "كَانَ", pron: "(কানা)", trans: "তিনি ছিলেন", count: "১৩৫৮", ayat_ar: "وَ<span class='hl'>كَانَ</span> اللَّهُ غَفُورًا", ayat_bn: "আর আল্লাহ ক্ষমাশীল <span class='hl'>ছিলেন</span>।" },

    // Day 16: Past Verbs (Verbal Roots)
    { word: "ءَامَنَ", pron: "(আমানা)", trans: "তিনি বিশ্বাস করলেন", count: "৫৩৭", ayat_ar: "<span class='hl'>آمَنَ</span> الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ", ayat_bn: "রাসূল তাঁর প্রতি যা নাজিল করা হয়েছে তাতে <span class='hl'>ঈমান এনেছেন</span>।" },
    { word: "عَلِمَ", pron: "(আলিমা)", trans: "তিনি জানলেন", count: "৫১৮", ayat_ar: "<span class='hl'>عَلِمَ</span> اللَّهُ أَنَّكُمْ سَتَذْكُرُونَهُنَّ", ayat_bn: "আল্লাহ <span class='hl'>জানতেন</span> যে তোমরা তাদের কথা স্মরণ করবে।" },
    { word: "جَعَلَ", pron: "(জা'আলা)", trans: "তিনি বানালেন", count: "৩৪০", ayat_ar: "وَ<span class='hl'>جَعَلَ</span> فِيهَا رَوَاسِيَ", ayat_bn: "এবং তিনি তাতে (পৃথিবীতে) পর্বত <span class='hl'>স্থাপন করেছেন</span>।" },
    { word: "كَفَرَ", pron: "(কাফার)", trans: "তিনি অস্বীকার করলেন", count: "২৮৯", ayat_ar: "إِنَّ الَّذِينَ <span class='hl'>كَفَرُوا</span>", ayat_bn: "নিশ্চয়ই যারা <span class='hl'>কুফরি করেছে</span> (অস্বীকার করেছে)।" },
    { word: "جَآءَ", pron: "(জাআ)", trans: "তিনি আসলেন", count: "২৭৮", ayat_ar: "إِذَا <span class='hl'>جَاءَ</span> نَصْرُ اللَّهِ", ayat_bn: "যখন আল্লাহর সাহায্য <span class='hl'>আসবে</span>।" },

    // Day 17: Verbs continued
    { word: "عَمِلَ", pron: "(আমিলা)", trans: "তিনি করলেন", count: "২৭৫", ayat_ar: "مَنْ <span class='hl'>عَمِلَ</span> صَالِحًا", ayat_bn: "যে ব্যক্তি সৎকাজ <span class='hl'>করল</span>।" },
    { word: "آتَى", pron: "(আতা)", trans: "তিনি দিলেন", count: "২৭০", ayat_ar: "وَ<span class='hl'>آتَى</span> الزَّكَاةَ", ayat_bn: "এবং সে জাকাত <span class='hl'>দিল</span>।" },
    { word: "رَءَا", pron: "(রআ)", trans: "তিনি দেখলেন", count: "২৭০", ayat_ar: "فَلَمَّا <span class='hl'>رَأَى</span> الْقَمَرَ بَازِغًا", ayat_bn: "অতঃপর তিনি যখন চাঁদকে উদিত হতে <span class='hl'>দেখলেন</span>।" },
    { word: "أَتَى", pron: "(আতা)", trans: "তিনি আসলেন", count: "২৬৫", ayat_ar: "فَ<span class='hl'>أَتَى</span> اللَّهُ بُنْيَانَهُم", ayat_bn: "অতঃপর আল্লাহ তাদের দালানে (আঘাত করে) <span class='hl'>আসলেন</span>।" },
    { word: "شَآءَ", pron: "(শাআ)", trans: "তিনি ইচ্ছা করলেন", count: "২৩৬", ayat_ar: "إِن <span class='hl'>شَاءَ</span> اللَّهُ", ayat_bn: "যদি আল্লাহ <span class='hl'>ইচ্ছা করেন</span>।" },

    // Day 18: Creation & Fear
    { word: "خَلَقَ", pron: "(খলাক্ব)", trans: "তিনি সৃষ্টি করলেন", count: "২৪৮", ayat_ar: "<span class='hl'>خَلَقَ</span> السَّمَاوَاتِ وَالأَرْضَ", ayat_bn: "তিনি আকাশমন্ডলী ও পৃথিবী <span class='hl'>সৃষ্টি করেছেন</span>।" },
    { word: "أَنزَلَ", pron: "(আংযালা)", trans: "তিনি নাজিল করলেন", count: "১৮৯", ayat_ar: "اللَّهُ الَّذِي <span class='hl'>أَنزَلَ</span> الْكِتَابَ", ayat_bn: "আল্লাহ তিনিই যিনি কিতাব <span class='hl'>নাজিল করেছেন</span>।" },
    { word: "كَذَّبَ", pron: "(কাযযাবা)", trans: "তিনি অস্বীকার করলেন", count: "১৭৬", ayat_ar: "بَلِ الَّذِينَ كَفَرُوا <span class='hl'>يُكَذِّبُونَ</span>", ayat_bn: "বরং কাফেররা <span class='hl'>অস্বীকার করছে</span>।" },
    { word: "دَعَا", pron: "(দা'আ)", trans: "তিনি ডাকলেন/প্রার্থনা করলেন", count: "১৯৭", ayat_ar: "<span class='hl'>دَعَا</span> رَبَّهُ", ayat_bn: "তিনি তাঁর প্রতিপালককে <span class='hl'>ডাকলেন</span>।" },
    { word: "اتَّقَى", pron: "(আত্তাক্বা)", trans: "তিনি ভয় করলেন", count: "২৩৮", ayat_ar: "وَمَن <span class='hl'>يَتَّقِ</span> اللَّهَ", ayat_bn: "এবং যে আল্লাহকে <span class='hl'>ভয় করবে</span>।" },

    // Day 19: Pronouns
    { word: "هَدَى", pron: "(হাদা)", trans: "তিনি পথ দেখালেন", count: "১৬৩", ayat_ar: "ذَلِكَ هُدَى اللَّهِ <span class='hl'>يَهْدِي</span> بِهِ", ayat_bn: "এটা আল্লাহর হেদায়াত, এর মাধ্যমে তিনি <span class='hl'>পথ দেখান</span>।" },
    { word: "هُوَ", pron: "(হুয়া)", trans: "তিনি/সে", count: "৪৮১", ayat_ar: "<span class='hl'>هُوَ</span> اللَّهُ الأَحَدُ", ayat_bn: "<span class='hl'>তিনিই</span> আল্লাহ একক।" },
    { word: "هُمَا", pron: "(হুমা)", trans: "তারা উভয়ে", count: "১০", ayat_ar: "إِذْ <span class='hl'>هُمَا</span> فِي الْغَارِ", ayat_bn: "যখন <span class='hl'>তারা উভয়ে</span> গুহার ভেতরে ছিল।" },
    { word: "هُمْ", pron: "(হুম)", trans: "তারা (পুং)", count: "৪৪৪", ayat_ar: "وَ<span class='hl'>هُمْ</span> فِيهَا خَالِدُونَ", ayat_bn: "এবং <span class='hl'>তারা</span> সেখানে চিরকাল থাকবে।" },
    { word: "هِيَ", pron: "(হিয়া)", trans: "তিনি/সে (স্ত্রী)", count: "৬৫", ayat_ar: "<span class='hl'>هِيَ</span> عَصَايَ", ayat_bn: "এটা (<span class='hl'>সেটি</span>) আমার লাঠি।" },

    // Day 20: Personal Pronouns
    { word: "هُنَّ", pron: "(হুন্না)", trans: "তারা (স্ত্রী)", count: "১৫", ayat_ar: "<span class='hl'>هُنَّ</span> أُمُّ الْكِتَابِ", ayat_bn: "<span class='hl'>সেগুলো</span> কিতাবের মূল অংশ।" },
    { word: "أَنْتَ", pron: "(আংতা)", trans: "তুমি (পুং)", count: "৮১", ayat_ar: "سُبْحَانَكَ <span class='hl'>أَنتَ</span> وَلِيُّنَا", ayat_bn: "আপনি পরম পবিত্র, <span class='hl'>আপনিই</span> আমাদের অভিভাবক।" },
    { word: "أَنْتُمَا", pron: "(আংতুমা)", trans: "তোমরা উভয়ে", count: "৫", ayat_ar: "قَالَ <span class='hl'>أَنتُمَا</span> وَمَنِ اتَّبَعَكُمَا الْغَالِبُونَ", ayat_bn: "তিনি বললেন, <span class='hl'>তোমরা উভয়েই</span> বিজয়ী হবে।" },
    { word: "أَنَا", pron: "(আনা)", trans: "আমি", count: "৬৮", ayat_ar: "قَالَ <span class='hl'>أَنَا</span> خَيْرٌ مِّنْهُ", ayat_bn: "সে বলল, <span class='hl'>আমি</span> তার চেয়ে শ্রেষ্ঠ।" },
    { word: "نَحْنُ", pron: "(নাহনু)", trans: "আমরা", count: "৮৬", ayat_ar: "<span class='hl'>نَحْنُ</span> نَرْزُقُكُمْ", ayat_bn: "<span class='hl'>আমরাই</span> তোমাদের রিজিক দান করি।" }
];

let currentIndex = 0;

function updatePage() {
    if (!quranData.length) return;
    const data = quranData[currentIndex];
    const card = document.querySelector('.word-card');
    
    // Smooth transition effect
    card.style.opacity = '0.3';
    card.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        document.getElementById('arabic-word').innerText = data.word;
        document.getElementById('pronunciation').innerText = data.pron;
        document.getElementById('translation').innerText = data.trans;
        document.getElementById('word-count').innerText = data.count;
        document.getElementById('ayat-arabic').innerHTML = data.ayat_ar;
        document.getElementById('ayat-meaning').innerHTML = data.ayat_bn;

        // Progress bar and text
        const total = quranData.length;
        const progress = ((currentIndex + 1) / total) * 100;
        document.getElementById('progressBar').style.width = progress + "%";
        document.getElementById('progress-text').innerText = `শব্দ ${currentIndex + 1} / ${total}`;
        document.getElementById('percent-text').innerText = `${Math.round(progress)}% সম্পন্ন`;
        
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 200);
}

function nextWord() {
    if (currentIndex < quranData.length - 1) {
        currentIndex++;
        updatePage();
    }
}

function prevWord() {
    if (currentIndex > 0) {
        currentIndex--;
        updatePage();
    }
}

// Support for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") nextWord();
    if (e.key === "ArrowLeft") prevWord();
});

// Start the app
updatePage();
