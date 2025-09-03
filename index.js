const scrollCardsRow = () => {
    const cardsRow = document.querySelector(".cards-row")
    const scrollNextButton = document.querySelector(".scroll-forward-button");
    const cardsRowWidth = cardsRow.clientWidth;
    

    scrollNextButton.addEventListener("click", () => {
        cardsRow.scrollBy({
            left: cardsRowWidth,
            behavior: 'smooth'
        })
    })

};

scrollCardsRow();