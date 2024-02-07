
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var divbutton1 = document.getElementById("divbutton1");
var divbutton2 = document.getElementById("divbutton2");
button1.addEventListener('click' , ()=>{
    divbutton1.style.display='block';
    divbutton2.style.display='none';
});
button2.addEventListener('click' , ()=>{
    divbutton1.style.display='none';
    divbutton2.style.display='block';
});