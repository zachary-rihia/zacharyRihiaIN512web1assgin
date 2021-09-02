window.addEventListener('load', event => {

    document.querySelector("#mobile-cta").addEventListener("click", () => {
        document.querySelector(".menu").style.top = 0;
        document.querySelector(".menu ul").style.opacity = 1;
        document.querySelector(".menu").style.borderTopRightRadius = 0;
        document.querySelector(".menu").style.borderTopLeftRadius = 0;
    })
});