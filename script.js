
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
    spaceBetween: 100,
  });
}
SwipperAnimation();

