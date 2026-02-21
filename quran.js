/* ===============================
   Quran Word Dataset (50 Words)
=================================*/
const quranData = [
{word:"اللّٰه",pron:"(আল্লাহ্)",trans:"আল্লাহ",count:"২৫৫০",ayat_ar:"الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ",ayat_bn:"সমস্ত প্রশংসা আল্লাহর জন্য যিনি সকল সৃষ্টির পালনকর্তা।"},
{word:"رَبّ",pron:"(রব্ব)",trans:"প্রভু",count:"৯৭০",ayat_ar:"قُلْ أَعُوذُ بِرَبِّ النَّاسِ",ayat_bn:"বলুন, আমি আশ্রয় গ্রহণ করছি মানুষের প্রভুর।"},
{word:"مَلِك",pron:"(মালিক)",trans:"মালিক",count:"৪৮",ayat_ar:"مَالِكِ يَوْمِ الدِّينِ",ayat_bn:"তিনি বিচার দিবসের মালিক।"},
{word:"يَوْم",pron:"(ইয়াওম)",trans:"দিন",count:"৩৬৫",ayat_ar:"هَذَا يَوْمُ الْفَصْلِ",ayat_bn:"এটি ফয়সালার দিন।"},
{word:"نُور",pron:"(নূর)",trans:"আলো",count:"৪৯",ayat_ar:"اللّٰهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",ayat_bn:"আল্লাহ আসমানসমূহ ও জমিনের আলো।"},
{word:"كِتَاب",pron:"(কিতাব)",trans:"কিতাব",count:"২৬১",ayat_ar:"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ",ayat_bn:"এটি সেই কিতাব, যাতে কোনো সন্দেহ নেই।"},
{word:"رَسُول",pron:"(রাসূল)",trans:"রাসূল",count:"৩৩১",ayat_ar:"مُّحَمَّدٌ رَسُولُ اللّٰهِ",ayat_bn:"মুহাম্মদ আল্লাহর রাসূল।"},
{word:"صَلَاة",pron:"(সালাত)",trans:"নামাজ",count:"৮৩",ayat_ar:"وَأَقِيمُوا الصَّلَاةَ",ayat_bn:"তোমরা নামাজ প্রতিষ্ঠা কর।"},
{word:"زَكَاة",pron:"(যাকাত)",trans:"যাকাত",count:"৩২",ayat_ar:"وَآتُوا الزَّكَاةَ",ayat_bn:"এবং যাকাত প্রদান কর।"},
{word:"جَنَّة",pron:"(জান্নাত)",trans:"জান্নাত",count:"১৪৭",ayat_ar:"جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",ayat_bn:"এমন জান্নাত, যার নিচে নদী প্রবাহিত।"},
{word:"نَار",pron:"(নার)",trans:"আগুন",count:"১২৬",ayat_ar:"فَاتَّقُوا النَّارَ",ayat_bn:"তোমরা আগুন থেকে বাঁচো।"},
{word:"هُدَى",pron:"(হুদা)",trans:"পথনির্দেশ",count:"৭৯",ayat_ar:"هُدًى لِّلْمُتَّقِينَ",ayat_bn:"এটি মুত্তাকীদের জন্য পথনির্দেশ।"},
{word:"صَبْر",pron:"(সবর)",trans:"ধৈর্য",count:"১০৩",ayat_ar:"إِنَّ اللّٰهَ مَعَ الصَّابِرِينَ",ayat_bn:"নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন।"},
{word:"شُكْر",pron:"(শুকর)",trans:"কৃতজ্ঞতা",count:"৭৫",ayat_ar:"لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",ayat_bn:"তোমরা কৃতজ্ঞতা প্রকাশ করলে আমি তোমাদের বৃদ্ধি করব।"},
{word:"ذِكْر",pron:"(যিকর)",trans:"স্মরণ",count:"২৯২",ayat_ar:"أَلَا بِذِكْرِ اللّٰهِ تَطْمَئِنُّ الْقُلُوبُ",ayat_bn:"নিশ্চয়ই আল্লাহর স্মরণে অন্তর প্রশান্ত হয়।"},
{word:"قَلْب",pron:"(কলব)",trans:"হৃদয়",count:"১৩২",ayat_ar:"خَتَمَ اللّٰهُ عَلَىٰ قُلُوبِهِمْ",ayat_bn:"আল্লাহ তাদের হৃদয় মোহর করে দিয়েছেন।"},
{word:"عَدْل",pron:"(আদল)",trans:"ন্যায়",count:"২৮",ayat_ar:"إِنَّ اللّٰهَ يَأْمُرُ بِالْعَدْلِ",ayat_bn:"নিশ্চয়ই আল্লাহ ন্যায়ের নির্দেশ দেন।"},
{word:"إِيمَان",pron:"(ঈমান)",trans:"বিশ্বাস",count:"৮১১",ayat_ar:"آمَنُوا بِاللّٰهِ وَرَسُولِهِ",ayat_bn:"তারা আল্লাহ ও তাঁর রাসূলের প্রতি বিশ্বাস স্থাপন করেছে।"},
{word:"كَافِر",pron:"(কাফির)",trans:"অবিশ্বাসী",count:"১৫৪",ayat_ar:"إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ",ayat_bn:"অবিশ্বাসীদের জন্য সমান।"},
{word:"مُؤْمِن",pron:"(মুমিন)",trans:"বিশ্বাসী",count:"২৩১",ayat_ar:"قَدْ أَفْلَحَ الْمُؤْمِنُونَ",ayat_bn:"নিশ্চয়ই সফল হয়েছে মুমিনরা।"},
{word:"رَحْمَة",pron:"(রহমত)",trans:"রহমত",count:"১১৪",ayat_ar:"وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",ayat_bn:"আমার রহমত সবকিছুকে পরিবেষ্টন করে।"},
{word:"تَوْبَة",pron:"(তওবা)",trans:"তওবা",count:"৮৭",ayat_ar:"إِنَّ اللّٰهَ يُحِبُّ التَّوَّابِينَ",ayat_bn:"নিশ্চয়ই আল্লাহ তওবার প্রতি অনুগ্রহশীল।"},
{word:"دِين",pron:"(দীন)",trans:"ধর্ম",count:"৯২",ayat_ar:"إِنَّ الدِّينَ عِندَ اللّٰهِ الْإِسْلَامُ",ayat_bn:"নিশ্চয়ই আল্লাহর নিকট একমাত্র ধর্ম ইসলাম।"},
{word:"قُرْآن",pron:"(কুরআন)",trans:"কুরআন",count:"৭০",ayat_ar:"إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا",ayat_bn:"নিশ্চয়ই আমরা এটিকে আরবি কুরআন হিসেবে নাযিল করেছি।"},
{word:"سَمَاء",pron:"(সামা)",trans:"আকাশ",count:"১২০",ayat_ar:"وَالسَّمَاءِ وَمَا بَنَاهَا",ayat_bn:"আকাশের শপথ এবং যিনি তা নির্মাণ করেছেন।"},
{word:"أَرْض",pron:"(আরদ)",trans:"পৃথিবী",count:"৪৬১",ayat_ar:"وَالْأَرْضَ بَعْدَ ذَٰلِكَ دَحَاهَا",ayat_bn:"আর পৃথিবীকে এরপর তিনি বিস্তৃত করেছেন।"},
{word:"مَلَائِكَة",pron:"(মালায়িকা)",trans:"ফেরেশতা",count:"৮৮",ayat_ar:"وَالْمَلَائِكَةُ يُسَبِّحُونَ",ayat_bn:"ফেরেশতারা তাসবিহ পাঠ করে।"},
{word:"شَيْطَان",pron:"(শয়তান)",trans:"শয়তান",count:"৮৮",ayat_ar:"إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ",ayat_bn:"নিশ্চয়ই শয়তান তোমাদের প্রকাশ্য শত্রু।"},
{word:"نَعِيم",pron:"(নাঈম)",trans:"আনন্দ",count:"৩০",ayat_ar:"فِي نَعِيمٍ مُقِيمٍ",ayat_bn:"স্থায়ী আনন্দে।"},
{word:"جِسْم",pron:"(জিস্ম)",trans:"দেহ",count:"২০",ayat_ar:"أَلَا تَرَى أَنَّ اللَّهَ أَنْشَأَكُمْ أَطْوَالًا",ayat_bn:"তুমি কি দেখো না আল্লাহ আপনাদের দেহ তৈরি করেছেন বিভিন্ন আকৃতিতে।"},
{word:"نَفْس",pron:"(নাফস)",trans:"আত্মা",count:"৪৩০",ayat_ar:"وَنَفْسٍ وَمَا سَوَّاهَا",ayat_bn:"আত্মা এবং যিনি তাকে সমান করেছেন।"},
{word:"عِلْم",pron:"(ইল্ম)",trans:"জ্ঞান",count:"৮০",ayat_ar:"وَمَا أُوتِيتُمْ مِنَ الْعِلْمِ إِلَّا قَلِيلاً",ayat_bn:"এবং তোমাদের দেওয়া হয়েছে জ্ঞানের মধ্যে কম।"},
{word:"حَقّ",pron:"(হাক্ক)",trans:"সত্য",count:"২৩১",ayat_ar:"وَقُلْ هَذَا صِرَاطِي مُسْتَقِيمًا",ayat_bn:"এটি আমার সোজা পথ।"},
{word:"حَيَاة",pron:"(হায়াত)",trans:"জীবন",count:"২৫০",ayat_ar:"كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",ayat_bn:"প্রতিটি আত্মা মৃত্যুর স্বাদ পাবে।"},
{word:"دُعَاء",pron:"(দু’আ)",trans:"দোয়া",count:"৬০",ayat_ar:"وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",ayat_bn:"আর তোমার رب বলেন: আমাকে ডাক, আমি তোমাদের পক্ষ গ্রহণ করব।"},
{word:"نِعْمَة",pron:"(নিমা)",trans:"নিय़ামত",count:"২০০",ayat_ar:"وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ",ayat_bn:"এবং যখন তোমাদের رب ঘোষণা করেনঃ যদি তোমরা কৃতজ্ঞ হও, আমি তোমাদের বৃদ্ধি করব।"},
{word:"بِرّ",pron:"(বির্)",trans:"ভালোকাজ",count:"৫০",ayat_ar:"إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ",ayat_bn:"নিশ্চয়ই তোমাদের মধ্যে সর্বাধিক শ্রেষ্ঠ আল্লাহর কাছে তিনি যিনি সবচেয়ে ভয়শীল।"},
// 50 পর্যন্ত শর্ট data
];


