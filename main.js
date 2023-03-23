// let mainSection = document.querySelector(".main-section");

// //get array for photos
// let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

//get randome num

// for (let i = 1; i < images.length; i++) {
//   mainSection.style.backgroundImage = `'url("${i}.jpg")'`;
//   setInterval(i, 3000);
// }

// setInterval(() => {
//   let randomNumber = Math.floor(Math.random() * images.length);
//   mainSection.style.backgroundImage = "url(" + images[randomNumber] + ")";
// }, 3000);

// // share btn
// function share() {
//   let shareData = {
//     title: document.title,
//     description:
//       "Here you can browse among a wide range of projects and applications on a large scale....Here is a distinguished group of ready-made projects and ready-made codes",
//     url: document.location.href,
//   };
//   if (navigator.canShare(shareData)) {
//     navigator.share(shareData);
//   } else {
//     navigator.clipboard.writeText = document.location.href;
//   }
// }

// up buuton
let span = document.querySelector(".up");
let nav = document.querySelector(".main-nav");
window.onscroll = function () {
  if (this.scrollY >= 300) {
    span.classList.add("show");
    nav.style.backgroundColor = "#000";
    nav.style.borderRadius = "0 0 30px 30px";
  } else {
    span.classList.remove("show");
    nav.style.backgroundColor = "transparent";
    nav.style.borderRadius = "0";
  }
};

function upToup() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
console.log(nav, span);
// know how many visitors in website

const contEl = document.getElementById("count");
upadteVisitors();
function upadteVisitors() {
  fetch("https://api.countapi.xyz/update/ahmed/youtube/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      contEl.innerHTML = res.value;
    });
}
// dark mood
function toggleDarkMode() {
  var style = document.getElementById("style");

  if (style.getAttribute("href") == "light-mood/light.css") {
    style.setAttribute("href", "dark-mood.css");
  } else {
    style.setAttribute("href", "light-mood/light.css");
  }
}
