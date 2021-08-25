const email = document.querySelector ("#email");
const password = document.querySelector ("#password");
const buttonSubmit = document.querySelector ("#buttonSubmit")


function checkLogin() {
    const emailCorreto = "tryber@teste.com"
    const senhaCorreta = "123456"
    if (email.value === emailCorreto && password.value === senhaCorreta) {
        alert("Olá, Tryber!");
    } else {
        alert("Email ou senha inválidos.");
    }
}
buttonSubmit.addEventListener("click", checkLogin);

