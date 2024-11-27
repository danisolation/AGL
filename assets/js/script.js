document.addEventListener("DOMContentLoaded", function () {
  const sideBar = document.getElementById("sideBar");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // Function to update sidebar position
  function updateSidebarPosition() {
    if (window.innerWidth > 768) {
      sideBar.style.top = `${window.scrollY}px`;
    } else {
      sideBar.style.top = "0";
    }
  }

  // Scroll event listener
  document.addEventListener("scroll", updateSidebarPosition);

  // Hamburger menu toggle
  hamburgerMenu.addEventListener("click", function () {
    sideBar.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !sideBar.contains(event.target) &&
      !hamburgerMenu.contains(event.target) &&
      window.innerWidth <= 768
    ) {
      sideBar.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    }
  });

  // Update sidebar position on window resize
  window.addEventListener("resize", updateSidebarPosition);

  // Initial call to set sidebar position
  updateSidebarPosition();
});

