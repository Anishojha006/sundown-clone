
function Page4andOtherAnimation() {
    // const scroll = new LocomotiveScroll({
    // el: document.querySelector('#main'),
    // smooth: true
  })
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
function loaderAnimation() {
  let loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%"
  }, 4000);
}
loaderAnimation();
let options = document.querySelectorAll("#heading h1");
let paragraphs = document.querySelectorAll("#page3-2 #options p");

options.forEach((option) => {
option.addEventListener("click", function () {

    options.forEach((item) => {
      item.classList.add("h1-color");
      item.style.marginLeft = "3vw";
    });

    this.classList.remove("h1-color");
    this.style.marginLeft = "0";

    paragraphs.forEach((p) => {
      p.classList.add("display");
    });

    if (this.id === "one") {
      document
        .querySelector(".design-content")
        .classList.remove("display");
    }

    if (this.id === "two") {
      document
        .querySelector(".project-content")
        .classList.remove("display");
    }

    if (this.id === "three") {
      document
        .querySelector(".execution-content")
        .classList.remove("display");
    }
  });
});