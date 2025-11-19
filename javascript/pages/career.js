//Search section logic
const searchInput = document.getElementById('searchInput');
const positionCards = document.querySelectorAll('.open-position-card');

if(searchInput && positionCards){
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();

        positionCards.forEach(card => {
            const productNameElement = card.querySelector('.open-position-card-heading');
            const productName = productNameElement.innerText.toLowerCase();

            if(productName.includes(filter)){
                card.classList.remove('hidden');
            }
            else{
                card.classList.add('hidden');
            }
        })
    })
}
//Open position card logic
const postionCardText = document.querySelectorAll('.open-position-card-text');
postionCardText.forEach(txt => {
    txt.classList.add('hidden');
})

document.querySelectorAll('.open-position-card-show-more-button').forEach(btn => {
    btn.addEventListener("click", () => {
        const positionCard = btn.closest('.open-position-card');
        const text = positionCard.querySelector('.open-position-card-text');
        const summary = positionCard.querySelector('.open-position-card-summary');

        if(text.classList.contains('hidden')){
            text.classList.remove('hidden');
            summary.classList.add('hidden');
        }
        else{
            text.classList.add('hidden');
            summary.classList.remove('hidden');
        }
    })
})