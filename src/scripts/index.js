const qs = element => document.querySelector(element);

let p = qs('.alert');
let form = qs('.formValidator');

let nome = qs('.name');
let email = qs('.email');
let password = qs('.password');

let button = qs('.button');

// Função para verificar a validade dos campos
function checkFormValidity() {
    let isValid = nome.checkValidity() && email.checkValidity() && password.checkValidity();
    if (isValid) {
        button.classList.remove('disabled');
    } else {
        button.classList.add('disabled');
    }
}

// Adiciona eventos para verificar a validade dos campos
nome.addEventListener('input', checkFormValidity);
email.addEventListener('input', checkFormValidity);
password.addEventListener('input', checkFormValidity);

// Verifica a validade dos campos ao carregar a página
document.addEventListener('DOMContentLoaded', checkFormValidity);

// Impede o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    // Adicione qualquer lógica adicional para o envio aqui
}

form.addEventListener('submit', handleSubmit);
