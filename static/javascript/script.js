window.onscroll = function () {
  stickyNavbar();
};

function stickyNavbar() {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  var threshold = 300; // Umbral de desplazamiento antes de cambiar la clase
  var isSticky = false; // Bandera para verificar si la barra de navegación es pegajosa

  function updateNavbar() {
    var currentScrollPos = window.scrollY || window.pageYOffset;

    if (currentScrollPos > sticky + threshold) {
      if (!isSticky) {
        navbar.classList.remove("static");
        navbar.classList.add("sticky");
        setTimeout(function () {
          navbar.classList.add("show");
        }, 10);
        isSticky = true;
      }
    } else {
      if (isSticky) {
        navbar.classList.remove("show");
        setTimeout(function () {
          navbar.classList.remove("sticky");
          navbar.classList.add("static");
        }, 300);
        isSticky = false;
      }
    }
  }

  function handleScroll() {
    requestAnimationFrame(updateNavbar);
  }

  window.addEventListener("scroll", handleScroll);
}
