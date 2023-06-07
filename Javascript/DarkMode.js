
const Darkcheckbox = document.getElementById("DarkButton");
let i = 0
function DarkcheckboxToogle() {
    const root = document.querySelector(":root");
    let label = document.querySelector("label.darkModeElement");
    console.log(i)
    if (this.checked == true) {
        root.style.setProperty('--color-white', "#181818");
        root.style.setProperty('--color-black', "#efefef ");
        label.textContent = "Modo Claro"
    } else {
        root.style.setProperty('--color-white', "#efefef ");
        root.style.setProperty('--color-black', "#181818");
        label.textContent = "Modo Escuro"
    }
};
Darkcheckbox.addEventListener("change", DarkcheckboxToogle, true)
