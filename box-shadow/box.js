let copy = document.getElementById("copy");
function copy2(txt) {
  navigator.clipboard.writeText(txt);
}

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
