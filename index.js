const setupCardScroller = () => {
    const cardsRow = document.querySelector(".cards-row");
    const scrollForwardButton = document.querySelector(".scroll-forward-button");
    const scrollBackButton = document.querySelector(".scroll-back-button");
    const scrollAmount = cardsRow.clientWidth;

    scrollForwardButton.addEventListener("click", () => {
        cardsRow.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollBackButton.addEventListener("click", () => {
        cardsRow.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });
};

setupCardScroller();
