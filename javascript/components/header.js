const menuBtn = document.getElementById('mobile-menu-button');
const navigationModal = document.getElementById('mobile-menu');

if(navigationModal){
    document.addEventListener('DOMContentLoaded', () => {
    navigationModal.style.display = "none";
})
}

//Check if menuBtn and navigationModal exist
if (menuBtn && navigationModal) {
    menuBtn.addEventListener("click", () => {
        toggleNavigationModal();
    })
}

function toggleNavigationModal() {
    if (navigationModal.style.display == "none") {
        navigationModal.style.display = "flex";
        document.body.classList.add('menu-open');
    }
    else {
        navigationModal.style.display = "none";
        document.body.classList.remove('menu-open');
    }
}