
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// })
let imgBox = document.querySelector("#fixed-image");
let elem = document.querySelectorAll(".elem");
let container = document.querySelector("#elem-container");
elem.forEach((e) => {
  console.log(e);

  e.addEventListener("mouseenter", function () {
    imgBox.innerHTML = "";
    let imgLink = e.getAttribute("data-image");
    console.log(imgLink);
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", imgLink);
    imgBox.appendChild(imgTag);
    console.log(imgBox);

  });
})
console.log(imgBox);

container.addEventListener("mouseenter", function () {
  imgBox.style.display = "flex"

})
container.addEventListener("mouseleave", function () {
  imgBox.style.display = "none";
})

function SwipperAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween:100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
SwipperAnimation();

