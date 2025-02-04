//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = []

function adicionarNome() {
    let nome = document.querySelector('#amigo').value;
    //console.log ('campo digitado: ', nome);
   if (nome == '') {
        alert('Por favor, digite um nome valido.');
    } else {
        listaDeNomes.push(nome)
        //console.log('lista: ', listaDeNomes )
        const lista = document.querySelector('#listaAmigos');
        lista.innerHTML = ''
        for (let i = 0; i < listaDeNomes.length; i++) {
            lista.innerHTML += `<li>${listaDeNomes[i]}</li>`
        }
    }
    document.querySelector('#amigo').value = '';
}



