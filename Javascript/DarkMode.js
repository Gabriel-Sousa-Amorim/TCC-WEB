
const Darkcheckbox = document.getElementById("DarkButton");
let i = 0
function DarkcheckboxToogle() {
    const root = document.querySelector(":root");
    let label = document.querySelector("label.darkModeElement");
    if (this.checked == true) {
        root.style.setProperty('--color-white', "#202020");
        root.style.setProperty('--color-black', "#efefef ");
        label.textContent = "Modo Claro"
        console.log(i)
        return i = 1;
    } else {
        root.style.setProperty('--color-white', "#efefef ");
        root.style.setProperty('--color-black', "#202020");
        console.log(i)
        label.textContent = "Modo Escuro"
        return i = 0;
    }
};
Darkcheckbox.addEventListener("change", DarkcheckboxToogle, true)

function ThemeReconizer() {
    localStorage.setItem("theme", i)
}
ThemeReconizer()