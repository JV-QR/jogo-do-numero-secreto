let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
 let tentativas = 1; //A primeira tentativa já conta.


function exibirTextoNaTela (tag , texto) {   // funcão c/ parâmetro para exibir o texto na tela. 
    let campo = document.querySelector (tag); 
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto'); //chamada da funcão.
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10.');
}

exibirMensagemInicial();

function verificarChute() { // funcão para verificar o chute.
    let chute = document.querySelector('input').value; // Aqui eu seleciono o campo do HTML e escolho o input, porém estou buscando o número escolhido, ou o seu valor, por isso uso o .value.
    if (chute == numeroSecreto) {  // O if compara o valor do chute com o número secreto.
        exibirTextoNaTela('h1', 'Acertou!'); // chama a funcão para exibir o texto;
        let palavraTentativa = chute > 1? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
        limparCampo()
    }
}


function gerarNumeroAleatorio () { // função para gerar o número secreto.
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}    
