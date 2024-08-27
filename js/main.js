import { randm,name } from "./rand.js";
import { quests } from "./quest.js";

const boxMain= document.querySelector('.boxmain');
const boxQuest= document.querySelector('.boxquest');
const boxAnsw= document.querySelector('.boxansw');
const boxResul= document.querySelector('.boxresul');
const txtResul= document.querySelector('.txtresul');

const restart= document.querySelector('.restart');
const start= document.querySelector('.start');
const mainscreen= document.querySelector('.mainscreen');

let now= 0;
let questnow;
let finalResult= "";


start.addEventListener('click', gameStart);

function gameStart() {
    now= 0;
    finalResult= "";
    mainscreen.style.display= 'none';
    boxQuest.classList.remove("show");
    boxAnsw.classList.remove("show");
    boxResul.classList.remove("show");
    showQuest();
}

function showQuest(){
    if(now>= quests.length){
        showResul();
        return;
    }

    questnow= quests[now];
    boxQuest.textContent= questnow.statement;
    boxAnsw.textContent= "";
    showAnsw();
}

function showAnsw(){
    for(const option of questnow.choose){
        const buttOption= document.createElement("button");
        buttOption.textContent= option.answ;
        buttOption.addEventListener("click", () => selectAnsw(option));
        boxAnsw.appendChild(buttOption);
    }
}
function selectAnsw(selected){
    const yeps= randm(selected.therefore);
    finalResult+= yeps+" ";
    
    if (selected.next !== undefined){
        now= selected.next;
    } else{
        showResul();
        return;
    }

    showQuest();
}

function showResul(){
    boxQuest.textContent= `Em 2049, ${name}`;
    txtResul.textContent= finalResult;
    boxAnsw.textContent= "";
    boxResul.classList.add("show");
    restart.addEventListener("click", gameRe);
}

function gameRe(){
    now= 0;
    finalResult= "";
    boxResul.classList.remove("show");
    showQuest();
}

function changeName(){
    for (const ask of quests){
        ask.statement= ask.statement.replace(/você/g, name);
    }
}

changeName();