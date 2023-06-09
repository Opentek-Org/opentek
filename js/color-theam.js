let settingel=document.querySelector(".setting");

function translatex(){
    let theamdiv=document.querySelector(".theam-div")
   theamdiv.classList.toggle("open")
}

let r = document.querySelector(':root');

function redtoggle(){
    r.style.setProperty('--main-color', '#00C4FF');

}
// function orangetoggle(){
//     r.style.setProperty('--main-color', '#fa5b0f');

// }
function greentoggle(){
    r.style.setProperty('--main-color', '#127C56');

}
function pinktoggle(){
    r.style.setProperty('--main-color', '#FF55BB');

}
function bluetoggle(){
    r.style.setProperty('--main-color', '#aa80ff');

}