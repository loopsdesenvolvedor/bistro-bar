(() => {
  const menuOpen = document.querySelector(".menu-open");
  const menuClose = document.querySelector(".menu-close");
  const linksMenu = document.querySelector(".links-menu");

  menuOpen.addEventListener("click", (e) => {
    linksMenu.style.right = "0rem";
  });

  menuClose.addEventListener("click", (e) => {
    linksMenu.style.right = "-999rem";
  });
})();
