window.addEventListener('load', event => {

    document.querySelector("#mobile-cta").addEventListener("click", () => {
        document.querySelector(".menu").style.top = 0;
        document.querySelector(".menu ul").style.opacity = 1;
        document.querySelector(".menu").style.borderTopRightRadius = 0;
        document.querySelector(".menu").style.borderTopLeftRadius = 0;
    })

    document.querySelector("#mobile-exit").addEventListener("click", () => {
        document.querySelector(".menu").style.top = 100;
        document.querySelector(".menu ul").style.opacity = 0;
        //document.querySelector(".menu").style.borderTopRightRadius = 0;
        //document.querySelector(".menu").style.borderTopLeftRadius = 0;
    })

    

});