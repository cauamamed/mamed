const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de sair do trabalho e encontra um novo sistema de diagnóstico para carros que pode identificar todos os problemas e sugerir reparos. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é um pouco assustador!",
                afirmacao: "Você está preocupado com a possibilidade de que a tecnologia possa substituir o trabalho dos mecânicos."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Você está animado com a ideia de como a tecnologia pode tornar o diagnóstico de problemas mais eficiente."
            }
        ]
    },
    {
        enunciado: "Com a introdução deste novo sistema de diagnóstico, seu chefe decidiu realizar uma série de treinamentos sobre o uso dessa tecnologia. No final de um dos treinamentos, ele pede que você escreva um relatório sobre como o sistema pode ser utilizado na oficina. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza o sistema para gerar informações detalhadas e ajuda a elaborar um relatório claro e técnico.",
                afirmacao: "Você conseguiu usar a tecnologia para produzir um relatório técnico preciso e detalhado."
            },
            {
                texto: "Escreve o relatório com base nas anotações do treinamento, algumas conversas com colegas e conhecimentos pessoais sobre a oficina.",
                afirmacao: "Você prefere usar seus próprios recursos e experiências para criar um relatório mais personalizado."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do relatório, o chefe realiza uma reunião para discutir como o novo sistema impactará o trabalho na oficina. Durante a reunião, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende que o novo sistema pode criar oportunidades para melhorar o trabalho e aumentar a eficiência.",
                afirmacao: "Você vê a tecnologia como uma ferramenta que pode melhorar a eficiência e criar novas oportunidades na oficina."
            },
            {
                texto: "Se preocupa com o impacto da tecnologia no emprego dos mecânicos e defende a importância de manter o emprego humano.",
                afirmacao: "Sua preocupação com o impacto da tecnologia no emprego levou você a sugerir estratégias para equilibrar a automação e a preservação dos empregos."
            }
        ]
    },
    {
        enunciado: "Depois da reunião, você precisa criar uma apresentação que mostre os benefícios do novo sistema de diagnóstico para a equipe. O que você faz?",
        alternativas: [
            {
                texto: "Cria uma apresentação usando um software de design como o PowerPoint.",
                afirmacao: "Você optou por usar ferramentas tradicionais para criar uma apresentação visualmente atraente."
            },
            {
                texto: "Cria uma apresentação usando um gerador de slides baseado em IA.",
                afirmacao: "Você usou a tecnologia para agilizar a criação da apresentação e agora consegue ensinar colegas a fazer o mesmo."
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de revisão de motores com a sua equipe. O projeto está atrasado e um membro da equipe usou IA para gerar partes do relatório. O problema é que o relatório está idêntico ao gerado pela IA. O que você faz?",
        alternativas: [
            {
                texto: "Considera aceitável usar o relatório gerado pela IA, pois o prazo é curto e precisamos entregar o projeto.",
                afirmacao: "Você se acostumou a usar IA para completar tarefas rapidamente, mas está começando a sentir que depende demais da tecnologia."
            },
            {
                texto: "Revisa o relatório para garantir que ele tenha contribuições pessoais e garantir a originalidade e qualidade.",
                afirmacao: "Você percebeu que, embora a IA seja útil, é crucial adicionar suas próprias perspectivas para manter a qualidade e autenticidade do trabalho."
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
    caixaPerguntas.textContent = "No futuro da mecânica automotiva...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
