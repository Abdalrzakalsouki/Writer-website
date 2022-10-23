//Header
let toggleButton = document.getElementsByClassName("navbar-toggler")[0];
toggleButton.addEventListener("click", () => {
  let headerItems = document.getElementsByClassName("header-item");
  for (const item of headerItems) {
    item.classList.add("mobile-hover");
  }
});
//Landing
const imageUrl = [
  "../assets/redInk.png",
  "../assets/english.png",
  "../assets/تصميم جداري للرواية.png",
];
let arrows = document.getElementsByClassName("arrows");
let index = 0;
arrows[0].addEventListener("click", () => {
  let image = document.getElementsByClassName("image")[0];
  let circles = document.getElementsByClassName("circles");
  if (index < imageUrl.length - 1) {
    index++;
    if (index === 1) {
      arrows[0].style.color = "black";
      arrows[1].style.color = "black";
    } else {
      arrows[0].style.color = "white";
      arrows[1].style.color = "white";
    }
    image.src = imageUrl[index];
    circles[index].classList.remove("bi-circle");
    circles[index].classList.add("bi-circle-fill");
  }
});
arrows[1].addEventListener("click", () => {
  let image = document.getElementsByClassName("image")[0];
  let circles = document.getElementsByClassName("circles");
  if (index > 0) {
    circles[index].classList.remove("bi-circle-fill");
    circles[index].classList.add("bi-circle");
    index--;
    if (index === 1) {
      arrows[0].style.color = "black";
      arrows[1].style.color = "black";
    } else {
      arrows[0].style.color = "white";
      arrows[1].style.color = "white";
    }
    image.src = imageUrl[index];
  }
});
//Footer
let toggleButton1 = document.getElementsByClassName("navbar-toggler")[1];
toggleButton1.addEventListener("click", () => {
  let footerUl = document.getElementById("footer-ul");
  footerUl.classList.add("footer-items-sm");
});
