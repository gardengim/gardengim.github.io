requestAnimationFrame(() => {
  const leftNav = document.getElementById("left-nav");
  const rightNav = document.getElementById("right-nav");
  const leftNavToggle = document.getElementById("left-nav-toggle");
  const rightNavToggle = document.getElementById("right-nav-toggle");

  leftNavToggle.onchange = () => {
    localStorage.leftNavToggle = leftNavToggle.checked;
    leftNav.classList.toggle("w-64");
    leftNav.classList.toggle("w-0");
  };

  rightNavToggle.onchange = () => {
    localStorage.rightNavToggle = rightNavToggle.checked;
    rightNav.classList.toggle("w-64");
    rightNav.classList.toggle("w-0");
  };

  leftNavToggle.checked = localStorage.leftNavToggle === "true";
  rightNavToggle.checked = localStorage.rightNavToggle === "true";

  if (leftNavToggle.checked) {
    leftNav.classList.add("w-64");
  } else {
    leftNav.classList.add("w-0");
  }

  if (rightNavToggle.checked) {
    rightNav.classList.add("w-64");
  } else {
    rightNav.classList.add("w-0");
  }
});
