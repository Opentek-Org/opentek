// Coupling different roadmaps with their image paths
const roadmapImage = {
    frontendDev: "../images/roadmaps/frontenddev.jpg",
    MERNStackDev: "../images/roadmaps/MERNStackDev.jpg",
    Datascience:  "../images/roadmaps/DataScience.jpg",
    backendDev :"../images/roadmaps/Backend.jpg"
}

// Function to add cards in the roadmap page
function loadData(data) {
    let html =  "";
    
    // Generates Cards
    for (let i = 0; i < data.length; i++) {
       html +=  `
       <li class="cards_item">
       <div id ="${data[i].id}" class="raodmap-card">
           <div>
           <img src= "${roadmapImage[data[i].roadmap]}"/>
           </div>
           <div class="card_content">
           <p class="card_title">${data[i].title}</p>
           <p class="card_text" id=card_text${i}>${data[i].description.slice(0, 190)}
           <span id=read${i} class="read"></span>
           </p>
           </div>
           <button class="btn btnhover btn-outline-light" onclick='getRoadMap("${data[i].roadmap}", "${data[i].title}")'>View Road Map</button>
       </div>
       </li>
   `     
    }

    // Insert Roadmap Card Html
   $("#roadmapslist").html(html);

//    Read More , Read less functionality
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].description.length)
       if(data[i].description.length > 190){
         $(`#read${i}`).text("...Read More");
         $(`#read${i}`).click(()=>{
            const card = $(`#card_text${i}`);
            card.html(`
            ${data[i].description} 
           <span id=less${i} class="read">Read Less</span>
            `)
            card.css("overflow-y", "scroll")

            const readless = $(`#less${i}`);
            readless.click(()=>{
            const card = $(`#card_text${i}`);
            card.html(`
            ${data[i].description.slice(0, 190)} 
           <span id=read${i} class="read">Read More</span>
            `)
            card.css("overflow-y", "hidden")
            })
         })
       }  
    }
  
  }
  
//   Roadmap content data fetching
  fetch("../data/roadmaps.json")
    .then((data) => data.json())
    .then((data) => {
     loadData(data)
    });

const roadmap = $("#roadmap");

// Function to display roadmap image container
function getRoadMap(name, head){
    roadmap.css("display", "block");
    $("body").css("height", "100vh");
    $("#roadimg").html(`<div><h1>${head} <br/>RoadMap </h1><img id="roadmapImage" src="${roadmapImage[name]}" alt="roadmap_img"/></div>`)
}

// Function to close roadmap image container
function closeRoadMap(){
    roadmap.css("display", "none");
    $("body").css("height", "auto")
}
  
// Function to download roadmap iamge
function downloadRoadMap(){
   const image = $("#roadmapImage").attr("src").slice(2);
   const url = "http://127.0.0.1:5501/"+image;
   const fileName = image.substring(image.lastIndexOf("/")+1);
  

   fetch(url)
    .then(response => response.blob())
    .then(blob => {
      // Create a temporary anchor element
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = fileName || 'image.jpg';

      // Trigger a click event on the anchor element
      downloadLink.click();

      // Clean up the temporary anchor and blob object
      URL.revokeObjectURL(downloadLink.href);
      downloadLink.remove();
    })
    .catch(error => {
      console.error('Error downloading the image:', error);
    });

}
