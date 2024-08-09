const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você encontra uma nova tecnologia de chat que responde a todas as suas perguntas e cria imagens e áudios realistas. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é um pouco assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia chamada Inteligência Artificial, sua professora de tecnologia decidiu fazer uma série de aulas sobre o tema. No final de uma aula, ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. O que você faz?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para ajudar a encontrar informações relevantes e explica de forma clara.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escreve o trabalho com base nas conversas com colegas, pesquisas na internet e seu conhecimento pessoal sobre o tema.",
                afirmacao: "afirmação"
            },
            {
                texto: "Pede ajuda ao professor para entender melhor a IA antes de começar o trabalho.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realiza um debate para entender como foi a pesquisa e escrita. Ela também discute como a IA pode impactar o futuro do trabalho. Como você se posiciona no debate?",
        alternativas: [
            {
                texto: "Acredito que a IA pode abrir novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação",
                descricao: "Você vê a IA como uma ferramenta que pode criar novos empregos e aprimorar as habilidades dos trabalhadores."
            },
            {
                texto: "Estou preocupado com a perda de empregos devido à automação e defendo a necessidade de proteger os trabalhadores.",
                afirmacao: "afirmação",
                descricao: "Você teme que a IA possa causar desemprego e acredita que é importante proteger os trabalhadores contra essas mudanças."
            }
        ]
    },
    {
        enunciado: "No final da discussão sobre IA, você precisa criar uma imagem no computador que represente sua opinião sobre o tema. O que você faz?",
        alternativas: [
            {
                texto: "Crio uma imagem usando um programa de design básico como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Crio uma imagem usando um gerador de imagens baseado em IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na próxima semana. O andamento está atrasado e um membro do grupo usou IA para completar o trabalho. No entanto, o trabalho está idêntico ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Considero aceitável usar o texto gerado pelo chat, pois o prazo é curto e precisamos entregar o trabalho.",
                afirmacao: "afirmação"
            },
            {
                texto: "Reviso o trabalho para garantir que ele tenha contribuições pessoais e garantir originalidade e qualidade.",
                afirmacao: "afirmação"
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();