/* ===============================
   Variables
=================================*/
let currentIndex = 0;

/* ===============================
   Normalize Arabic (remove harakat)
=================================*/
function normalizeArabic(text) {
    return text.replace(/[\u064B-\u065F\u0670]/g, '');
}

/* ===============================
   Escape regex characters
=================================*/
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ===============================
   Highlight Arabic in Ayat
=================================*/
function highlightArabic(text, word) {
    if (!word) return text;
    const cleanWord = normalizeArabic(word);
    const pattern = "(ال|ب|ل|ك|و|ف)?"+ escapeRegExp(cleanWord);
    const regex = new RegExp(pattern, "g");
    return text.replace(regex, match => `<span class="hl">${match}</span>`);
}

/* ===============================
   Highlight Bangla meaning
=================================*/
function highlightBangla(text, word) {
    if (!word) return text;
    const pattern = escapeRegExp(word) + "[া-ৌ]*";
    const regex = new RegExp(pattern, "gi");
    return text.replace(regex, match => `<span class="hl">${match}</span>`);
}

/* ===============================
   Update UI
=================================*/
function updatePage() {
    const data = quranData[currentIndex];
    const card = document.querySelector('.word-card');
    card.style.opacity = "0.4";

    setTimeout(() => {
        document.getElementById('arabic-word').innerText = data.word;
        document.getElementById('pronunciation').innerText = data.pron;
        document.getElementById('translation').innerText = data.trans;
        document.getElementById('word-count').innerText = data.count;

        document.getElementById('ayat-arabic').innerHTML =
            highlightArabic(data.ayat_ar, data.word);

        document.getElementById('ayat-meaning').innerHTML =
            highlightBangla(data.ayat_bn, data.trans);

        const total = quranData.length;
        const progress = ((currentIndex + 1) / total) * 100;
        document.getElementById('progressBar').style.width = progress + "%";
        document.getElementById('progress-text').innerText = 
            `শব্দ ${currentIndex+1} / ${total}`;
        document.getElementById('percent-text').innerText =
            `${Math.round(progress)}% সম্পন্ন`;

        card.style.opacity = "1";
    }, 250);
}

/* ===============================
   Navigation
=================================*/
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

/* ===============================
   Init
=================================*/
document.addEventListener("DOMContentLoaded", function () {
    updatePage();
});
