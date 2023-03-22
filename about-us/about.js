// skills sec
let section = document.querySelector(".team-info");
let spans = document.querySelectorAll(".team-info span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 150) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = "0";
    });
  }
};

// toggil part
let info = document.querySelector(".team-card .team-info");
// console.log(arrow);
// console.log(info);
function show() {
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}
show();

let info2 = document.querySelector(".team-card .team2");
// console.log(arrow);
// console.log(info);
function show2() {
  if (info2.style.display === "none") {
    info2.style.display = "block";
  } else {
    info2.style.display = "none";
  }
}
show2();

let info3 = document.querySelector(".team-card .team3");
// console.log(arrow);
// console.log(info);
function show3() {
  if (info3.style.display === "none") {
    info3.style.display = "block";
  } else {
    info3.style.display = "none";
  }
}
show3();

// api count
const contEl = document.getElementById("count");
upadteVisitors();
function upadteVisitors() {
  fetch("https://api.countapi.xyz/update/ahmed/youtube/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      contEl.innerHTML = res.value;
    });
}
