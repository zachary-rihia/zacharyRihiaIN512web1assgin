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

    let science = document.querySelector(".scientific-name-block li");
    let civi = document.querySelector(".civi-name li");
    let animalinfo = document.querySelector(".animal-fact li");
    let locationname = document.querySelector(".location-name li");

    let scienceArray = ["Aptenodytes forsteri", "Rhincodon typus", "Orcinus orca", "Tyto alba", "Panthera tigris", "Chelonia mydas"];
    let civiArray = ["Emperor Penguin", "Whale Shark", "Orca/Killer Whale", "Barn Owl", "Tiger", "Sea Turtle"];
    let animalinfoArray = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];
    let locationnameArray = ["Antartica", "Mesoamerican Reef, Coastal East Africa, Gulf of California, Coral Triangle",
        "Antarctica, Norway, and Alaska", "North America, South America, Europe, Africa",
        "China, India, and Southwest Asia to the Indonesian island of Sumatra", "Atlantic, Pacific, and Indian Oceans"]

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
    let selectors = [gura, dolph, barn, tigger, seaturt, pen];
        
    queries.forEach((e,index) => {
        (async () => {
            let res = await fetch(imageUrl + e.url, {
                headers: {
                    Authorization: API_KEY
                }
            });

            let data = await res.json();
            let currSelectors = selectors[index];

            data.photos.forEach((photo,index2) => {
                currSelectors[index2].src = photo.src.medium;
            });

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

    // Instantiate `CircleType` with an HTML element.
    const circleType = new CircleType(document.querySelector('.play-button'));

    // Set the text radius and direction. Note: setter methods are chainable.
    circleType.radius().dir(-1);

})