import '../style/styles.scss'

/* Main Menu */
const menuAlunos = document.querySelector('.alunos');
const menuTurmas = document.querySelector('.turmas');
const menuPlanos = document.querySelector('.planos');
const menuFinanceiro = document.querySelector('.financeiro');
const menuUsuarios = document.querySelector('.usuarios');

menuAlunos.addEventListener('click', ()=> {
    menuAlunos.classList.toggle("active");
    menuTurmas.classList.remove('active');
    menuPlanos.classList.remove('active');
    menuFinanceiro.classList.remove('active');
    menuUsuarios.classList.remove('active');
});
menuTurmas.addEventListener('click', ()=> {
    menuTurmas.classList.toggle("active");
    menuAlunos.classList.remove('active');
    menuPlanos.classList.remove('active');
    menuFinanceiro.classList.remove('active');
    menuUsuarios.classList.remove('active');
});
menuPlanos.addEventListener('click', ()=> {
    menuPlanos.classList.toggle("active");
    menuAlunos.classList.remove('active');
    menuTurmas.classList.remove('active');
    menuFinanceiro.classList.remove('active');
    menuUsuarios.classList.remove('active');
});
menuFinanceiro.addEventListener('click', ()=> {
    menuFinanceiro.classList.toggle("active");
    menuAlunos.classList.remove('active');
    menuTurmas.classList.remove('active');
    menuPlanos.classList.remove('active');
    menuUsuarios.classList.remove('active');
});
menuUsuarios.addEventListener('click', ()=> {
    menuUsuarios.classList.toggle("active");
    menuAlunos.classList.remove('active');
    menuTurmas.classList.remove('active');
    menuPlanos.classList.remove('active');
    menuFinanceiro.classList.remove('active');
});

/* Alert Itens */
const alertIcon = document.querySelector('.alerts');
const alertList = document.querySelector('.alert-list');

/* Submenu profile */
const btnProfile = document.querySelector('.img-admin');
const submenuProfile = document.querySelector('.submenu-profile');

document.addEventListener('mousedown', (event) => {
    if (alertIcon.contains(event.target)) {
        alertList.style.display = 'block';
        setTimeout(() => {
            alertList.style.opacity = 1;
          }, "200")
    } else {
        alertList.style.opacity = 0;
        setTimeout(() =>{
            alertList.style.display = 'none';
        }, "500")
    }

    if (btnProfile.contains(event.target)) {
        submenuProfile.style.display = 'flex';
        setTimeout(() => {
            submenuProfile.style.opacity = 1;
          }, "200")
    } else {
        submenuProfile.style.opacity = 0;
        setTimeout(() =>{
            submenuProfile.style.display = 'none';
        }, "500")
    }
});

/*Number Animation*/
let number = document.querySelector('.number');
let numberFix = number.getAttribute('data-qtd-number');
let count = setInterval(animaNumber, 30);

function animaNumber(){
    if(number.innerHTML == numberFix){
        clearInterval(count);
    } else{
        let contador = parseInt(number.innerText);
        number.innerHTML = contador + 1;
    }
}

