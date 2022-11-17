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
const buttonSubmit = document.getElementById('submit-btn');


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

const createSection = () => {
  const div = document.getElementsByTagName('div');
  const lestDiv = div.length - 1;
  const section = document.createElement('section');
  section.id = 'info-submit';
  section.className = 'info-submit';
  div[lestDiv].appendChild(section);

  const infoSubmit = document.getElementById('info-submit'); 

  const h1Element = document.createElement('h1');
  h1Element.innerHTML = 'Veja as informações subetidas:';
  infoSubmit.appendChild(h1Element);
  formatName(infoSubmit);
  formatEmail(infoSubmit);
  formatHouse(infoSubmit);
  formatFamily(infoSubmit);
  formatContent(infoSubmit);
  formatRate(infoSubmit);
  formatTextarea(infoSubmit);
};

const formatName = (infoSubmit) => {
  const firstName = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const nameElement = document.createElement('p');
  nameElement.innerHTML = `Nome: ${firstName.value} ${lastName.value}`
  infoSubmit.appendChild(nameElement);
};

const formatEmail = (infoSubmit) => {
  const email = document.getElementById('input-email');
  const emailElement = document.createElement('p');
  emailElement.innerHTML = `Email: ${email.value}`;
  infoSubmit.appendChild(emailElement);
};

const formatHouse = (infoSubmit) => {
  const house = document.getElementById('house');
  for (let index = 0; index < house.length; index += 1) {
    const element = house[index];
    if (element.selected) {
      const houseElement = document.createElement('p');
      houseElement.innerHTML = `Casa: ${element.value}`;
      infoSubmit.appendChild(houseElement);
    } 
  }
};

const formatFamily = (infoSubmit) => {
  const family = document.querySelector('input[name = "family"]:checked');
  const familyElement = document.createElement('p');
  if (family) {
    familyElement.innerHTML = `Família: ${family.value}`;
  } else {
    familyElement.innerHTML = 'Família:';
  }
  infoSubmit.appendChild(familyElement);
};

const formatContent = (infoSubmit) => {
  const content = document.querySelectorAll('input[name = "content"]:checked');
  let contentText = 'Matérias:';
  const contentElement = document.createElement('p');
  for (let index = 0; index < content.length; index++) {
    const element = content[index];
    if (content && index === content.length -1) {
      contentText = `${contentText} ${element.value}.`;
    } else if (content) {
      contentText = `${contentText} ${element.value},`;
    }
  }
  contentElement.innerHTML = contentText;
  infoSubmit.appendChild(contentElement);
};

const formatRate = (infoSubmit) => {
  const rate = document.querySelector('input[name = "rate"]:checked');
  const rateElement = document.createElement('p');
  if (rate) {
    rateElement.innerHTML = `Avaliação: ${rate.value}`;
  } else {
    rateElement.innerHTML = 'Avaliação:';
  }
  infoSubmit.appendChild(rateElement);
};

const formatTextarea = (infoSubmit) => {
  const textarea = document.getElementById('textarea');
  const textareaElement = document.createElement('p');
  textareaElement.innerHTML = `Observações: ${textarea.value}`;
  infoSubmit.appendChild(textareaElement);
};

const renderSubmited = () => {
  buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    createSection();
  });
};

window.onload = () => {
  checkLogin();
  enableButton();
  textareaConter();
  renderSubmited();
};
