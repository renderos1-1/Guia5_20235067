function aviso() {
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion() {
    // Los valores que puede almacenar la variable confirmacion
    // son true o false
    let confirmacion = confirm("¿Desea salir de la Sesión?");
    /* Para mostrar una variable en una cadena podemos
    utilizar las comillas simples inversas ` y luego hacemos el llamado
    de la variable con ${aqui debemos escribir el nombre de la variable}
    */
    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos() {
    let nombre = prompt("¿Cuál es su nombre?");
    // Notese que en campo del promt se mostrará 0 por defecto
    let edad = prompt("¿Cuál es su edad?", 0);
    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo() {
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el párrafo"
    );

    /* Utilizaremos la API DOM para acceder al elemento
    <p id="idParrafo"></p> que hemos creado en nuestro documento HTML*/
    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}