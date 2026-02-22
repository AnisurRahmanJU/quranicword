
let quizQuestions=[];
let quizIndex=0;
let quizScore=0;
let quizTotal=0;

/* =========================
   SEARCH CURRENT WORD
========================= */

function searchWord(){

    const word = document
        .getElementById("arabic-word")
        .innerText
        .trim();

    if(!word) return;

    const url =
        "https://quran.com/bn/search?page=1&query="
        + encodeURIComponent(word);

    window.open(url,"_blank");
}


/* =========================
   START QUIZ MODE
========================= */

function startQuizMode(){

    let count = prompt(
        "কতটি প্রশ্ন খেলবেন? (1-150)", "10"
    );

    if(!count) return;

    count = parseInt(count);

    if(isNaN(count) || count<1) return;

    quizTotal =
        Math.min(count,quranData.length);

    quizQuestions =
        [...quranData]
        .sort(()=>Math.random()-0.5)
        .slice(0,quizTotal);

    quizIndex=0;
    quizScore=0;

    /* HIDE TOP STATS */
    document
        .getElementById("topStats")
        .style.display="none";

    document
        .querySelector(".word-card")
        .style.display="none";

    document
        .querySelector(".ayat-section")
        .style.display="none";

    document
        .querySelector(".progress-box")
        .style.display="none";

    document
        .querySelector(".navigation")
        .style.display="none";

    document
        .getElementById("quizSection")
        .style.display="block";

    renderQuiz();
}


/* =========================
   RENDER QUIZ
========================= */

function renderQuiz(){

    let q =
        quizQuestions[quizIndex];

    let options=[q.trans];

    let others =
        [...quranData]
        .filter(x=>x.trans!==q.trans)
        .sort(()=>Math.random()-0.5);

    for(let i=0;i<3;i++)
        options.push(others[i].trans);

    options.sort(()=>Math.random()-0.5);

    let html = `
        <div class="quiz-container">
            <div class="quiz-question">
                ${q.word}
            </div>

            <div class="quiz-options">
                ${options.map(opt=>
                    `<button onclick="checkAnswer(this,'${opt}','${q.trans}')">
                        ${opt}
                    </button>`
                ).join("")}
            </div>

            <div style="margin-top:15px;text-align:center;font-size:13px;">
                প্রশ্ন ${quizIndex+1}/${quizTotal}
                | স্কোর ${quizScore}
            </div>
        </div>
    `;

    document
        .getElementById("quizSection")
        .innerHTML=html;
}


/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(btn,selected,correct){

    let buttons =
        document.querySelectorAll(
            ".quiz-options button"
        );

    buttons.forEach(b=>{
        b.disabled=true;
        if(b.innerText===correct)
            b.style.background="#2ecc71";
    });

    if(selected!==correct){
        btn.style.background="#e74c3c";
    }else{
        quizScore++;
    }

    setTimeout(()=>{
        quizIndex++;

        if(quizIndex<quizTotal){
            renderQuiz();
        }else{
            showResult();
        }

    },1000);
}


/* =========================
   SHOW RESULT
========================= */

function showResult(){

    document
        .getElementById("quizSection")
        .innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align:center;">
                🎉 কুইজ শেষ
            </h2>

            <p style="text-align:center;">
                আপনার স্কোর:
                ${quizScore}/${quizTotal}
            </p><br><br>

            <center><button
                onclick="location.reload()"
                class="btn-next">
                📖 আবার পড়ুন
            </button></center>
        </div>
    `;
}

// ১৫০টি শব্দের পূর্ণাঙ্গ ডাটাবেস
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
