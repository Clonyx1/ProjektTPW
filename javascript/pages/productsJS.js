const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", () => {

        const filter = searchInput.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card'); // <-- zde!

        productCards.forEach(card => {
            const productNameElement = card.querySelector('.product-card-heading');
            const productNameText = productNameElement.innerText.toLowerCase();

            card.classList.toggle('hidden', !productNameText.includes(filter));
        });
    });
}