import '../style/styles.scss'

/* Menu Principal */

let menuItem = document.querySelector('.alunos');

menuItem.addEventListener('click', ()=> {menuItem.classList.toggle("active");});