window.onscroll = function () {
  backToTop();
};

const backtotop = document.getElementById("backtotop");
function backToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
}
