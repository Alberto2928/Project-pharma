// para que el boton de cambiar de modo dia a modo noche funcione en todas las paginas

const toggleButton = document.getElementById('dark-mode-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});



// Para que el selector funcione en la pagina de tienda
document.addEventListener("DOMContentLoaded", function() {
    
    const cont1Btn = document.getElementById("cont1");
    const cont2Btn = document.getElementById("cont2");
    const cont3Btn = document.getElementById("cont3");

    const item1Divs = document.querySelectorAll(".item1");
    const item2Divs = document.querySelectorAll(".item2");
    const item3Divs = document.querySelectorAll(".item3");

    
    function ocultarDivs() {
        item1Divs.forEach(div => div.style.display = "none");
        item2Divs.forEach(div => div.style.display = "none");
        item3Divs.forEach(div => div.style.display = "none");
    }

    
    cont1Btn.addEventListener("click", function() {
        ocultarDivs();
        item1Divs.forEach(div => div.style.display = "block");
    });

    cont2Btn.addEventListener("click", function() {
        ocultarDivs();
        item2Divs.forEach(div => div.style.display = "block");
    });

    cont3Btn.addEventListener("click", function() {
        ocultarDivs();
        item3Divs.forEach(div => div.style.display = "block");
    });
});


// para limpiar los textbox de la pagina de contacto
 document.getElementById("btnEnviar").addEventListener("click", function() {
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("comentario").value = "";
    });