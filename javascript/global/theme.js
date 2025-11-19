const storageKey = "themeSwitch";
const themeBtn = document.getElementById('theme-switch');

if(sessionStorage.getItem(storageKey) === 'true'){
    document.documentElement.classList.toggle('dark-theme');
    themeBtn.checked = 'true';
}


if(themeBtn){
    themeBtn.addEventListener('change', () => {
        document.documentElement.classList.toggle('dark-theme');
        if(sessionStorage.getItem(storageKey) === 'true'){
            sessionStorage.setItem(storageKey, 'false');
        }
        else{
            sessionStorage.setItem(storageKey, 'true');
        }
    })
}