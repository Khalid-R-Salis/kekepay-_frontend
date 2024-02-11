document.addEventListener("DOMContentLoaded", function () {
  const navshow = document.getElementById("navshow");
  const mobilenav = document.getElementById("mobilenav");

  navshow.addEventListener("click", function () {
    mobilenav.classList.toggle("show");
    if (mobilenav.classList.contains("show")) {
      navshow.src = "Images/icon-close.svg";
    } else {
      navshow.src = "Images/icon-menu.svg";
    }
  });
});
