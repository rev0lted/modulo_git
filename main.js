const form = document.getElementById ('form-exercicio');

const campoA = document.getElementById('A');      
const campoB = document.getElementById('B');
form.addEventListener('submit', function (e) {   
    e.preventDefault();

    const campoA = Number(document.querySelector("#A").value);      
    const campoB = Number(document.querySelector("#B").value);

    if (campoA < campoB) {
        const MensagemSucesso = `Parabéns! o número ${B.value}</b> é maior que o número <b> ${A.value}</b>`;
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        document.querySelector('.success-message').style.display = 'block';
        campoA.value= '';
        campoB.value= '';
        

    } 
    else {
        const MensagemErro = `O número ${B.value}</b> não é maior que <b> ${A.value}!</b>`;
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = MensagemErro
        
        document.querySelector('.error-message').style.display = 'block';
    
    }
    
});