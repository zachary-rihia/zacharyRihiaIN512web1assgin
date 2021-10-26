window.addEventListener('load', event => {

    let menu =  document.querySelector(".menu");
    let menuul = document.querySelector(".menu ul");

    //mobile menu system the comes up from the bottom of the screen
    document.querySelector("#mobile-cta").addEventListener("click", () => {
        menu.style.top = 0;
        menuul.style.opacity = 1;
        document.querySelector(".contacts").style.opacity = 1;
        menu.style.borderTopRightRadius = 0;
        menu.style.borderTopLeftRadius = 0;
        document.querySelector(".footer-nav-bar").style.zIndex = 4;
    })

    //the mobile exit button that makes the menu go back from where it came
    document.querySelector("#mobile-exit").addEventListener("click", () => {
        menu.style.top = "100%";
        menuul.style.opacity = 0;
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

    let mimg = document.querySelector(".mainpic img:first-of-type");
    let limg = document.querySelector(".leftpic img:first-of-type");
    let rtimg = document.querySelector(".righttop img:first-of-type");
    let rmimg = document.querySelector(".rightmid img:first-of-type");
    let rbimg = document.querySelector(".rightbot img:first-of-type");

    let science = document.querySelector(".scientific-name-block li");
    let civi = document.querySelector(".civi-name li");
    let animalinfo = document.querySelector(".animal-fact li");
    let locationname = document.querySelector(".location-name li");

    // let scienceArray = Array.from(science);
    // let civiArray = Array.from(civi);
    // let animalinfoArray = Array.from(animalinfo);
    // let locationnameArray = Array.from(locationname);

    //flicks through the section 3 image gallery via the next button
    document.querySelector(".right").addEventListener("click", () => {
        currleft -= 100;
        mimg.style.marginLeft = currleft + "%";
        limg.style.marginLeft = currleft + "%";
        rtimg.style.marginLeft = currleft + "%";
        rmimg.style.marginLeft = currleft + "%";
        rbimg.style.marginLeft = currleft + "%";
    })

    //flicks through the section 3 image gallery via the prev button
    document.querySelector(".left").addEventListener("click", () => {
        currleft += 100;
        mimg.style.marginLeft = currleft + "%";
        limg.style.marginLeft = currleft + "%";
        rtimg.style.marginLeft = currleft + "%";
        rmimg.style.marginLeft = currleft + "%";
        rbimg.style.marginLeft = currleft + "%";

    })

    //Pexels Apikey: 563492ad6f91700001000001b85c341905654b2a900ab901fecb6997
    const API_KEY = "563492ad6f91700001000001b85c341905654b2a900ab901fecb6997";

    //search query for the pexels api
    const imageUrl = "https://api.pexels.com/v1/search?query=";

    //the items that are used for the search qurey
    const penguin = {url:"Emperor%20penguin&per_page=5", animal: "penguin"};
    const orca = {url:"killer%20whale&per_page=5", animal: "orca"};
    const owl = {url:"barn%20owl&per_page=5", animal: "owl"};
    const tiger = {url:"tiger&per_page=5", animal:"tiger"};
    const turtle = {url:"sea%20turtle&per_page=5", animal:"turtle"};
    const shark = {url:"whale%20shark&per_page=5", animal:"shark"};

    let pen = document.querySelectorAll(".pen");
    let gura = document.querySelectorAll(".shark");
    let dolph = document.querySelectorAll(".orca");
    let barn = document.querySelectorAll(".owl");
    let tigger = document.querySelectorAll(".tiger");
    let seaturt = document.querySelectorAll(".turtle");

    let queries = [penguin, orca, owl, tiger, turtle, shark];
    let selectors = [pen, dolph, barn, tigger, seaturt, gura];
        
    queries.forEach(e => {
        (async () => {
            let res = await fetch(imageUrl + e.url, {
                headers: {
                    Authorization: API_KEY
                }
            });

            let data = await res.json();
            console.log(data);

            // let el = document.createElement(e.animal);
            data.photos.forEach(z => {
                let img = selectors;
                console.log(selectors);
                img.src = z.src.medium;
                // el.appendChild(img);
            });

            // let body = document.querySelector(".stuff");
            // body.appendChild(el);
        })();
    });

    (async() => {
        let response = await fetch(imageUrl + "wildlife&per_page=5", {
            headers: {
                Authorization: API_KEY
            }
        });
        let data = await response.json();

        let imgurl = data.photos;
        let gallery = document.querySelectorAll(".randomgallery")

        // gallery.forEach((e,i) => {
        //     e.src = imgurl[i].src.medium;
        // });

    })();
    
    // function circularText(txt, radius, classIndex){
    //     txt = txt.split(""),
    //     classIndex = document.querySelector(".roundText")
    //     [classIndex];

    //     let deg = 360 / txt.length,
    //     origin = 0;

    //     txt.forEach((ea) => {
    //         ea = `<h2 style="height:${radius}px; position:absolute;transform:rotate(${origin}deg);
    //         transform-origin:0 100%">${ea}</h2>`
    //         classIndex.innerHTML += ea;
    //         origin += deg;
    //     });
    // }

    // circularText();

})