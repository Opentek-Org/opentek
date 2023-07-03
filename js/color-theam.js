let settingel=document.querySelector(".setting");

function translatex(){
    let theamdiv=document.querySelector(".theam-div")
   theamdiv.classList.toggle("open")
}

let r = document.querySelector(':root');

function changeColor(){
    if((localStorage.getItem("mode"))=="lightblue"){
        r.style.setProperty('--clr-back-light', '#A0F1FF');
        r.style.setProperty('--clr-back-dark', '#4DD8FF');
        r.style.setProperty('--main-color', '#00C4FF');
    }
   
    else if((localStorage.getItem("mode"))=="green"){
        r.style.setProperty('--clr-back-light', '#C0EBDB');
        r.style.setProperty('--clr-back-dark', '#42B98B');    
        r.style.setProperty('--main-color', '#127C56');

    }
    else if((localStorage.getItem("mode"))=="pink"){
        r.style.setProperty('--clr-back-light', '#FFBAE4');
        r.style.setProperty('--clr-back-dark', '#FF87D1');        
        r.style.setProperty('--main-color', '#FF55BB');
    }
    else if(localStorage.getItem("mode")=="blue"){
        r.style.setProperty('--clr-back-light', '#E1C1F3');
        r.style.setProperty('--clr-back-dark', '#D59CF7');
        r.style.setProperty('--main-color', '#aa80ff');
    }

}

function lightbluetoggle(){
    localStorage.setItem("mode","lightblue")
    r.style.setProperty('--clr-back-light', '#A0F1FF');
    r.style.setProperty('--clr-back-dark', '#4DD8FF');
    r.style.setProperty('--main-color', '#00C4FF');

    }
   
    function greentoggle(){
            localStorage.setItem("mode","green")
            r.style.setProperty('--clr-back-light', '#C0EBDB');
            r.style.setProperty('--clr-back-dark', '#42B98B');  
            r.style.setProperty('--main-color', '#127C56');
    
    
    }
    function pinktoggle(){
            localStorage.setItem("mode","pink")
            r.style.setProperty('--clr-back-light', '#FFBAE4');
            r.style.setProperty('--clr-back-dark', '#FF87D1');  
            r.style.setProperty('--main-color', '#FF55BB');
    
    }
    function bluetoggle(){
            localStorage.setItem("mode","blue")
            r.style.setProperty('--clr-back-light', '#E1C1F3');
            r.style.setProperty('--clr-back-dark', '#D59CF7');
            r.style.setProperty('--main-color', '#aa80ff');
    
    }

    changeColor()