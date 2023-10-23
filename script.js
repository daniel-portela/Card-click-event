// Adicionando animação de hover aos cards e botão "Leia mais"
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const readMoreButton = card.querySelector(".read-more");
  const moreContent = card.querySelector(".more-content");

  readMoreButton.addEventListener("click", () => {
    if (moreContent.style.display === "none") {
      moreContent.style.display = "block";
      readMoreButton.textContent = "Fechar";
    } else {
      moreContent.style.display = "none";
      readMoreButton.textContent = "Leia mais";
    }
  });

  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.5s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
