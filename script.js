let titulo = document.getElementById('titulo');
let texto = document.getElementById('toggleText');

function handleToggleClick(e) {
    e.preventDefault();

    if (titulo.textContent === 'Login') {
        titulo.textContent = 'Criar Conta';
        texto.innerHTML = 'Já tem conta? <a href="#" id="toggleLink">Faça login</a>';
    } else {
        titulo.textContent = 'Login';
        texto.innerHTML = 'Não tem conta? <a href="#" id="toggleLink">Criar conta</a>';
    }

    adicionarEventoToggle(); 
}

function adicionarEventoToggle() {
    let link = document.getElementById('toggleLink');
    link.addEventListener('click', handleToggleClick);
}

adicionarEventoToggle();

let form = document.querySelector('form');

function handleSubmit(e) {
    e.preventDefault();

    let email = document.getElementById('inputEmail').value;

    console.log('E-mail cadastrado:', email);
    alert('Cadastro bem sucedido!');
}

form.addEventListener('submit', handleSubmit);