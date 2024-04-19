import appear from './appear.js'

window.onload = function() {
  setTimeout(function(){
    appear(document.getElementById("about_me"), 0, 5, 40)
  }, 500);
};
