
function Page4andOtherAnimation() {
  //   const scroll = new LocomotiveScroll({
  //   el: document.querySelector('#main'),
  //   smooth: true
  // })
  let imgBox = document.querySelector("#fixed-image");
  let elem = document.querySelectorAll(".elem");
  let container = document.querySelector("#elem-container");
  elem.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      imgBox.innerHTML = "";
      let imgLink = e.getAttribute("data-image");
      let imgTag = document.createElement("img");
      imgTag.setAttribute("src", imgLink);
      imgBox.appendChild(imgTag);

    });
  })

  container.addEventListener("mouseenter", function () {
    imgBox.style.display = "flex"

  })
  container.addEventListener("mouseleave", function () {
    imgBox.style.display = "none";
  })
}
Page4andOtherAnimation();

function SwipperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 60,
  });
}
SwipperAnimation();
function menueAnimation() {
  let fullscr = document.querySelector("#full-scr");
  let menue = document.querySelector("nav h3");
  let navimg = document.querySelector("nav img");
  let hamburger = document.querySelector("nav h3 span");
  let flag = 0;
  menue.addEventListener("click", function () {

    if (flag === 0) {
      fullscr.style.top = "0%";
      navimg.style.opacity = "0";
      flag = 1;
      hamburger.innerHTML = '<i class="ri-close-large-line"></i>';
    }
    else {
      fullscr.style.top = "-100%";
      navimg.style.opacity = "100%";
      flag = 0;
      hamburger.innerHTML = '<i class="ri-menu-line"></i>';
    }
  })
}
menueAnimation();
function loaderAnimation(){
  let loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top="-100%"
}, 4000);
}
loaderAnimation();
let options = document.querySelectorAll("#options #heading h1");
console.log(options);
options.forEach((e)=>{
  e.addEventListener("click",function(){
    if(e.classList.contains("h1-color")){
    e.classList.toggle("h1-color");
   e.style.marginLeft = "0%";
    }
    else{
       e.classList.toggle("h1-color");
   e.style.marginLeft = "3vw";
    }

    
  
  })
})
