//Active page indicator
const navLinks = document.querySelectorAll('.link--primary');
const ftrLinks = document.querySelectorAll('.link--secondary');

const allLinks = Array.from(navLinks).concat(Array.from(ftrLinks));

const currentPage = window.location.pathname.split('/').pop();

allLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage){
        link.classList.add('active');
    }
    else{
        link.classList.remove('active');
    }
})