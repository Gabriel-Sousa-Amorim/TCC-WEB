let date = new Date();
let day = date.getDay()
let year = date.getFullYear();

//Função para destacar o dia da semana atual;
//Domingo == 0, Segunda == 1, Terça == 2...
function CatchTheDay() {
    switch (day) {
        //Caso Domingo
        case(0) :
        const Sunday = document.getElementById("Sunday");
        Sunday.style.filter = "grayscale(0%)";
        Sunday.style.filter = "brightness(100%)";
        Sunday.style.boxShadow = "1px 1px 40px var(--color-red)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Sunday.style.zIndex = "0";
        break;
        
        //Caso Segunda
        case(1) :
        const Monday = document.getElementById("Monday");
        Monday.style.filter = "grayscale(0%)";
        Monday.style.filter = "brightness(100%)";
        Monday.style.boxShadow = "1px 1px 40px var(--color-orange)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Monday.style.zIndex = "0"
        break;
        
        //Caso Terça
        case(2) :
        const Tuesday = document.getElementById("Tuesday");
        Tuesday.style.filter = "grayscale(0%)";
        Tuesday.style.filter = "brightness(100%)";
        Tuesday.style.boxShadow = "1px 1px 40px var(--color-yellow)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Tuesday.style.zIndex = "0"
        break;
        
        //Caso Quarta
        case(3) :
        const Wednesday = document.getElementById("Wednesday");
        Wednesday.style.filter = "grayscale(0%)";
        Wednesday.style.filter = "brightness(100%)";
        Wednesday.style.boxShadow = "1px 1px 40px var(--color-green)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Wednesday.style.zIndex = "0";
        break;
        
        //Caso Quinta
        case(4) :
        const Thursday = document.getElementById("Thursday");
        Thursday.style.filter = "grayscale(0%)";
        Thursday.style.filter = "brightness(100%)";
        Thursday.style.boxShadow = "1px 1px 40px var(--color-yellow)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Thursday.style.zIndex = "0"
        break;
        
        //Caso Sexta
        case(5) :
        const Friday = document.getElementById("Friday");
        Friday.style.filter = "grayscale(0%)";
        Friday.style.filter = "brightness(100%)";
        Friday.style.boxShadow = "1px 1px 40px var(--color-orange)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Friday.style.zIndex = "0";
        break;
        
        //Caso Sábado
        case(6) :
        const Saturday = document.getElementById("Saturday");;
        Saturday.style.filter = "grayscale(0%)";
        Saturday.style.filter = "brightness(100%)";
        Saturday.style.boxShadow = "1px 1px 40px var(--color-red)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Saturday.style.zIndex = "0";
        break;
    }
};

//Põe o ano atual na área de copyright;
function CatchTheYear() {
    if(document.querySelector("section.main-title").children[0].innerHTML == "Sobre Nós") {
    CatchTheDay();
    document.getElementById("copyright-year").innerHTML = year;
} else {
    document.getElementById("copyright-year").innerHTML = year;
};
};
CatchTheYear();

//Executa a função apenas na página CONTATOS.html
//Função para redirecionamento de página ao apertar nos cards do Facebook, Instagram e Twitter
if(document.querySelector('.main-title').children[0].textContent.toLocaleLowerCase() ==  "contatos")  {
    function ContactLink(idSection,urlpath) {
        document.getElementById(idSection).addEventListener("click", function() {
            console.log(window.location);
            window.location.href = urlpath;
        })
    }
    ContactLink("section-Instagram" , "https://www.instagram.com/ong_mangara/");
    ContactLink("section-Facebook" , "https://www.facebook.com/people/Organização-Mangará/100092684681862/");
    ContactLink("section-Twitter" , "https://www.instagram.com/ong_mangara/");
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
        duration: 2000,
        iterations: 1,
        delay: 900,
        fill:"forwards",
        easing: "ease-in"
    });
    //Bloqueia o scrool durante o tempo da animação;
    const Xposition = document.documentElement.scrollLeft;
    const Yposition = document.documentElement.scrollTop;
    window.onscroll = function() {
        window.scrollTo(Xposition, Yposition);
}}

setTimeout(function() {window.onscroll = {}},1800);
LockScroll();

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

function ChangingContentRegion(idRegion, Region, text, color) {
    document.getElementById(idRegion).addEventListener("click", function() {
        let description = document.getElementById("description-container")
        description.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        })
        description.children[0].textContent = Region;
        description.children[1].textContent = text;
        description.style.background = color;
        description.style.background = color;

    })
}
const NorteContext = "A unidade da zona norte se localiza no bairro do Parque Edu Chaves, onde há fácil acesso para outros bairros da Zona Norte como Vila Medeiros, Vila Maria, Jaçanã, Tremembé, mas também atendendo regiões mais distantes da zona norte, além de coleta e distribuição de doações em Guarulhos."
ChangingContentRegion("SVG-norte", "Zona Norte", NorteContext, "var(--color-red)")
const LesteContext = ""
ChangingContentRegion("SVG-leste", "Zona Leste", LesteContext, "var(--color-green-yellow)")
const SulContext = ""
ChangingContentRegion("SVG-sul", "Zona Sul", SulContext, "var(--color-green)")
const OesteContext = ""
ChangingContentRegion("SVG-oeste", "Zona Oeste", OesteContext, "var(--color-orange)")
const CentroContext = "A primeira unidade fundada da ONG, localizada no Bom Retiro que é"
ChangingContentRegion("SVG-centro", "Zona Central", CentroContext, "var(--color-yellow)")