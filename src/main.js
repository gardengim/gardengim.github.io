requestAnimationFrame(() => {
  const leftNav = document.getElementById("left-nav");
  const rightNav = document.getElementById("right-nav");
  const leftNavToggle = document.getElementById("left-nav-toggle");
  const rightNavToggle = document.getElementById("right-nav-toggle");

  const toggleNav = (navElement, localStorageKey) => {
    localStorage[localStorageKey] = localStorage[localStorageKey] !== "true";
    navElement.classList.toggle("w-0");
    navElement.classList.toggle("w-full");
  };

  leftNavToggle.addEventListener("click", () => {
    toggleNav(leftNav, "isLeftNavVisible");
  });

  rightNavToggle.addEventListener("click", () => {
    toggleNav(rightNav, "isRightNavVisible");
  });

  leftNav.classList.add(
    localStorage.isLeftNavVisible !== "true" ? "w-0" : "w-full",
  );
  rightNav.classList.add(
    localStorage.isRightNavVisible !== "true" ? "w-0" : "w-full",
  );
});
