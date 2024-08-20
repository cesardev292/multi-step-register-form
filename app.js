const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const allform = document.querySelector('.step-all');

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const alertaEmail = document.querySelector('.alerta-email');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const topics = [];

// STEP 1
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
document.addEventListener('input', ()=>{
    if (name.value.trim() !== '' && email.value.trim() !== ''){
        btn1.disabled = false;
        alertaEmail.classList.remove('show');

    }else{
        btn1.disabled = true;
        alertaEmail.classList.remove('show');

    }
})

btn1.addEventListener('click', () => {
    if (step1.classList.contains('show')){
        if (isValidEmail(email.value)){
            step1.classList.remove('show');
            step2.classList.add('show');
            alertaEmail.classList.remove('show');

            c1.classList.remove('active');
            c2.classList.add('active');
        }else{
            alertaEmail.classList.add('show');
        }
    }

})

// STEP 2

const seleccionar = document.querySelectorAll('.ul-step-2 a');

seleccionar.forEach((item, index) =>{
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        topics.push(`${item.innerText}`);
        item.classList.add('selected');

        btn2.disabled = false;
    });
});
console.log(topics);

btn2.addEventListener('click', () => {
    if (step2.classList.contains('show')){
        step2.classList.remove('show');
        step3.classList.add('show');
    }

    const nombre = document.querySelector('#nombre');
    const correo = document.querySelector('#correo');
    nombre.textContent = name.value;
    correo.textContent = email.value;

    const lista = document.querySelector('#lista');
    topics.forEach((item) =>{
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
    c2.classList.remove('active');
    c3.classList.add('active');
});

//STEP 3
step3.addEventListener('click', (e)=>{
    allform.submit();
});