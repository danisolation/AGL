document.addEventListener("DOMContentLoaded", function () {
  const sideBar = document.getElementById("sideBar");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const lists = document.querySelectorAll(".list")
  const name = document.querySelector(".name")

  function updatePosition() {
    if (window.innerWidth > 1200) {
      sideBar.style.top = `${window.scrollY}px`;
    } else {
      sideBar.style.top = "0";
    }
    hamburgerMenu.style.top = `${window.scrollY}px`;
  }

  document.addEventListener("scroll", updatePosition);

  hamburgerMenu.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });


  document.addEventListener("click", function (event) {
    if (
      !sideBar.contains(event.target) &&
      !hamburgerMenu.contains(event.target) &&
      window.innerWidth <= 1200
    ) {
      sideBar.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    }
  });

  
  for (let list of lists) { 
    list.addEventListener("click", function () {
      sideBar.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    });
  }

  name.addEventListener("click", function () {
    sideBar.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  });

  window.addEventListener("resize", updatePosition);

  updatePosition();
});
