function showAlert(){
    alert("¡Hola, este es un alerta desde Java Script!")
}

const form = document.getElementById('myForm')

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if(!validateEmail(email)) {
        alert('Por favor ingrese un correo electronico valido.');
        } else {
        alert('Correo electronico enviado correctamente.');
        }
}
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    })
}

document.querySelector("button.button-menu-toggle")

/*La función addEventListener() se utiliza en JavaScript para agregar 
un evento de clic a un elemento HTML. Con esta función, se puede 
asignar una función o un bloque de código que se ejecutará cuando 
ocurra el evento de clic en un elemento de la barra de navegación*/
.addEventListener("click", function() {
           document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
}
)