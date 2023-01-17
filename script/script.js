function slider (anything){
    document.querySelector('.one').src = anything;
   };

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.Navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    Navbar.classList.toggle('open');
}