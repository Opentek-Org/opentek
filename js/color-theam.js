let settingel=document.querySelector(".setting");

function translatex(){
    let theamdiv=document.querySelector(".theam-div")
   theamdiv.classList.toggle("open")
}

let r = document.querySelector(':root');

function changeColor(){
    if((localStorage.getItem("mode"))=="red"){

            r.style.setProperty('--main-color', '#00C4FF');
    }
   
    else if((localStorage.getItem("mode"))=="green"){

            
            r.style.setProperty('--main-color', '#127C56');

    }
    else if((localStorage.getItem("mode"))=="pink"){

            

            r.style.setProperty('--main-color', '#FF55BB');
    }
    else if(localStorage.getItem("mode")=="blue"){

            
            
            r.style.setProperty('--main-color', '#aa80ff');
    }

}

function redtoggle(){
    localStorage.setItem("mode","red")
    r.style.setProperty('--main-color', '#00C4FF');
    
    }
   
    function greentoggle(){
            localStorage.setItem("mode","green")
            r.style.setProperty('--main-color', '#127C56');
    
    
    }
    function pinktoggle(){
            localStorage.setItem("mode","pink")
            r.style.setProperty('--main-color', '#FF55BB');
    
    }
    function bluetoggle(){
            localStorage.setItem("mode","blue")
            r.style.setProperty('--main-color', '#aa80ff');
    
    }

    changeColor()