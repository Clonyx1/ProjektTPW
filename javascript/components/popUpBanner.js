
document.addEventListener('DOMContentLoaded', () => {
    const popUpWrap = document.querySelector('.pop-up-wrap');
    const closePopUpButton = document.getElementById('closePopUp');
    const storageKey = 'popUpClosed';

    if (sessionStorage.getItem(storageKey) === 'true') {
        if (popUpWrap) {
            popUpWrap.classList.add('hidden');
        }
    } else {
        if (popUpWrap && popUpWrap.classList.contains('hidden')) {
             popUpWrap.classList.remove('hidden');
        }
    }

    if (closePopUpButton && popUpWrap) {
        closePopUpButton.addEventListener('click', () => {
            popUpWrap.classList.add('hidden');

            sessionStorage.setItem(storageKey, 'true');
        });
    }
});
