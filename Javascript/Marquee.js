//Função para esconder seção marquee ao apertar o botão;
function hide_marquee() {
    let marquee = document.getElementById("marquee-text");
    let btn = document.getElementById("hide-btn");
    if (btn.checked == false) {
        marquee.style.transform = "translate(0px, 40px)";
        marquee.style.transition = "all ease-in 0.5s";
        btn.style.transform = "translate(0px, 30px)";
        btn.style.transition = "all 0.3s";
    } else {
        marquee.style.transform = "translate(0px, 0px)";
        marquee.style.transition = "all 0.4s";
        btn.style.transform = "translate(0px, 0px)";
        btn.style.transition = "all ease-in 0.6s";
    }
}
//Função para esconder a marquee ao chegar na seção footer;
function Observed_elmt() {
    let container = document.getElementById("marquee-container-grid");
    let observedElement = document.querySelector("footer");
    let intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            container.style.transform = "translate(0px, 70px)";
            container.style.transition = "all ease-in 0.5s";
        } else {
            container.style.transform = "translate(0px, 0px)";
            container.style.transition = "all 0.4s";
        }
    });
    intersectionObserver.observe(observedElement);
}
document.querySelector("body").addEventListener("load", Observed_elmt, true)
document.getElementById("hide-btn").addEventListener("click", hide_marquee, true)