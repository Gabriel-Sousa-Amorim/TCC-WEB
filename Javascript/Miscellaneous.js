let date = new Date();
let day = date.getDay()
let year = date.getFullYear();

//Função para destacar o dia da semana atual;
//Domingo == 0, Segunda == 1, Terça == 2...
function CatchTheDay() {
    switch (day) {
        //Caso Domingo
        case (0):
            const Sunday = document.getElementById("Sunday");
            Array.from(Sunday.children).forEach(i => {
                i.style.color = "#000"
            });
            Sunday.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
            Sunday.style.boxShadow = "0px 0px 10px var(--color-red)";
            Sunday.style.backgroundColor = "var(--color-red)";
            document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
            Sunday.style.zIndex = "0";
            break;

        //Caso Segunda
        case (1):
            const Monday = document.getElementById("Monday");
            Array.from(Monday.children).forEach(i => {
                i.style.color = "#000"
            });
            Monday.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
            Monday.style.boxShadow = "0px 0px 10px var(--color-orange)";
            Monday.style.backgroundColor = "var(--color-orange)";
            document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
            Monday.style.zIndex = "0"
            break;

        //Caso Terça
        case (2):
            const Tuesday = document.getElementById("Tuesday");
            Array.from(Tuesday.children).forEach(i => {
                i.style.color = "#000"
            });
            Tuesday.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
            Tuesday.style.boxShadow = "0px 0px 10px var(--color-yellow)";
            Tuesday.style.backgroundColor = "var(--color-yellow)";
            document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
            Tuesday.style.zIndex = "0"
            break;

        //Caso Quarta
        case (3):
            const Wednesday = document.getElementById("Wednesday");
            Array.from(Wednesday.children).forEach(i => {
                i.style.color = "#000"
            });
            Wednesday.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
            Wednesday.style.boxShadow = "0px 0px 10px var(--color-green)";
            Wednesday.style.backgroundColor = "var(--color-green)";
            document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
            Wednesday.style.zIndex = "0";
            break;

        //Caso Quinta
        case (4):
            const Thursday = document.getElementById("Thursday");
            Array.from(Thursday.children).forEach(i => {
                i.style.color = "#000"
            });
            Thursday.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
            Thursday.style.boxShadow = "0px 0px 10px var(--color-yellow)";
            Thursday.style.backgroundColor = "var(--color-yellow)";
            document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
            Thursday.style.zIndex = "0"
            break;

        //Caso Sexta
        case (5):
            const Friday = document.getElementById("Friday");
            Array.from(Friday.children).forEach(i => {
                i.style.color = "#000"
            });
            Friday.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
            Friday.style.boxShadow = "0px 0px 10px var(--color-orange)";
            Friday.style.backgroundColor = "var(--color-orange)";
            document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
            Friday.style.zIndex = "0";
            break;

        //Caso Sábado
        case (6):
            const Saturday = document.getElementById("Saturday");;
            Array.from(Saturday.children).forEach(i => {
                i.style.color = "#000"
            });
            Saturday.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
            Saturday.style.boxShadow = "0px 0px 10px var(--color-red)";
            Saturday.style.backgroundColor = "var(--color-red)";
            document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
            Saturday.style.zIndex = "0";
            break;
    }
};


//Executa a função apenas na página CONTATOS.html
//Função para redirecionamento de página ao apertar nos cards do Facebook, Instagram e Twitter
if (document.querySelector('.main-title').children[0].textContent.toLocaleLowerCase() == "contatos") {
    function ContactLink(idSection, urlpath) {
        document.getElementById(idSection).addEventListener("click", function () {
            console.log(window.location);
            window.location.href = urlpath;
        })
    }
    ContactLink("section-Instagram", "https://www.instagram.com/ong_mangara/");
    ContactLink("section-Facebook", "https://www.facebook.com/people/Organização-Mangará/100092684681862/");
    ContactLink("section-Twitter", "https://www.instagram.com/ong_mangara/");
}

//Faz uma animação na seção que mostra o título e o logo da ONG,  
//E ergue a seção para o alto da página.  
function LockScroll() {
    window.scrollTo(1, 1)
    document.getElementById("Moving-page").animate(
        [
            {
                top: "0px"
            },
            {
                top: "-10000px",
                display: "none"
            }
        ],
        {
            //Propriedades da animação;
            duration: 1000,
            iterations: 1,
            delay: 1000,
            fill: "forwards",
            easing: "ease-in"
        });
    //Bloqueia o scrool durante o tempo da animação;
    const Xposition = document.documentElement.scrollLeft;
    const Yposition = document.documentElement.scrollTop;
    window.onscroll = function () {
        window.scrollTo(Xposition, Yposition);
    }
}

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

const NorteContext = "A unidade da zona norte se localiza no bairro do Parque Edu Chaves, onde há fácil acesso para outros bairros da Zona Norte como Vila Medeiros, Vila Maria, Jaçanã, Tremembé, mas também atendendo regiões mais distantes da própria zona norte, além de realizarmos coleta e distribuição de doações em Guarulhos."
const LesteContext = "a"
const CentroContext = "A primeira unidade fundada da ONG, localizada no Bom Retiro que é"
const OesteContext = "a"
const SulContext = "a"
function ChangingContentRegion(idRegion, Region, text, color) {
    document.getElementById(idRegion).addEventListener("click", function () {
        let description = document.getElementById("description-container")
        description.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        })
        description.children[0].textContent = Region;
        description.children[1].textContent = text;
        description.style.background = color;
    })
}

//Selecionador de funções específicas para cada página:
switch (document.querySelector("section.main-title").children[0].innerHTML) {
    case ("Home"):
        console.log(1)

        break;
    case ("Sobre Nós"):
        CatchTheDay();
        ChangingContentRegion("SVG-norte", "Zona Norte", NorteContext, "var(--color-red)")
        ChangingContentRegion("SVG-leste", "Zona Leste", LesteContext, "var(--color-green-yellow)")
        ChangingContentRegion("SVG-sul", "Zona Sul", SulContext, "var(--color-green)")
        ChangingContentRegion("SVG-oeste", "Zona Oeste", OesteContext, "var(--color-orange)")
        ChangingContentRegion("SVG-centro", "Zona Central", CentroContext, "var(--color-yellow)")
        break;
    case ("Contatos"):
        ContactLink("section-Instagram", "https://www.instagram.com/ong_mangara/");
        ContactLink("section-Facebook", "https://www.facebook.com/people/Organização-Mangará/100092684681862/");
        ContactLink("section-Twitter", "https://www.instagram.com/ong_mangara/");
        break;
}

//Funções globais
document.querySelector("body").addEventListener("load", Observed_elmt, true)

document.getElementById("hide-btn").addEventListener("click", hide_marquee, true)

document.getElementById("copyright-year").innerHTML = year;

LockScroll();
setTimeout(function () { window.onscroll = {} }, 1800);