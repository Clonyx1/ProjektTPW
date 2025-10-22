const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll('.product-card');
//Zkontroluje, že je na stránce searchInput a productCards
if(searchInput && productCards){
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
}


document.addEventListener('DOMContentLoaded', () => {
    const popUpWrap = document.querySelector('.pop-up-wrap');
    const closePopUpButton = document.getElementById('closePopUp');
    const storageKey = 'popUpClosed';

    // 1. Zkontroluje sessionStorage při načtení stránky
    if (sessionStorage.getItem(storageKey) === 'true') {
        // Pokud je v sessionStorage záznam, okno se skryje
        if (popUpWrap) {
            popUpWrap.classList.add('hide');
        }
    } else {
        // Pokud v sessionStorage záznam není, okno se zobrazí (odebere třídu 'hide' pro případ, že je ve výchozím stavu skryté)
        if (popUpWrap && popUpWrap.classList.contains('hide')) {
             popUpWrap.classList.remove('hide');
        }
    }

    // 2. Nastaví posluchač událostí na tlačítko
    if (closePopUpButton && popUpWrap) {
        closePopUpButton.addEventListener('click', () => {
            // Skryje vyskakovací okno přidáním třídy 'hide'
            popUpWrap.classList.add('hide');

            // Uloží do sessionStorage, že okno bylo zavřeno
            sessionStorage.setItem(storageKey, 'true');
        });
    }
});
