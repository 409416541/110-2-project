const p = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-nav .main-ul');
 
// console.log('mainMenu', mainMenu);
p.addEventListener('click', function () {
  mainMenu.classList.toggle('show');
  if (mainMenu.classList.contains('show')) {
    p.innerHTML = `<i class="fas fa-times fa-2x"></i>`;
  } 
  else {
    p.innerHTML = `<i class="fas fa-bars fa-2x"></i>`;
  }
});

setInterval (play, 3000);
var index = 0;

function play(){ 
    var imgs = document.getElementById("thumbs").
                        getElementsByTagName("img");
    var bigImg = document.getElementById("big"); 
    imgs[index].classList.remove("selected");
    index++; 

    if(index == imgs.length) index = 0;

    imgs[index].classList.add("selected");
    bigImg.setAttribute("src", imgs[index].getAttribute("src"));
}