const storageKey = "themeSwitch";
const themeBtn = document.getElementById('theme-switch');
const themeLabel = document.querySelector('label#theme-info p')

if (sessionStorage.getItem(storageKey) === 'true') {
    document.documentElement.classList.add('dark-theme');
    themeBtn.checked = true;
    setThemeLabel();
}



if (themeBtn) {
    themeBtn.addEventListener('change', () => {
        document.documentElement.classList.toggle('dark-theme');

        setThemeLabel();

        if (sessionStorage.getItem(storageKey) === 'true') {
            sessionStorage.setItem(storageKey, 'false');
        }
        else {
            sessionStorage.setItem(storageKey, 'true');
        }
    })
}

function setThemeLabel() {
    if (document.documentElement.classList.contains('dark-theme')) {
        themeLabel.textContent = 'Tmavý motiv';
    }
    else {
        themeLabel.textContent = 'Světlý motiv';
    }
}