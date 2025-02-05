//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = []

function adicionarNome() {
    let nome = document.querySelector('#amigo').value;
    //console.log ('campo digitado: ', nome);
   if (nome == '') {
        alert('Por favor, digite um nome valido.');
    } else {
        document.getElementById('resultado').innerHTML = '';
        listaDeNomes.push(nome);
        //console.log('lista: ', listaDeNomes )
        const lista = document.querySelector('#listaAmigos');
        lista.innerHTML = ''
        for (let i = 0; i < listaDeNomes.length; i++) {
            lista.innerHTML += `<li>${listaDeNomes[i]}</li>`;
        }
    }
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    //console.log('o nome foi sorteado');
    if (listaDeNomes.length !== 0) {
        const nome = sortearUmNome();
        const resultado = document.getElementById('resultado');
        resultado.innerHTML += `<li>${nome}</li>`;
        listaDeNomes = []
        document.querySelector('#listaAmigos').innerHTML = '';
    }   
}

function sortearUmNome() {
    return listaDeNomes[Math.floor(Math.random()* listaDeNomes.length)]; 
}

