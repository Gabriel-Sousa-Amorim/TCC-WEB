
function LockScroll() {
    window.scrollTo(1, 1)
    document.getElementById("Moving-page").animate(
        [
            {top: "0px"},
        {top: "-10000px", 
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