const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const productNameElement = card.querySelector('.product-card-heading');
        const productNameText = productNameElement.innerText.toLowerCase();
        if(productNameText.includes(filter)){
            card.style.display = '';
        }
        else{
            card.style.display = 'none';
        }
    });
});