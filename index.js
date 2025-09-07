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

const UpdateButtonVisibility = () => {
    const cardsRow = document.querySelector(".cards-row");
    const scrollForwardButton = document.querySelector(".scroll-forward-button");
    const scrollBackButton = document.querySelector(".scroll-back-button");

    const updateButtonsState = () => {
        const currentPosition = cardsRow.scrollLeft;
        const cardsRowWidth = cardsRow.scrollWidth;
        const cardsVisibleWidth = cardsRow.clientWidth;

        if (currentPosition === 0) {
            scrollBackButton.classList.add("hidden");
        } else {
            scrollBackButton.classList.remove("hidden");
        }
        
        if (currentPosition + cardsVisibleWidth === cardsRowWidth) {
            scrollForwardButton.classList.add("hidden");
        } else {
            scrollForwardButton.classList.remove("hidden");
        }

    };

    cardsRow.addEventListener("scroll", updateButtonsState);
    updateButtonsState();
}

UpdateButtonVisibility();
setupCardScroller();
