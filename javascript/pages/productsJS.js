const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll('.product-card');
//Check if there is searchInput and productCards
if(searchInput && productCards){
    searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const productNameElement = card.querySelector('.product-card-heading');
        const productNameText = productNameElement.innerText.toLowerCase();
        if(productNameText.includes(filter)){
            card.classList.remove('hidden');
        }
        else{
            card.classList.add('hidden');
        }
    });
});
}