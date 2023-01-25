const toggleBtn = document.querySelector('.toggle_btn input');
const navUl = document.querySelector('nav ul');

toggleBtn.addEventListener('click',function(){
    navUl.classList.toggle('slide');
});