window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#3984d4"; 
  } else {
    navbar.style.backgroundColor = "#333"; 
  }
});
