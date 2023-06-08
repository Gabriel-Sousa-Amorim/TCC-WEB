let date = new Date();
let day = date.getDay()
console.log(day)

switch (day) {
    //Caso Domingo
    case(0) :
    const Sunday = document.getElementById("Sunday")
    Sunday.style.background = "#ff5959";
    Sunday.style.borderBlock = "2px solid var(--color-black)";
    Sunday.querySelector("h3").style.color = "#000"
    Sunday.querySelector("p").style.color = "#000"
    Sunday.querySelectorAll("li").forEach(i => i.style.color = "#000")
    break;
    
    //Caso Segunda
    case(1) :
    const Monday = document.getElementById("Monday")
    Monday.style.background = "#f5a550";
    Monday.style.borderBlock = "2px solid var(--color-black)";
    Monday.querySelector("h3").style.color = "#000"
    Monday.querySelector("p").style.color = "#000"
    Monday.querySelectorAll("li").forEach(i => i.style.color = "#000")
    break;
    
    //Caso Terça
    case(2) :
    const Tuesday = document.getElementById("Tuesday")
    Tuesday.style.background = "#eaf826";
    Tuesday.style.border = "2px solid #000";
    Tuesday.querySelector("h3").style.color = "#000"
    Tuesday.querySelector("p").style.color = "#000"
    Tuesday.querySelectorAll("li").forEach(i => i.style.color = "#000")
    
    break;
    
    //Caso Quarta
    case(3) :
    const Wednesday = document.getElementById("Wednesday")
    Wednesday.style.background = "#2ddd3c";
    Wednesday.style.borderBlock = "2px solid var(--color-black)";
    Wednesday.querySelector("h3").style.color = "#000"
    Wednesday.querySelector("p").style.color = "#000"
    Wednesday.querySelectorAll("li").forEach(i => i.style.color = "#000")
    break;
    
    //Caso Quinta
    case(4) :
    const Thursday = document.getElementById("Thursday")
    Thursday.style.background = "#eaf826";
    Thursday.style.borderBlock = "2px solid var(--color-black)";
    Thursday.querySelector("h3").style.color = "#000"
    Thursday.querySelector("p").style.color = "#000"
    Thursday.querySelectorAll("li").forEach(i => i.style.color = "#000")
    
    break;
    
    //Caso Sexta
    case(5) :
    const Friday = document.getElementById("Friday").style.background = "#f5a550";
    Friday.style.background = "#eaf826";
    Friday.style.borderBlock = "2px solid var(--color-black)";
    Friday.querySelector("h3").style.color = "#000"
    Friday.querySelector("p").style.color = "#000"
    Friday.querySelectorAll("li").forEach(i => i.style.color = "#000")
    break;
    
    //Caso Sábado
    case(6) :
    const Saturday = document.getElementById("Saturday")
    Saturday.style.background = "#ff5959";
    Saturday.style.borderBlock = "2px solid var(--color-black)";
    Saturday.querySelector("h3").style.color = "#000"
    Saturday.querySelector("p").style.color = "#000"
    Saturday.querySelectorAll("li").forEach(i => i.style.color = "#000")
        break;
}