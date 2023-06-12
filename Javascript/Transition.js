document.body.style.zoom = "100%"
function Animation() {
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
    }
    );
    
    const Xposition = window.pageXOffset || document.documentElement.scrollLeft;
    const Yposition = window.pageYOffset || document.documentElement.scrollTop;
    window.onscroll = function() {
        window.scrollTo(Xposition, Yposition);
}
}
setTimeout(
    function() {window.onscroll = {}},
    1800)
Animation()