let listaNombres = [];

let listaNumeros = [2, 3, 4, 5];
let listaCualquiera = ["eduar", 2, "marcela", 3];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre == "") {
    alert("No ha agregado un nombre valido");
  } else {    
    listaNombres.push(nombre);
    
    mostrarNombres(listaNombres);

   
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';   
    
    listaNombres.forEach((elemento) => {
      
      const li = document.createElement("li");
      
      li.textContent = elemento;
      
      lista.appendChild(li);
    });
    const inputNombre = document.getElementById("amigo");
    inputNombre.value = '';
  }
}

function mostrarNombres(lista) { 
  console.log(lista);
}


function sortearAmigo(){

    let long = listaNombres.length - 1;
    
    console.log("longitud: " +long);
    const numeroAleatorio = Math.floor(Math.random() * (long - 0 + 1)) + 0;
    console.log(numeroAleatorio);
    console.log(listaNombres[numeroAleatorio]);

    
   
    const resul = document.getElementById("resultado");
    resul.innerHTML = ''; 
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    
    
   const li = document.createElement("li");
    
    li.textContent = "El amigo sorteado es: " + listaNombres[numeroAleatorio] ;
   
    resul.appendChild(li);      
}
