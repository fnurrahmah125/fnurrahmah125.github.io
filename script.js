const btnAll = document.querySelector(".btn-all");
const btnFe = document.querySelector(".btn-fe");
const btnPython = document.querySelector(".btn-python");

const frontend = document.querySelectorAll(".frontEnd");
const python = document.querySelectorAll(".python");

btnAll.addEventListener("click", function () {
  btnFe.classList.remove("active");
  btnAll.classList.add("active");
  btnPython.classList.remove("active");

  frontend.forEach(function (el) {
    el.style.display = "block";
  });

  python.forEach(function (el) {
    el.style.display = "block";
  });
});

btnFe.addEventListener("click", function () {
  btnFe.classList.add("active");
  btnAll.classList.remove("active");
  btnPython.classList.remove("active");

  frontend.forEach(function (el) {
    el.style.display = "block";
  });

  python.forEach(function (el) {
    el.style.display = "none";
  });
});

btnPython.addEventListener("click", function () {
  btnFe.classList.remove("active");
  btnAll.classList.remove("active");
  btnPython.classList.add("active");

  frontend.forEach(function (el) {
    el.style.display = "none";
  });

  python.forEach(function (el) {
    el.style.display = "block";
  });
});
