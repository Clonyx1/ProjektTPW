//Active page indicator
const navLinks = document.querySelectorAll('.link--primary');
const ftrLinks = document.querySelectorAll('.link--secondary');

const allLinks = Array.from(navLinks).concat(Array.from(ftrLinks));

let currentPage = window.location.pathname.split('/').pop();

if(currentPage == ''){
    currentPage = 'index.html';
}

allLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage){
        link.classList.add('active');
    }
    else{
        link.classList.remove('active');
    }
})