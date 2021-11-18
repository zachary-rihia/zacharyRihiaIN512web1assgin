// forces the page to load at the top so it does not glitch out and 
// puts the page too far to the left
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.addEventListener('load', event => {

    // queryselectors
    let menu =  document.querySelector(".menu");
    let menuul = document.querySelector(".menu ul");
    let normMenu = document.querySelectorAll(".normalMenu");
    let sections = document.querySelectorAll("section");

    // 2nd section selectors
    let sec2ani = document.querySelectorAll(".letter, .sec-2-img");
    let sec2img = document.querySelectorAll(".sec-2-img");
    let imgsec2 = document.querySelectorAll(".img-wrap2");

    // 3rd section selectors
    let science = document.querySelector(".scientific-name-block li");
    let civi = document.querySelector(".civi-name li");
    let animalinfo = document.querySelector(".animal-fact li");
    let locationname = document.querySelector(".location-name li");
    let mainpic = document.querySelectorAll(".mainpic img");
    let leftpic = document.querySelectorAll(".leftpic img");
    let righttop = document.querySelectorAll(".righttop img");
    let rightmid = document.querySelectorAll(".rightmid img");
    let rightbot = document.querySelectorAll(".rightbot img");
    let rightarrow = document.querySelector(".right");
    let leftarrow = document.querySelector(".left");
    // 3rd section selectors to put specific pictures for the search qurey into  
    let pen = document.querySelectorAll(".pen");
    let gura = document.querySelectorAll(".shark");
    let dolph = document.querySelectorAll(".orca");
    let barn = document.querySelectorAll(".owl");
    let tigger = document.querySelectorAll(".tiger");
    let seaturt = document.querySelectorAll(".turtle");

    // selector for the promo animation
    let promo = document.querySelectorAll(".row");

    // selector for the 5th section
    let gallery = document.querySelectorAll(".randomgallery");
    let imgGallery = document.querySelectorAll(".randomgallcontainer");
    console.log(gallery);


    // *********** menu/navbar *********** //

    // mobile menu system the comes up from the bottom of the screen
    document.querySelector("#mobile-cta").addEventListener("click", () => {
        menu.style.top = 0;
        menuul.style.opacity = 1;
        document.querySelector(".contacts").style.opacity = 1;
        menu.style.borderTopRightRadius = 0;
        menu.style.borderTopLeftRadius = 0;
        document.querySelector(".footer-nav-bar").style.zIndex = 4;
    })

    // the mobile exit button that makes the menu go back from where it came
    document.querySelector("#mobile-exit").addEventListener("click", () => {
        menu.style.top = "100%";
        menuul.style.opacity = 0;
    })


    // *********** section 2 *********** //

    let lastScrollPosition = 0;
    let ticking = false;

    // selects all the imgs of the 2nd section to make them do all the same animation
    function callimg2(scrollPos){

        sec2img.forEach(img => {
            img.style.top = 0;
            img.style.opacity = 1;
            img.style.borderRadius = 0;
        })
    }

    // scrolling event which makes the pictures appear on the 2nd section cutting off some of the words in the quote
    document.addEventListener("scroll", function(e){
        lastScrollPosition = window.screenY;
        if (!ticking){
            window.requestAnimationFrame(function(){
                callimg2(lastScrollPosition);    
                ticking = false;
            })

            ticking = true;
        }
    });


    // *********** section 3 *********** //

    // arrays for the third section information
    let scienceArray = ["Rhincodon typus", "Aptenodytes forsteri", "Orcinus orca", "Tyto alba", "Panthera tigris", "Chelonia mydas"];
    let civiArray = ["Whale Shark", "Emperor Penguin", "Orca/Killer Whale", "Barn Owl", "Tiger", "Sea Turtle"];
    let animalinfoArray = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];
    let locationnameArray = ["Mesoamerican Reef, Coastal East Africa, Gulf of California, Coral Triangle", "Antartica",
        "Antarctica, Norway, and Alaska", "North America, South America, Europe, Africa",
        "China, India, and Southwest Asia to the Indonesian island of Sumatra", "Atlantic, Pacific, and Indian Oceans"]

    // for array number
    let currImg = 0;
    
    // sets the zindex for each img in section 3
    mainpic[currImg%mainpic.length].style.zIndex = "2";
    leftpic[currImg%mainpic.length].style.zIndex = "2";
    righttop[currImg%mainpic.length].style.zIndex = "2";
    rightmid[currImg%mainpic.length].style.zIndex = "2";
    rightbot[currImg%mainpic.length].style.zIndex = "2";

    let transitioning = false;

    // flicks through the section 3 image gallery via the next button
    rightarrow.addEventListener("click", () => {

        if(!transitioning){
            transitioning = true;
            // moves the image to the right so its hidden
            mainpic[currImg%mainpic.length].style.right = "100%";
            leftpic[currImg%mainpic.length].style.right = "100%";
            righttop[currImg%mainpic.length].style.right = "100%";
            rightmid[currImg%mainpic.length].style.right = "100%";
            rightbot[currImg%mainpic.length].style.right = "100%";
            
            // ups the array number
            currImg++;
            
            // sets zindex to 1 so the next photo is underneath
            mainpic[currImg%mainpic.length].style.zIndex = "1";
            leftpic[currImg%mainpic.length].style.zIndex = "1";
            righttop[currImg%mainpic.length].style.zIndex = "1";
            rightmid[currImg%mainpic.length].style.zIndex = "1";
            rightbot[currImg%mainpic.length].style.zIndex = "1";
            

            if(currImg === 7){
                currImg = 1;
            }

            // looks for transtions then puts the next image on top
            mainpic[currImg-1%mainpic.length].addEventListener('transitionend', (event) =>{
                if(event.target.style.right != "0" && event.target.style.right != "0px"){                

                    // setting the zindex of the last img back to 0
                    mainpic[currImg-1%mainpic.length].style.zIndex = "0";
                    leftpic[currImg-1%mainpic.length].style.zIndex = "0";
                    righttop[currImg-1%mainpic.length].style.zIndex = "0";
                    rightmid[currImg-1%mainpic.length].style.zIndex = "0";
                    rightbot[currImg-1%mainpic.length].style.zIndex = "0";

                    // setting the right of the last img back to 0
                    mainpic[currImg-1%mainpic.length].style.right = "0";
                    leftpic[currImg-1%mainpic.length].style.right = "0";
                    righttop[currImg-1%mainpic.length].style.right = "0";
                    rightmid[currImg-1%mainpic.length].style.right = "0";
                    rightbot[currImg-1%mainpic.length].style.right = "0";

                    // putting the current img at the top of the stack
                    mainpic[currImg%mainpic.length].style.zIndex = "2";
                    leftpic[currImg%mainpic.length].style.zIndex = "2";
                    righttop[currImg%mainpic.length].style.zIndex = "2";
                    rightmid[currImg%mainpic.length].style.zIndex = "2";
                    rightbot[currImg%mainpic.length].style.zIndex = "2";
                    
                    // moves through the arrays above when clicking the button
                    science.innerHTML = scienceArray[currImg%mainpic.length];
                    civi.innerHTML = civiArray[currImg%mainpic.length];
                    // animalinfo.innerHTML = animalinfoArray[currImg%mainpic.length];
                    locationname.innerHTML = locationnameArray[currImg%mainpic.length];
                    transitioning = false;
                }
            })
        }
    });
    
    // flicks through the section 3 image gallery via the prev button
    leftarrow.addEventListener("click", () => {
        //lowers the array number
        currImg--;

        if(currImg === -1){
            currImg = 5;
        }

        // moves the image to the right so its hidden to make it look like it came from the right
        mainpic[currImg%mainpic.length].style.right = "100%";
        leftpic[currImg%mainpic.length].style.right = "100%";
        righttop[currImg%mainpic.length].style.right = "100%";
        rightmid[currImg%mainpic.length].style.right = "100%";
        rightbot[currImg%mainpic.length].style.right = "100%";

        // looks for transtions then puts the next image on top
        mainpic[currImg%mainpic.length].addEventListener('transitionend', (event) =>{
            if(event.target.style.right != "0" && event.target.style.right != "0px"){

                // putting the current img at the top of the stack
                mainpic[currImg%mainpic.length].style.zIndex = "2";
                leftpic[currImg%mainpic.length].style.zIndex = "2";
                righttop[currImg%mainpic.length].style.zIndex = "2";
                rightmid[currImg%mainpic.length].style.zIndex = "2";
                rightbot[currImg%mainpic.length].style.zIndex = "2";

                // setting the right of the current img back to 0
                mainpic[currImg%mainpic.length].style.right = "0";
                leftpic[currImg%mainpic.length].style.right = "0";
                righttop[currImg%mainpic.length].style.right = "0";
                rightmid[currImg%mainpic.length].style.right = "0";
                rightbot[currImg%mainpic.length].style.right = "0";
                
                // setting the zindex of the last img back to 0 so it is below the current img
                mainpic[currImg+1%mainpic.length].style.zIndex = "0";
                leftpic[currImg+1%mainpic.length].style.zIndex = "0";
                righttop[currImg+1%mainpic.length].style.zIndex = "0";
                rightmid[currImg+1%mainpic.length].style.zIndex = "0";
                rightbot[currImg+1%mainpic.length].style.zIndex = "0";
                
                // moves through the arrays above when clicking the button
                science.innerHTML = scienceArray[currImg%mainpic.length];
                civi.innerHTML = civiArray[currImg%mainpic.length];
                // animalinfo.innerHTML = animalinfoArray[currImg%mainpic.length];
                locationname.innerHTML = locationnameArray[currImg%mainpic.length];
            }
        })
    });


    // *********** Asyncs *********** //

    // Pexels Apikey: 563492ad6f91700001000001b85c341905654b2a900ab901fecb6997
    const API_KEY = "563492ad6f91700001000001b85c341905654b2a900ab901fecb6997";

    // search query for the pexels api
    const imageUrl = "https://api.pexels.com/v1/search?query=";

    // the items that are used for the search qurey
    const penguin = {url:"Emperor%20penguin&per_page=5", animal: "penguin"};
    const orca = {url:"killer%20whale&per_page=5", animal: "orca"};
    const owl = {url:"barn%20owl&per_page=5", animal: "owl"};
    const tiger = {url:"tiger&per_page=5", animal:"tiger"};
    const turtle = {url:"sea%20turtle&per_page=5", animal:"turtle"};
    const shark = {url:"whale%20shark&per_page=5", animal:"shark"};

    // an array for the search quries 
    let queries = [penguin, orca, owl, tiger, turtle, shark];
    // an array for each of the selectors
    let selectors = [gura, dolph, barn, tigger, seaturt, pen];
        
    queries.forEach((e,index) => {
        (async () => {
            // gets all the imgs via the search quries
            let res = await fetch(imageUrl + e.url, {
                headers: {
                    Authorization: API_KEY
                }
            });

            let data = await res.json();
            // a vairable that grabs the current index of the selector array
            let currSelectors = selectors[index];

            // inputs each photo into the imgs to display
            data.photos.forEach((photo,index2) => {
                currSelectors[index2].src = photo.src.medium;
            });

        })();
    });

    // async for the random images in the 2nd section and the 5th section 
    (async() => {
        // is 6 per page as there is 6 imgs in the 2nd section
        let response = await fetch(imageUrl + "wildlife&per_page=6", {
            headers: {
                Authorization: API_KEY
            }
        });
        
        let data = await response.json();
        
        let imgurl = data.photos;

        // places all the imgs into the second section
        imgsec2.forEach((e,i) => {
            e.src = imgurl[i].src.small;
        })

        // grabs imgs for the last section
        gallery.forEach((e,i) => {
            e.src = imgurl[i].src.medium;
        });
        
    })();


    // *********** animation *********** //

    // is for controlling the circumstances of the interesection observer
    const settings = {
        root: null,
        threshold: 0, 
        rootMargin: "-345px"
    };

    // makes a new intersection observer and creates a callback function and a target to observe
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // is checking if the target has reach the intersection
            if (entry.isIntersecting) {
                // adds a class that allows for animations to happen
                entry.target.classList.add("fadeInDown")
                observer.unobserve(entry.target);
            }
        })
    }, settings)
    
    const leftSettings = {
        root: null,
        threshold: 1, 
        rootMargin: "-345px"
    }
    // makes the random gallery come from the left
    const left = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("moveLeft")
                observer.unobserve(entry.target);
            }
        })
    }, leftSettings)

    // checks for when each section hits the observer
    sections.forEach(sec3 => {
        io.observe(sec3);
    });

    gallery.forEach(img => {
        left.observe(img);
    })

    // animation for the header menu
    normMenu.forEach((e) => {
        e.innerHTML = e.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        e.addEventListener("mouseover", (evt) => {
            
            let target = evt.target.matches(".normalMenu") ? evt.target : evt.target.parentElement;

            anime.timeline()
            .add({
                targets: `#${target.id} .letter`,
                translateY: [0,-9],
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 400,
                delay: (el, i) => 10 + 30 * i
            }).add({
            targets: `#${target.id} .letter`,
            translateY: [20,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 300,
            delay: (el, i) => 30 + 30 * i,
            opacity: 1,
            translateY: [0,0]
            });
        });

    })
    
    // var splide = new Splide( '.sec-3' );
    // splide.mount();

    // import Glide from '@glidejs/glide'
    // new Glide('.sec-3').mount();

    // Instantiate `CircleType` with an HTML element.
    // changes the text to circle for the button in the hero section
    const circleType = new CircleType(document.querySelector('.play-button'));
    // changes the text in the footer section to a circle
    let circletext = new CircleType(document.querySelector(".circle"));

    // Set the text radius and direction. Note: setter methods are chainable.
    circletext.radius(100);
    circleType.radius().dir(-1);

    
})