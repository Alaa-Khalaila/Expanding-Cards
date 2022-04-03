const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.setAttribute("aria-expanded", "true");
    card.classList.add("active");
  });

  card.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      removeActiveClass();
      card.setAttribute("aria-expanded", "true");
      card.classList.add("active");
    }
  });
});

const removeActiveClass = () => {
  cards.forEach((card) => {
    card.classList.remove("active");
    card.setAttribute("aria-expanded", "false");
  });
};
