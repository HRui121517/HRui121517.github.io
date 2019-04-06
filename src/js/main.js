import "../sass/styles.scss";

document.addEventListener("DOMContentLoaded", function() {
  const socialItems = document.querySelectorAll(".social-item");
  const socialContainer = document.querySelector(".social-container");
  const socialTitle = document.querySelector(".social-title");
  for (let item of socialItems) {
    item.addEventListener("mouseover", showSocial);
    item.addEventListener("mouseout", hideSocial);
  }

  function showSocial() {
    const colorToShow = this.classList[1];
    socialContainer.classList.add(colorToShow);
    socialTitle.classList.add("social-title--visible");
    socialTitle.textContent = colorToShow;
    for (let item of socialItems) {
      item.setAttribute("style", "color: #ffffff;");
      item.classList.add("hovered");
    }
  }

  function hideSocial() {
    const colorToShow = this.classList[1];
    socialContainer.classList.remove(colorToShow);
    socialTitle.classList.remove("social-title--visible");
    for (let item of socialItems) {
      item.setAttribute("style", "color: #303F9F;");
      item.classList.remove("hovered");
    }
  }
});
