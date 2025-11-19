const themeBtn = document.getElementById('theme-switch');

if(themeBtn){
    themeBtn.addEventListener('change', () => {
        document.documentElement.classList.toggle('dark-theme')
    })
}