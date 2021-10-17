
window.addEventListener('load', event => {

    //mobile menu system the comes up from the bottom of the screen
    document.querySelector("#mobile-cta").addEventListener("click", () => {
        document.querySelector(".menu").style.top = 0;
        document.querySelector(".menu ul").style.opacity = 1;
        document.querySelector(".menu").style.borderTopRightRadius = 0;
        document.querySelector(".menu").style.borderTopLeftRadius = 0;
    })

    //the mobile exit button that makes the menu go back from where it came
    document.querySelector("#mobile-exit").addEventListener("click", () => {
        document.querySelector(".menu").style.top = "100%";
        document.querySelector(".menu ul").style.opacity = 0;
    })

    let lastScrollPosition = 0;
    let ticking = false;

    //selects all the imgs of the 2nd section to make them do all the same animation
    function callimg2(scrollPos){

        document.querySelectorAll(".sec-2-img").forEach(img => {
            img.style.top = 0;
            img.style.opacity = 1;
            img.style.borderRadius = 0;
        })
        
    }

    //scrolling event which makes the pictures appear on the 2nd section cutting off some of the words in the quote
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

    //flicks through the image gallery via the next button
    document.querySelector(".charas-arrow-right").addEventListener("click", () => {
        let img = document.querySelector(".sec-3-img img:first-of-type");
        console.log(img.getBoundingClientRect());
        currleft -= 100;
        img.style.marginLeft = currleft + "%";
    })

    //flicks through the image gallery via the prev button
    document.querySelector(".charas-arrow-left").addEventListener("click", () => {
        let img = document.querySelector(".sec-3-img img:first-of-type");
        console.log(img.getBoundingClientRect());
        currleft += 100;
        img.style.marginLeft = currleft + "%";

    })

    //Pexels Apikey: 563492ad6f91700001000001b85c341905654b2a900ab901fecb6997

    const API_KEY = "563492ad6f91700001000001b85c341905654b2a900ab901fecb6997";

    const imageUrl = "https://api.pexels.com/v1/photos/2014422";

    //async function getPictures(pageNum){
    //    const response = await fetch("https://api.pexels.com/v1/curated?page=$%7BpageNum%7D%22,%7B
    //        headers:{
    //            Authorization: API_KEY
    //        }
    //    });
    //    const data = await response.json();
    //    console.log(data);
    //
    //    displayImage(data)
    //}


    async function getPictures(){
        const response = await fetch(imageUrl, {
            headers: {
                Authorization: API_KEY
            }
        });
        const data = await response.json();
        console.log(data);

        let imgurl = data.url;
        console.log(imgurl);

        document.querySelector(".sec-3-img").src = imageUrl;
    }

    //function displayImage(data){
    //    data.photos.forEach((image => {
    //        document.querySelector(".sec-3-img").innerHTML = data
    //    }))
    //}

    getPictures();

    //fetch(imageUrl)
    //                         vvvv
    //.then(response => response.blob())
     //.then(imageBlob => {
        // Then create a local URL for that image and print it 
        //const imageObjectURL = URL.createObjectURL(imageBlob);
        //console.log(imageObjectURL);
    //});

});