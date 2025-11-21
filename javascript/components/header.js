
const menuBtn = document.getElementById('mobile-menu-button');
const navigationModal = document.getElementById('mobile-menu');

if (navigationModal) {
    document.addEventListener('DOMContentLoaded', () => {
        navigationModal.classList.add('hidden');
    })
}

//Check if menuBtn and navigationModal exist
if (menuBtn && navigationModal) {
    menuBtn.addEventListener("click", () => {
        toggleNavigationModal();
    })
}

function toggleNavigationModal() {
    if (navigationModal.classList.contains('hidden')) {
        menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`;
        menuBtn.ariaLabel = "Zavřít hlavní menu";
        menuBtn.ariaExpanded = "true";
        navigationModal.classList.remove('hidden');
        document.body.classList.add('menu-open');
    }
    else {
        menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                                <path
                                    d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                            </svg>`;
        menuBtn.ariaLabel = "Otevřít hlavní menu";
        menuBtn.ariaExpanded = "false";
        navigationModal.classList.add('hidden');
        document.body.classList.remove('menu-open');
    }
}