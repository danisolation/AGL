document.addEventListener("scroll", function () {
    const stickyDiv = document.querySelector(".side-bar");
    stickyDiv.style.top = `${window.scrollY}px`; 
  });