
function LockScroll() {
    window.scrollTo(1, 1)
    document.getElementById("Moving-page").animate(
        [
            {top: "0px"},
        {top: "-5000px", 
        display: "none"}
    ], 
    {
        // timing options
        duration: 2000,
        iterations: 1,
        delay: 900,
        fill:"forwards",
        easing: "ease-in"
    });
    const Xposition = document.documentElement.scrollLeft;
    const Yposition = document.documentElement.scrollTop;
    window.onscroll = function() {
        window.scrollTo(Xposition, Yposition);
}}

setTimeout(function() {window.onscroll = {}},1800)
LockScroll()

console.log(document.querySelectorAll("div.contact-child"))
//
//function RotateYCard() {
//    document.querySelectorAll("div.contact-child").forEach(i =>
//    {
//        i.addEventListener("mouseenter", function() {
//
//            i.animate(
//                [
//                    {transform: "rotateY(0deg) rotateX(0deg)" },
//                    {transform: "rotateY(180deg) rotateX(180deg)" },
//                ], 
//            {
//                // timing options
//                duration: 500,
//                iterations: 1,
//                delay: 0,
//                easing: "ease-in",
//                direction:"alternate",
//                fill: "forwards"
//            });
//        })
//        i.addEventListener("mouseout", function() {
//
//            i.animate(
//                [
//                    {transform: "rotateY(180deg) rotateX(180deg)" },
//                    {transform: "rotateY(0deg) rotateX(0deg)" },
//                ], 
//            {
//                // timing options
//                duration: 500,
//                iterations: 1,
//                delay: 0,
//                easing: "ease-in",
//                direction:"alternate",
//                fill: "forwards"
//            });
//        })
//    }
//    )
//}
//RotateYCard()