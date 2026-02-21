const quranData = [
    {
        word: "اللّٰه",
        pron: "(আল্লাহ্)",
        trans: "আল্লাহ",
        count: "২৫৫০",
        // আয়াতের ভেতর শব্দটি গোল্ডেন করার জন্য স্প্যান ট্যাগ ব্যবহার করা হয়েছে
        ayat_ar: "الْحَمْدُ <span class='hl'>لِلّٰهِ</span> رَبِّ الْعَالَمِينَ",
        ayat_bn: "সমস্ত প্রশংসা <span class='hl'>আল্লাহর</span> জন্য, যিনি সকল সৃষ্টির পালনকর্তা।"
    },
    {
        word: "عَلِيمٌ",
        pron: "(আলীমুন)",
        trans: "সর্বজ্ঞানী",
        count: "১৫৮",
        ayat_ar: "اِنَّ اللّٰهَ بِكُلِّ شَيْءٍ <span class='hl'>عَلِيمٌ</span>",
        ayat_bn: "নিশ্চয়ই আল্লাহ প্রতিটি বিষয়ে <span class='hl'>সর্বজ্ঞানী</span>।"
    },
    {
        word: "رَحِيمٌ",
        pron: "(রাহীমুন)",
        trans: "পরম দয়ালু",
        count: "১১৪",
        ayat_ar: "وَكَانَ اللّٰهُ غَفُورًا <span class='hl'>رَحِيمًا</span>",
        ayat_bn: "আর আল্লাহ ক্ষমাশীল ও <span class='hl'>পরম দয়ালু</span>।"
    }
];

let currentIndex = 0;

function updatePage() {
    const data = quranData[currentIndex];
    
    // এনিমেশনের জন্য কার্ডটি হালকা স্বচ্ছ হবে
    const card = document.querySelector('.word-card');
    card.style.opacity = '0.4';
    
    setTimeout(() => {
        document.getElementById('arabic-word').innerText = data.word;
        document.getElementById('pronunciation').innerText = data.pron;
        document.getElementById('translation').innerText = data.trans;
        document.getElementById('word-count').innerText = data.count;
        
        // innerHTML ব্যবহার করা হয়েছে যাতে গোল্ডেন কালার ট্যাগ কাজ করে
        document.getElementById('ayat-arabic').innerHTML = data.ayat_ar;
        document.getElementById('ayat-meaning').innerHTML = data.ayat_bn;

        const total = quranData.length;
        const progress = ((currentIndex + 1) / total) * 100;
        document.getElementById('progressBar').style.width = progress + "%";
        document.getElementById('progress-text').innerText = `শব্দ ${currentIndex + 1} / ${total}`;
        document.getElementById('percent-text').innerText = `${Math.round(progress)}% সম্পন্ন`;
        
        card.style.opacity = '1';
    }, 250);
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

updatePage();
