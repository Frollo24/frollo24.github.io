window.onscroll = makeSticky;

var header = document.getElementById("header");
var offset = header.offsetTop;

function makeSticky() {
  if (window.pageYOffset > offset)
    header.classList.add("sticky");
  else
    header.classList.remove("sticky");
}
