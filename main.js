const boxMain= document.querySelector('.boxmain');
const boxQuest= document.querySelector('.boxquest');
const boxAnsw= document.querySelector('.boxansw');
const boxResul= document.querySelector('.boxresul');
const txtResul= document.querySelector('.txtresul');


const quest= [
    {
        given: "Story story bla bla bla imagine you leave school and FUCKING GOD shows up saying stuff like 'yeah mate ur gonna lose your job in a few years just like those movies from the 90s said'. How do you feel in this situation?",
        choose: [
            {
                txt: "É assustador!",
                afirm: "No inicio, sentiu medo da ideia da inteligencia artificial."
            },
            {
                txt: "Ok 👍!",
                afirm: "No inicio, aceitou abertamente a ideia da inteligencia artificial."
            }
        ]
    },
    {
        given: "You may be asking 'why the fuck is this written in english? why does god speak english?' well be aware that this is irrelevant because your teacher gave you some homework to do regarding AI and stuff, how do you do your work?",
        choose: [
            {
                txt: "Chat GPT será meu amigo nesse trabablho.",
                afirm: "Decidiu utilizar ferramentas como Chat GPT para fazer o trabalho escolar."
            },
            {
                txt: "Eu gosto de confiar na capacidade humana de fazer trabalhos escolares, valeu ✌",
                afirm: "Decidiu utilizar seu conhecimento sobre o topico e a internet para a realizacao do trabalho, evitando inteligentcia artificial."
            }
        ]
    },
    {
        given: "Ok, work done, now the teacher is asking you how you did your work. You're pretty much screwed if you chose the first option back there lol. The people in class then begin talking about how AI will affect the world (as middle schoolers do). What are your opinions on the matter?",
        choose: [
            {
                txt: "Eu acho que a IA tem um potencial incrível de criar novas oportunidades para as pessoas.",
                afirm: "Criou uma visao positiva sobre a inteligencia artificial como uma tecnologia utilizavel para o futuro da humanidade."
            },
            {
                txt: "Não sou muito fã da ideia de perder o meu trabalho.",
                afirm: "Sentiu receio quanto ao futuro do inteligencia artificial, acreditando que iria substitui-lo um dia."
            }
        ]
    },
    {
        given: "Ok, so now the teacher asked you to make an image about your thoughts in AI. I am beggining to feel as if this is the first teacher in all of history to be excited to teach their students how to use AI during the creations of their schoolwork.",
        choose: [
            {
                txt: "Vou usar o paint para desenhar porque eu não sei usar um lápis.",
                afirm: "Decidiu fazer uma imagem para um trabalho escolar evitando IA."
            },
            {
                txt: "imagem IA",
                afirm: "Decidiu fazer uma imagem para um trabalho escolar utilizando IA."
            }
        ]
    },
    {
        given: "Right, so you got a paper for biology class that's due tomorrow and your comrades are fucking useless and didn't do anything the entire goddamn time. One of them decides to write some text using AI. How do you decide to beat his lazy ass?",
        choose: [
            {
                txt: "Eu falo 'Ok 👍!' e ponho o texto no trabablho sem revisão dos conteúdos postos nele.",
                afirm: "Permitiu que a IA fizesse parte do seu trabalho escolar, sem se preucupar com a veracidade dos fatos escritos."
            },
            {
                txt: "Eu ponho um pouquinho de esforço em ao menos uma coisa na minha vida e reviso o texto para ter certeza que não haviam erros.",
                afirm: "Permitiu que a IA fizesse parte do seu trabalho escolar, mas revisou os conteudos escritos por ela."
            }
        ]
    },
]


let now= 0;
let questnow;
let finalResult= "";

function showQuest(){
    if(now>= quest.length){
        showResul();
        return
    }

    questnow= quest[now];
    boxQuest.textContent= questnow.given;
    boxAnsw.textContent= "";
    showAnsw();
}

function showAnsw(){
    for(const option of questnow.choose){
        const buttOption= document.createElement("button");
        buttOption.textContent= option.txt;
        buttOption.addEventListener("click", () => selectAnsw(option));
        boxAnsw.appendChild(buttOption);
    }
}

function selectAnsw(selected){
    const yeps= selected.afirm;
    finalResult+= yeps+" ";
    now++;
    showQuest();
}

function showResul(){
    boxQuest.textContent= "Em 2049...";
    txtResul.textContent= finalResult;
    boxAnsw.textContent= "";
}

showQuest();
