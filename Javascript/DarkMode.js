

//Função para mudança de tema pela mudança das váriaveis no CSS; 
function darkToogle() {
    const btnCheck = document.getElementById("dark-button");
    const html = document.querySelector("html").attributes;
    const main = document.querySelector("main").classList;
    const label = document.querySelector("label");
    const img = document.getElementById("IconMangara").parentElement;
    const icon = document.querySelector("span#Dark-Icon");
    if (btnCheck.checked == true) {
        html[1].textContent = "light";
        main.replace("bg-dark", "bg-white");
        main.replace("border-light", "border-dark");
        label.innerHTML = "Modo Claro";
        img.style.filter = "invert(1) brightness(15%)";
        label.classList.replace("btn-outline-light", "btn-outline-dark");
        icon.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
    } else {
        html[1].textContent = "dark";
        main.replace("bg-white", "bg-dark");
        main.replace("border-dark", "border-light");
        label.classList.replace("btn-outline-dark", "btn-outline-light");
        label.innerHTML = "Modo Escuro";
        img.style.filter = "invert(1) brightness(65%)";
        icon.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
    };
};

if(document.querySelector('title').textContent ==  "Formulário de Doação") {
    document.getElementById("dark-button").addEventListener("change", darkToogle, true); 
//Mudança de tema para o formulário; 
} else {
    function DarkcheckboxToogle() {
        const root = document.querySelector(":root");
        let label = document.querySelector("label.darkModeElement");
        if (this.checked == true) {
            root.style.setProperty('--color-white', "#efefef ");
            root.style.setProperty('--color-black', "#202020");
            label.classList.replace("bi-brightness-high", "bi-moon-stars-fill");
            label.textContent = "Modo Escuro";
        } else {
            root.style.setProperty('--color-white', "#202020");
            root.style.setProperty('--color-black', "#efefef ");
            label.classList.replace("bi-moon-stars-fill", "bi-brightness-high");
            label.textContent = "Modo Claro";
        };
    };
    document.getElementById("DarkButton").addEventListener("change", DarkcheckboxToogle, true);
}

