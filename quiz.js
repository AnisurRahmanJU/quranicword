let quizQuestions=[],quizIndex=0,quizScore=0,quizTotal=0;

function startQuizMode(){
let count=prompt("কতটি প্রশ্ন? (1-150),"10");
if(!count)return;

quizTotal=Math.min(parseInt(count),quranData.length);
quizQuestions=[...quranData].sort(()=>Math.random()-0.5).slice(0,quizTotal);
quizIndex=0;quizScore=0;

document.querySelector(".word-card").style.display="none";
document.querySelector(".ayat-section").style.display="none";
document.querySelector(".progress-box").style.display="none";
document.querySelector(".navigation").style.display="none";

renderQuiz();
}

function renderQuiz(){
let box=document.createElement("div");
box.className="quiz-container";
box.id="quizBox";

let q=quizQuestions[quizIndex];

box.innerHTML=`
<div class="quiz-question">${q.word}</div>
<div class="quiz-options"></div>
<div class="progress-info">প্রশ্ন ${quizIndex+1}/${quizTotal} | স্কোর ${quizScore}</div>
`;

let options=[q.trans];
let others=[...quranData].filter(x=>x.trans!==q.trans).sort(()=>Math.random()-0.5);

for(let i=0;i<3;i++) options.push(others[i].trans);
options.sort(()=>Math.random()-0.5);

let optBox=box.querySelector(".quiz-options");

options.forEach(opt=>{
let btn=document.createElement("button");
btn.innerText=opt;
btn.onclick=()=>checkAnswer(btn,opt,q.trans);
optBox.appendChild(btn);
});

document.querySelector(".content-container").appendChild(box);
}

function checkAnswer(btn,selected,correct){
let buttons=document.querySelectorAll(".quiz-options button");

buttons.forEach(b=>{
b.disabled=true;
if(b.innerText===correct) b.classList.add("correct");
});

if(selected!==correct) btn.classList.add("wrong");
else quizScore++;

setTimeout(()=>{
document.getElementById("quizBox").remove();
quizIndex++;
if(quizIndex<quizTotal) renderQuiz();
else showResult();
},1000);
}

function showResult(){
let box=document.createElement("div");
box.className="quiz-container";

box.innerHTML=`
<h2 style="text-align:center;">🎉 কুইজ শেষ</h2>
<p style="text-align:center;">স্কোর: ${quizScore}/${quizTotal}</p>
<button onclick="location.reload()" class="quiz-start-btn">আবার শুরু</button>
`;

document.querySelector(".content-container").appendChild(box);
}
