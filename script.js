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
console.log(buttonLogin);

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

window.onload = () => {
  checkLogin();
};
