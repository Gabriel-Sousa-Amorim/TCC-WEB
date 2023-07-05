let date = new Date();
let day = date.getDay()
let year = date.getFullYear();

//Função para destacar o dia da semana atual;
//Domingo == 0, Segunda == 1, Terça == 2...
function CatchTheDay() {
    function styleProcess(element, color) {
        Array.from(element.children).forEach(i => {
            i.style.color = "#000"
        });
        element.style.boxShadow = `0px 0px 20px ${color}`;
        element.style.border = `2px solid black`;
        element.style.backgroundColor = color;
        element.style.zIndex = "0";
        element.style.filter = 'none'
        element.style.transition = "all 0.2s"
        element.addEventListener("mouseover", function() {
        element.style.filter = 'saturate(135%)'
        })
        element.addEventListener("mouseout", function() {
            element.style.filter = 'saturate(100%)'
        })
        element.querySelector("ul").querySelectorAll("li").forEach(i => i.style.color = "#000")
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
    }
    switch (day) {
        //Caso Domingo
        case (0):
            const Sunday = document.getElementById("Sunday");
            styleProcess(Sunday, "var(--color-red)");
            break;
        //Caso Segunda
        case (1):
            const Monday = document.getElementById("Monday");
            styleProcess(Monday, "var(--color-orange)")
            break;
        //Caso Terça
        case (2):
            const Tuesday = document.getElementById("Tuesday");
            styleProcess(Tuesday, "var(--color-yellow)")
            break;
        //Caso Quarta
        case (3):
            const Wednesday = document.getElementById("Wednesday");
            styleProcess(Wednesday, "var(--color-green)")
            break;
        //Caso Quinta
        case (4):
            const Thursday = document.getElementById("Thursday");
            styleProcess(Thursday, "var(--color-yellow)")
            break;
        //Caso Sexta
        case (5):
            const Friday = document.getElementById("Friday");
            styleProcess(Friday, "var(--color-orange)")
            break;
        //Caso Sábado
        case (6):
            const Saturday = document.getElementById("Saturday");;
            styleProcess(Saturday, "var(--color-red)")
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

//Conteúdo Relacionado as regiões da página Sobre.HTML
//Com o conteudo e a função para por ou mudar o conteudo da description-container e etc...
const NorteContext = "A unidade da zona norte se localiza no bairro do Parque Edu Chaves, onde há fácil acesso para outros bairros da Zona Norte como Vila Medeiros, Vila Maria, Jaçanã, Tremembé, mas também atendendo regiões mais distantes da própria zona norte, além de realizarmos coleta e distribuição de doações em Guarulhos."
const LesteContext = "Fundada juntamente com a Unidade Sul, a Unidade da Zona Leste se localiza no Bairro da Vila Matilde. Auxiliando comunidades de outros demais distritos da ZL como Itaquera, São Mateus, Cidade Tiradentes, Guaianases, Itaim Paulista entre outros. Com soliedariedade e união expandimos nossos esforços auxiliando também a região de Itaquaquecetuba, Poá e Mogi das Cruzes."
const CentroContext = "A primeira unidade fundada da ONG, localizada no Bom Retiro próximo ao Conjunto Parque do Gato, onde é uma localização estratégica para fácil acesso a outras áreas do centro e como Sé, Vale do Anhagabaú e outras demais áreas. Sendo a unidade principal que se comunica com as demais outras e onde acontece geralmente confratenizações e eventos."
const OesteContext = "Em 2023 finalmente conquistamos o objetivo de possuirmos unidades em cada região da cidade de São Paulo, para melhor logística das doações entre as regiões, e então a unidade na Zona Oeste é fundada no bairro do Jaraguá atendendo o bairro e atualmente bairros como Perus, Pirituba, Jaguaré além dos municípios de Osasco, Barueri e Carapicuíba."
const SulContext = "Fundada juntamente com a Unidade Leste, a Unidade da Zona Sul se localiza em Santo Amaro. Auxiliando comunidades da região. Com dedicação e empenho, buscamos ajudar os bairros do Capão Redondo, Jardim Ângela, Grajaú, Paraisópolis e Heliópolis, e ainda expandindo nossos esforços auxiliando também a região de Diadema, Embu das Artes e Tabõao da Serra."
function ChangingContentRegion(idRegion, Region, text, color, textColor) {
    let description = document.getElementById("description-container")
    document.getElementById(idRegion).addEventListener("click", function () {
        description.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        })
        description.children[0].textContent = Region;
        description.children[1].textContent = text;
        description.style.borderColor = "#000";
        description.children[0].style.color =  textColor;
        description.children[1].style.color =  textColor;
        description.style.background = color;
    })
}

//Media queries ativadas para por a classe main-margin em elementos específicos conforme o zoom;
function ClassRemover() {
    if (window.matchMedia("(min-width:2000px)").matches) {
        document.querySelectorAll("section.section-flex").forEach(i => i.classList.add("main-margin"));
        document.querySelectorAll("div.section-flex-child").forEach(i => i.classList.remove("main-margin"));
    } else {
        document.querySelectorAll("section.section-flex").forEach(i => i.classList.remove("main-margin"));
        document.querySelectorAll("div.section-flex-child").forEach(i => i.classList.add("main-margin"));
    };
};

//Selecionador de funções específicas para cada página:
switch (document.querySelector("section.main-title").children[0].innerHTML) {
    case ("HOME"):
        ClassRemover();
        window.matchMedia("(min-width: 2000px)").addEventListener("change", ClassRemover);
        window.matchMedia("(max-width: 900px)").addEventListener("change", ClassRemover);
        break;
    case ("Sobre Nós"):
        CatchTheDay();
        ChangingContentRegion("SVG-norte", "Zona Norte", NorteContext, "var(--color-red)", '#efefef');
        ChangingContentRegion("SVG-oeste", "Zona Oeste", OesteContext, "var(--color-orange)", '#202020');
        ChangingContentRegion("SVG-centro", "Zona Central", CentroContext, "var(--color-yellow)", '#202020');
        ChangingContentRegion("SVG-leste", "Zona Leste", LesteContext, "var(--color-green-yellow)", '#202020');
        ChangingContentRegion("SVG-sul", "Zona Sul", SulContext, "var(--color-green)", '#202020')
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
