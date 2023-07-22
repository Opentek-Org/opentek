const roadmapImage = {
    frontendDev: "../images/roadmaps/frontenddev.jpg",
    MERNStackDev: "../images/roadmaps/MERNStackDev.jpg"
}

function loadData(data) {
    let html =  "";
    
    for (let i = 0; i < data.length; i++) {
       html +=  `
       <li class="cards_item">
       <div id ="${data[i].id}" class="raodmap-card">
           <div>
           <img src= "${roadmapImage[data[i].roadmap]}"/>
           </div>
           <div class="card_content">
           <p class="card_title">${data[i].title}</p>
           <p class="card_text">${data[i].description}</p>
           </div>
           <button class="btn btn-sm btn-outline-light" onclick='getRoadMap("${data[i].roadmap}", "${data[i].title}")'>View Road Map</button>
       </div>
       </li>
   `     
    }
   
   $("#roadmapslist").html(html);
  
  }
  
  fetch("../data/roadmaps.json")
    .then((data) => data.json())
    .then((data) => {
     loadData(data)
    });

const roadmap = $("#roadmap");

function getRoadMap(name, head){
    roadmap.css("display", "block");
    $("body").css("height", "100vh");
    $("#roadimg").html(`<div><h1>${head} <br/>RoadMap </h1><img src="${roadmapImage[name]}" alt="roadmap_img"/></div>`)
}

function closeRoadMap(){
    roadmap.css("display", "none");
    $("body").css("height", "auto")
}
  