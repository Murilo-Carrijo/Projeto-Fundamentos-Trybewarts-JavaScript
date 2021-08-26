const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonLogin = document.querySelector('#buttonLogin');
const buttonSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
buttonSubmit.disabled = true;

function checkLogin() {
  const emailCorreto = 'tryber@teste.com';
  const senhaCorreta = '123456';
  if (email.value === emailCorreto && password.value === senhaCorreta) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', checkLogin);

agreement.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});

// Pesquisa feita no link abaixo
// https://stackoverflow.com/questions/6358673/javascript-checkbox-onchange
