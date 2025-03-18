// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

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

    if (amigosSorteados.length === amigos.length){
        alert('Todos los amigos han sido sorteados');
        return;
    }

    let nombreSorteado;
        do {     
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            nombreSorteado = amigos[indiceAleatorio];
        } while (amigosSorteados.includes(nombreSorteado));
        amigosSorteados.push(nombreSorteado);
    
    document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${nombreSorteado}`

    }
   
    function reiniciarSorteo() {
        amigos = [];
        amigosSorteados = [];
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('listaAmigos').innerHTML = '';
        alert('El sorteo se ha reiniciado. Puedes iniciar uno nuevo!.');
    }
    
