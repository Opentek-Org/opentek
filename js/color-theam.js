let settingel=document.querySelector(".setting");

function translatex(){
    let theamdiv=document.querySelector(".theam-div")
   theamdiv.classList.toggle("open")
}

let r = document.querySelector(':root');

function changeColor(){
    if((localStorage.getItem("mode"))=="red"){

            r.style.setProperty('--main-color', '#FC2947');
    }
   
    else if((localStorage.getItem("mode"))=="green"){

            
            r.style.setProperty('--main-color', '#127C56');

    }
    else if((localStorage.getItem("mode"))=="pink"){

            

            r.style.setProperty('--main-color', '#FF55BB');
    }
    else if(localStorage.getItem("mode")=="blue"){

            
            
            r.style.setProperty('--main-color', '#00ADB5');
    }

}

function redtoggle(){
    localStorage.setItem("mode","red")
    r.style.setProperty('--main-color', '#FC2947');
    
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
            r.style.setProperty('--main-color', '#00ADB5');
    
    }