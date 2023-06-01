var Darkcheckbox = document.getElementById("DarkButton");
Darkcheckbox.addEventListener("change", function() {
    const root = document.querySelector(":root");
    let label = document.querySelector("label.darkModeElement");
    if (this.checked == true) {
        root.style.setProperty('--color-white', "#0c0c0c");
        root.style.setProperty('--color-black', "#efefef ");
        label.textContent = "Modo Claro"
    } else {
        root.style.setProperty('--color-white', "#efefef ");
        root.style.setProperty('--color-black', "#0c0c0c");
        label.textContent = "Modo Escuro"
    }
});