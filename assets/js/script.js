document.addEventListener("scroll", function () {
    const sideBar = document.querySelector(".side-bar");
    sideBar.style.top = `${window.scrollY}px`; 
  });