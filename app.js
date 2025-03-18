// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (){
    const nombreAmigo = document.getElementById('amigo').value;
    console.log(amigos);
if (nombreAmigo === '') {
    alert('Por favor, ingrese un nombre valido');
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nombreAmigo)){
    alert('Caracter no valido');
    } else {
    amigos.push(nombreAmigo)
    }
    nuevaCaja();
    listaDeAmigos();
}
function nuevaCaja (){
    document.getElementById('amigo').value = '';
}

function listaDeAmigos (){
    const amigosAgregados = document.getElementById('listaAmigos');
    amigosAgregados.innerHTML = '';

        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement('li'); 
            li.textContent = amigos[i];
            amigosAgregados.appendChild(li);
    }
    return;
}

function sortearAmigo (){
    if (amigos.length === 0){
        alert('No hay amigos para sortear');
     return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];
    
    document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${nombreSorteado}`
    }
