import '../style/styles.scss'

/* Menu Principal */

let menuAlunos = document.querySelector('.alunos');
menuAlunos.addEventListener('click', ()=> {menuAlunos.classList.toggle("active");});

let menuTurmas = document.querySelector('.turmas');
menuTurmas.addEventListener('click', ()=> {menuTurmas.classList.toggle("active");});

let menuPlanos = document.querySelector('.planos');
menuPlanos.addEventListener('click', ()=> {menuPlanos.classList.toggle("active");});

let menuFinanceiro = document.querySelector('.financeiro');
menuFinanceiro.addEventListener('click', ()=> {menuFinanceiro.classList.toggle("active");});

let menuUsuarios = document.querySelector('.usuarios');
menuUsuarios.addEventListener('click', ()=> {menuUsuarios.classList.toggle("active");});