window.onscroll = makeSticky;

var header = document.getElementById("header");

function makeSticky() {
  if (window.scrollY > 0)
    header.classList.add("sticky");
  else
    header.classList.remove("sticky");
}
