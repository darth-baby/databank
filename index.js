const setupCardScrollers = () => {
    const cardSections = document.querySelectorAll(".cards-section");

    cardSections.forEach(section => {
        const cardsRow = section.querySelector(".cards-row");
        
        if (!cardsRow) return;

        section.addEventListener("click", (event) => {
            
            if (event.target.closest(".scroll-forward-button")) {
                const scrollAmount = cardsRow.clientWidth;
                cardsRow.scrollBy({
                    left: scrollAmount, // Вперед = положительное значение
                    behavior: "smooth"
                });
            }

            if (event.target.closest(".scroll-back-button")) {
                const scrollAmount = cardsRow.clientWidth;
                cardsRow.scrollBy({
                    left: -scrollAmount, // Назад = отрицательное значение
                    behavior: "smooth"
                });
            }
        });
    });
};

setupCardScrollers();

const UpdateButtonsVisibility = () => {
    const cardSections = document.querySelectorAll(".cards-section");

    cardSections.forEach(section => {
        const cardsRow = section.querySelector(".cards-row");
        const scrollBackButton = section.querySelector(".scroll-back-button");
        const scrollForwardButton = section.querySelector(".scroll-forward-button");

        if (!cardsRow || !scrollBackButton || !scrollForwardButton) {
            return;
        }

        const UpdateButtonsState = () => {
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
        
        cardsRow.addEventListener("scroll", UpdateButtonsState);
        UpdateButtonsState();
    });    

};

UpdateButtonsVisibility();
