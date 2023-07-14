// Telas
const telaInicial = document.getElementById("telaInicial");
const telaJogo = document.getElementById("telaJogo");
const telaResultado = document.getElementById("telaResultado");

// Botões
const botaoInicio = document.getElementById("btIniciar");

// Nome e Pontos do Jogador
const nomeJogador = document.getElementById("nome_jogador");
const pontosJogador = document.getElementById("pontos_jogador");

// Nome e Pontos do Computador
const nomeOponente = document.getElementById("nome_oponente");
const pontosOponente = document.getElementById("pontos_oponente");

// Cartas Oponente
const carta1Op = document.getElementById("carta_op_1");
const carta2Op = document.getElementById("carta_op_2");
const carta3Op = document.getElementById("carta_op_3");
const cartaOponenteJogada = document.getElementById("carta_oponente");

// Minhas Cartas
const minhaCarta1 = document.getElementById("minha_carta_1");
const minhaCarta2 = document.getElementById("minha_carta_2");
const minhaCarta3 = document.getElementById("minha_carta_3");

let ValorpontosJogador = 0;
let ValorpontosOponente = 0;

// Tela Fim de Jogo
const mensagemConclusao = document.getElementById("resultado");
const btVoltar = document.getElementById("btInicio");

// Função para sair da Tela Inicial e Começar a jogar

function iniciar() {
    telaInicial.classList.add("display_none"); //Sai da tela inicial
    telaJogo.classList.remove("display_none"); //Deixa mostrar tela jogo

    //Pegar nome jogador
    /*
    nomeJogador.innerHTML = prompt("Qual seu nome?");
    nomeOponente.innerHTML = "Oponente";
    pontosJogador.innerHTML = pontosInicial;
    pontosOponente.innerHTML = pontosInicial;*/
}

botaoInicio.addEventListener("click", iniciar);



// Função Sair da Tela do Jogo e Ir para a de Resultado

function telaResultadoFinal() {
    telaJogo.classList.add("display_none"); //Sai da tela jogo
    telaResultado.classList.remove("display_none"); //Deixa mostrar tela fim de jogo
}

// Apagar quando começar
nomeJogador.innerHTML = "Lucas";
nomeOponente.innerHTML = "Oponente";
pontosJogador.innerHTML = ValorpontosJogador;
pontosOponente.innerHTML = ValorpontosOponente;
// Até aqui

// Função Vitoria, Derrota e Empate

let rounds = 0;

function vitoriaDerrota(minhaJogada) {
    if((minhaJogada == "Papel" && valorCartaOp == "Pedra") || (minhaJogada == "Tesoura" && valorCartaOp == "Papel") || (minhaJogada == "Pedra" && valorCartaOp == "Tesoura")) {
        console.log("vitoria")
        ValorpontosJogador = ValorpontosJogador + 1;
        pontosJogador.innerHTML = ValorpontosJogador;
        console.log(ValorpontosJogador)
    } else if(minhaJogada == valorCartaOp) {
        console.log("empate")
    } else {
        console.log("derrota")
        ValorpontosOponente = ValorpontosOponente + 1;
        pontosOponente.innerHTML = ValorpontosOponente;
    }

    rounds = rounds + 1;
    resultado();
}

//Função Resultado Jogo
function resultado() {


    if(ValorpontosJogador >= 2) {
        mensagemConclusao.textContent = "Vitória!!!";
        setTimeout(telaResultadoFinal, 2000);
    } else if(ValorpontosOponente >= 2) {
        mensagemConclusao.textContent = "Derrota!!!"
        setTimeout(telaResultadoFinal, 2000);
    } else if(rounds == 3) {
        mensagemConclusao.textContent = "Empate!!!";
        setTimeout(telaResultadoFinal, 2000);
    }
}


// Função jogada Oponente
let sequenciaJogada = []
for(let i = 0; sequenciaJogada.length < 3; i++) {
    const number = Math.floor(Math.random() * 3);
    
    if(!(sequenciaJogada.includes(number))) {
        sequenciaJogada.push(number)
    }
}

let numeroJogada = 0;
let valorCartaOp = "";

