export const quests= [
    {
        statement: "Então você sai de casa apenas para se deparar com uma máquina estranha que é capaz de escrever textos que parecem até serem feitos por humanos. O que acha disso?",
        choose:[
            {
                answ: "Isso é assustador!",
                therefore:[
                    "No início, achou preocupante o conceito.",
                    "No início, desaprovou a ideia, considerando-a assustadora."
                ],
                next: 1
            },
            {
                answ: "Eu amo a IA!",
                therefore:[
                    "No início, se apaixonou com o conceito.",
                    "No início, amou a ideia de IAs. Até cosiderou pedi-la em casamento."
                ],
                next: 2
            }
        ]

    },
    {
        statement: "No dia seguinte, sua professora de tecnologia, matéria da qual eu não duvido existir a esse ponto, manda os alunos escreverem um texto sobre IA. O que você faz?",
        choose:[
            {
                answ: "Mando o chatGPT escrever um texto sobre.",
                therefore:[
                    "Tinha medo das IAs e suas habilidades de substituir o trabalho humano, mas a preguiça bateu e decidiu que usar IA numa aula de IA (que provavelmente existe a esse ponto) você teve a chance de usar IA para poder não fazer nada.",
                    "Desaprovava da IA, mas a hipocrisia bateu quando teve a chance de substituir qualquer esforço seu pelo de um robô."
                ],
                next: 3
            },
            {
                answ: "Pesquiso sobre o assunto.",
                therefore:[
                    "Depois, numa aula de IA, você pesquisa sobre as inteligências artificiais como experado.",
                    "Manteve-se fazendo trabalhos sem a ajuda dessas tecnologias."
                ],
                next: 3
            }
        ]

    },
    {
        statement: "Depois de declar seu amor pelas IAs, você percebe que sua professora de tecnologia, uma matéria 100% real, mandou a sala escrever um texto sobre IAs. O que fará?",
        choose:[
            {
                answ: "Farei o trabalho, ué?",
                therefore:[
                    "Quando dado um trabalho, você o fez sózinho, sem o auxílio de IA.",
                    "Enquanto IAs ainda estejam em seu coração, escrever o texto por si própro ainda era uma coisa que você decidiu continuar fazendo."
                ],
                next: 3
            },
            {
                answ: "Eu amo a IA!!!",
                therefore:[
                    "Seu amor pelas novas tecnologias o leva a utilizá-las para a realização do trabalho, sem nenhum esforço sendo posto.",
                    "Sua adoração suprema pela máquina o leva a realizar seus trabalhos utilizando IAs."
                ],
                next: 3
            }
        ]

    },
    {
        statement: "Você ama a IA agora?",
        choose:[
            {
                answ: "Quê?",
                therefore:[
                    "No fim, independente de seu caminho ou sua relação com essas máquinas, elas não acabaram tomando seu coração.",
                    "Finalmente, seu julgamento final sobre as IAs foi realizado, o veredito final sendo: você não ama as IAs."
                ]
            },
            {
                answ: "Eu amo a IA!!!!!!",
                therefore:[
                    "No fim, se apaixonou com o conceito. Ou manteve-se apaixonado. Não importa muito, pois essa pergunta é a última em todos os caminhos.",
                    "No fim, amou a ideia de IAs. Até pediu-a em casamento, criando uma feliz família entre você, a IA, dois filhos e um cachorro."
                ]
            }
        ]

    }
]