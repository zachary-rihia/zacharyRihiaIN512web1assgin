const e = require("express");

window.addEventListener('load', event => {

    document.querySelector("#mobile-cta").addEventListener("click", () => {
        document.querySelector(".menu").style.top = 0;
        document.querySelector(".menu ul").style.opacity = 1;
        document.querySelector(".menu").style.borderTopRightRadius = 0;
        document.querySelector(".menu").style.borderTopLeftRadius = 0;
    })

    document.querySelector("#mobile-exit").addEventListener("click", () => {
        document.querySelector(".menu").style.top = "100%";
        document.querySelector(".menu ul").style.opacity = 0;
    })

    let lastScrollPosition = 0;
    let ticking = false;

    function callimg2(scrollPos){

        document.querySelectorAll(".sec-2-img").forEach(img => {
            img.style.top = 0;
            img.style.opacity = 1;
            img.style.borderRadius = 0;
        })
        
    }

    document.addEventListener("scroll", function(e){
        lastScrollPosition = window.screenY;

        if (!ticking){
            window.requestAnimationFrame(function(){
                callimg2(lastScrollPosition);
                ticking = false;
            })

            ticking = true;
        }
    })

    let currleft = 0;

    var imgslide = document.querySelector(".sec-3-img")
    
    document.querySelector(".charas-arrow-right").addEventListener("click", () => {
        for(i = 0; i < imgslide.length; i++){
            if(e.target == imgslide[i]){
                console.log(img.getBoundingClientRect());
                currleft -= 100;
                img.style.marginLeft = currleft + "%";
            }
        }
    })

    document.querySelector(".charas-arrow-left").addEventListener("click", () => {
        for(i = imgslide.length; i > 0; i--){
            if(e.target == imgslide[i]){
                console.log(img.getBouSndingClientRect());
                currleft -= 100;
                img.style.marginLeft = currleft + "%";
            }
        }
    })

});