function cartaOponente() {
    if(numeroJogada == 0) {
        carta1Op.classList.add("display_none")
    } else if(numeroJogada == 1) {
        carta2Op.classList.add("display_none")
    } else if(numeroJogada == 2) {
        carta3Op.classList.add("display_none")
    }

    cartaOponenteJogada.classList.remove('display_none');

    if(sequenciaJogada[numeroJogada] == 0) {
        cartaOponenteJogada.removeAttribute('src');
        cartaOponenteJogada.setAttribute('src', '../img/Pedra.png');
        valorCartaOp = "Pedra";
    } else if(sequenciaJogada[numeroJogada] == 1) {
        cartaOponenteJogada.removeAttribute('src');
        cartaOponenteJogada.setAttribute('src', '../img/Papel.png');
        valorCartaOp = "Papel";
    } else if(sequenciaJogada[numeroJogada] == 2) {
        cartaOponenteJogada.removeAttribute('src');
        cartaOponenteJogada.setAttribute('src', '../img/Tesoura.png');
        valorCartaOp = "Tesoura"
    }

    numeroJogada = numeroJogada + 1;
}

/* Minhas cartas */
let sequenciaCartas = []
for(let i = 0; sequenciaCartas.length < 3; i++) {
    const number = Math.floor(Math.random() * 3);
    
    if(!(sequenciaCartas.includes(number))) {
        sequenciaCartas.push(number)
    }
}

let valorMinhaCarta = "";
let valorCarta1 = "";
let valorCarta2 = "";
let valorCarta3 = "";

function minhasCartas() {
    if(sequenciaCartas[0] == 0) {
        minhaCarta1.setAttribute('src', 'img/Pedra.png');
        valorCarta1 = "Pedra";
    } else if(sequenciaCartas[0] == 1) {
        minhaCarta1.setAttribute('src', '../img/Papel.png');
        valorCarta1 = "Papel";
    } else if(sequenciaCartas[0] == 2) {
        minhaCarta1.setAttribute('src', '../img/Tesoura.png');
        valorCarta1 = "Tesoura";
    }

    if(sequenciaCartas[1] == 0) {
        minhaCarta2.setAttribute('src', 'img/Pedra.png')
        valorCarta2 = "Pedra";
    } else if(sequenciaCartas[1] == 1) {
        minhaCarta2.setAttribute('src', '../img/Papel.png')
        valorCarta2 = "Papel";
    } else if(sequenciaCartas[1] == 2) {
        minhaCarta2.setAttribute('src', '../img/Tesoura.png')
        valorCarta2 = "Tesoura";
    }

    if(sequenciaCartas[2] == 0) {
        minhaCarta3.setAttribute('src', 'img/Pedra.png')
        valorCarta3 = "Pedra";
    } else if(sequenciaCartas[2] == 1) {
        minhaCarta3.setAttribute('src', '../img/Papel.png')
        valorCarta3 = "Papel";
    } else if(sequenciaCartas[2] == 2) {
        minhaCarta3.setAttribute('src', '../img/Tesoura.png')
        valorCarta3 = "Tesoura";
    }
}

minhasCartas()


/* Função minha jogada */


function mardarCarta1() {
    if(minhaCarta2.classList.contains("position_minhas_cartas")) {
        minhaCarta2.classList.add("display_none");
    }

    if(minhaCarta3.classList.contains("position_minhas_cartas")) {
        minhaCarta3.classList.add("display_none");
    }

    minhaCarta1.classList.add("position_minhas_cartas");
    cartaOponente();
    vitoriaDerrota(valorCarta1)
}

function mardarCarta2() {
    if(minhaCarta1.classList.contains("position_minhas_cartas")) {
        minhaCarta1.classList.add("display_none");
    }

    if(minhaCarta3.classList.contains("position_minhas_cartas")) {
        minhaCarta3.classList.add("display_none");
    }

    minhaCarta2.classList.add("position_minhas_cartas");
    cartaOponente();
    vitoriaDerrota(valorCarta2)
}

function mardarCarta3() {
    if(minhaCarta1.classList.contains("position_minhas_cartas")) {
        minhaCarta1.classList.add("display_none");
    }

    if(minhaCarta2.classList.contains("position_minhas_cartas")) {
        minhaCarta2.classList.add("display_none");
    }

    minhaCarta3.classList.add("position_minhas_cartas");
    cartaOponente();
    vitoriaDerrota(valorCarta3)
}

minhaCarta1.addEventListener("click", mardarCarta1);
minhaCarta2.addEventListener("click", mardarCarta2);
minhaCarta3.addEventListener("click", mardarCarta3);

// Voltar para Primeira Pagina

function recarregarPagina() {
    window.location.reload();
}

btVoltar.addEventListener("click", recarregarPagina);