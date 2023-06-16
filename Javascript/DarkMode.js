
const Darkcheckbox = document.getElementById("DarkButton");
function DarkcheckboxToogle() {
    const root = document.querySelector(":root");
    let label = document.querySelector("label.darkModeElement");
    if (this.checked == true) {
        root.style.setProperty('--color-white', "#202020");
        root.style.setProperty('--color-black', "#efefef ");
        label.classList.replace("bi-brightness-high", "bi-moon-stars-fill")
        label.textContent = "Modo Escuro"
    } else {
        root.style.setProperty('--color-white', "#efefef ");
        root.style.setProperty('--color-black', "#202020");
        label.classList.replace("bi-moon-stars-fill", "bi-brightness-high" )
        label.textContent = "Modo Claro"
    }
};
Darkcheckbox.addEventListener("change", DarkcheckboxToogle, true)