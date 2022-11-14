// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const buttonLogin = document.querySelector('#buttonLogin');
// const agreement = document.querySelector('#agreement');
// const buttonSubmit = document.querySelector('#submit-btn');
// buttonSubmit.disabled = true;

// function checkLogin() {
//   const emailCorreto = 'tryber@teste.com';
//   const senhaCorreta = '123456';
//   if (email.value === emailCorreto && password.value === senhaCorreta) {
//     alert('Olá, Tryber!');
//   } else {
//     alert('Email ou senha inválidos.');
//   }
// }
// buttonLogin.addEventListener('click', checkLogin);

// agreement.addEventListener('change', (event) => {
//   if (event.currentTarget.checked) {
//     buttonSubmit.disabled = false;
//   } else {
//     buttonSubmit.disabled = true;
//   }
// });

// // Pesquisa feita no link abaixo
// // https://stackoverflow.com/questions/6358673/javascript-checkbox-onchange


const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const buttonLogin = document.querySelector('.header-button');
const agreement = document.getElementById('agreement');

const checkLogin = () => {
  const emailCorreto = 'tryber@teste.com';
    const senhaCorreta = '123456';

  buttonLogin.addEventListener('click', () => {
    console.log(emailCorreto === inputEmail.value && senhaCorreta === inputPassword.value);
    if (inputEmail.value === emailCorreto && inputPassword.value === senhaCorreta) {
      alert('Olá, Tryber!');
      inputEmail.value = '';
      inputPassword.value = '';
    } else {
      alert('Email ou senha inválidos.');
      inputEmail.value = '';
      inputPassword.value = '';
    }
  });
};

const enableButton = () => {
  const buttonSubmit = document.getElementById('submit-btn');

  agreement.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      buttonSubmit.disabled = false;
    } else {
      buttonSubmit.disabled = true;
    }
  });
};

const textareaConter = () => {
  const textarea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  const MAX_CHARACTERS = Number(counter.innerHTML);

  textarea.addEventListener('input', (event) => {
    const characters = event.target.value.length;
    let balance = MAX_CHARACTERS - characters;
    counter.innerHTML = balance;
  });
};

window.onload = () => {
  checkLogin();
  enableButton();
  textareaConter();
};
