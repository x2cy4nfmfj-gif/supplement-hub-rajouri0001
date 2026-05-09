const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 100);
  });
});