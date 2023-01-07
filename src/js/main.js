import '../style/styles.scss'

/* Main Menu */

const menuAlunos = document.querySelector('.alunos');
menuAlunos.addEventListener('click', ()=> {menuAlunos.classList.toggle("active");});

const menuTurmas = document.querySelector('.turmas');
menuTurmas.addEventListener('click', ()=> {menuTurmas.classList.toggle("active");});

const menuPlanos = document.querySelector('.planos');
menuPlanos.addEventListener('click', ()=> {menuPlanos.classList.toggle("active");});

const menuFinanceiro = document.querySelector('.financeiro');
menuFinanceiro.addEventListener('click', ()=> {menuFinanceiro.classList.toggle("active");});

const menuUsuarios = document.querySelector('.usuarios');
menuUsuarios.addEventListener('click', ()=> {menuUsuarios.classList.toggle("active");});

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