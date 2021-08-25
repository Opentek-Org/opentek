let domain = ["Web Development", "Machine Learning", "API", "DSA", "NODEJS", "App Development"];

let htmlc = `<select class="custom-select mr-sm-2 " id="type">`;
htmlc += `<option value="Choose your Domain" disabled selected>Choose your Domain</option>`;
for (let index = 0; index < domain.length; index++) {
  htmlc += `<option value="${index}">${domain[index]}</option>`;
}

htmlc += "</select>";
$("#selectoption").append(htmlc);

let data = [
  {
    domainId: "0",
    // domainName: "Web Development",
    Data: [
      {
        langId: "0",
        langTitle: ["HTML", "SCSS", "JS"],
        // langImg: "../images/projects/doc2pen.gif",
        langName: "Doc2Pen",
        langDesc:
          "Doc2Pen is the 1 stop shop for getting all your handmade assignments ready for submission digitally. <br/>Check it out and contribute!",
        // langLevel: "basic",
        langurl: "https://github.com/smaranjitghose/doc2pen",
        langAdmin: "Smaranjit Ghose",
      },
      {
        langId: "1",
        langTitle: ["HTML", "CSS", "JS"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Awesome Portfolio Website",
        langDesc:
          "A community maintained open source project aimed at making personal portfolio for researchers, developers and analysts simple, fast and less cumbersome.",
        // langLevel: "basic",
        langurl: "https://github.com/smaranjitghose/awesome-portfolio-websites",
        langAdmin: "Smaranjit Ghose",
      },
      {
        langId: "2",
        langTitle: ["JavaScript"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Manthan",
        langDesc:
          "We provide an online testing platform that can be used to conduct tests that are wrapped with all the necessary precautions to reduce the chances of cheating.",
        // langLevel: "basic",
        langurl: "https://github.com/Manthan933/Manthan",
        langAdmin: "Manthan",
      },
    ],
  },
  {
    domainId: "1",
    // domainName: "ML",
    Data: [
      {
        langId: "0",
        langTitle: ["Python"],
        // langImg: "../images/projects/jina.gif",
        langName: "Jina",
        langDesc: "Cloud-native neural search framework for 𝙖𝙣𝙮 kind of data",
        // langLevel: "basic",
        langurl: "https://github.com/jina-ai/jina",
        langAdmin: "Jina AI",
      },
      {
        langId: "1",
        langTitle: ["Jupyter Notebook"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "FACE-X",
        langDesc:
          "Demonstration of different algorithms and operations on faces.",
        // langLevel: "basic",
        langurl: "https://github.com/akshitagupta15june/Face-X",
        langAdmin: "AKSHITA GUPTA",
      },
      {
        langId: "2",
        langTitle: ["Python", "Flask", "Numpy"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Breast-Cancer-Predictor",
        langDesc: "A Flask based web application to predict breast cancer.",
        // langLevel: "basic",
        langurl:
          "https://github.com/srimani-programmer/Breast-Cancer-Predictor",
        langAdmin: "Srimani",
      },
    ],
  },
  {
    domainId: "2",
    // domainName: "API",
    Data: [
      {
        langId: "0",
        langTitle: ["DS", "Algorithms"],
        // langImg: "../images/projects/jina.gif",
        langName: "NeoAlgo",
        langDesc:
          "Bringing all Data Structures and Algorithms under one Roof ⚡",
        // langLevel: "basic",
        langurl: "https://github.com/TesseractCoding/NeoAlgo",
        langAdmin: "Tesseract Coding",
      },
      {
        langId: "1",
        langTitle: ["Jupyter Notebook"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "FACE-X",
        langDesc:
          "Demonstration of different algorithms and operations on faces.",
        // langLevel: "basic",
        langurl: "https://github.com/akshitagupta15june/Face-X",
        langAdmin: "AKSHITA GUPTA",
      },
      {
        langId: "2",
        langTitle: ["Python", "Flask", "Numpy"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Breast-Cancer-Predictor",
        langDesc: "A Flask based web application to predict breast cancer.",
        // langLevel: "basic",
        langurl:
          "https://github.com/srimani-programmer/Breast-Cancer-Predictor",
        langAdmin: "Srimani",
      },
    ],
  },
  {
    domainId: "3",
    Data: [
      {
        langId: "0",
        langTitle: ["DS", "Algorithms"],
        // langImg: "../images/projects/jina.gif",
        langName: "NeoAlgo",
        langDesc:
          "Bringing all Data Structures and Algorithms under one Roof ⚡",
        // langLevel: "basic",
        langurl: "https://github.com/TesseractCoding/NeoAlgo",
        langAdmin: "Tesseract Coding",
      },
      {
        langId: "1",
        langTitle: ["HTML", "CSS", "JS"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Awesome Portfolio Website",
        langDesc:
          "A community maintained open source project aimed at making personal portfolio for researchers, developers and analysts simple, fast and less cumbersome.",
        // langLevel: "basic",
        langurl: "https://github.com/smaranjitghose/awesome-portfolio-websites",
        langAdmin: "Smaranjit Ghose",
      },
      {
        langId: "2",
        langTitle: ["JavaScript"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Manthan",
        langDesc:
          "We provide an online testing platform that can be used to conduct tests that are wrapped with all the necessary precautions to reduce the chances of cheating.",
        // langLevel: "basic",
        langurl: "https://github.com/Manthan933/Manthan",
        langAdmin: "Manthan",
      },
    ],
  },
  {
    domainId: "4",
    Data: [
      {
        langId: "0",
        langTitle: ["JavaScript"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Manthan",
        langDesc:
          "We provide an online testing platform that can be used to conduct tests that are wrapped with all the necessary precautions to reduce the chances of cheating.",
        // langLevel: "basic",
        langurl: "https://github.com/Manthan933/Manthan",
        langAdmin: "Manthan",
      },
    ],
  },
  {
    domainId: "5",
    Data: [
      {
        langId: "0",
        langTitle: ["Dart"],
        // langImg: "https://picsum.photos/500/300/?image=5",
        langName: "Simulate",
        langDesc:
          "A collection of simulations and visualizations for all sorts of stuff (Majorly Algorithmic or Mathematical)",
        // langLevel: "basic",
        langurl: "https://github.com/cod-ed/simulate",
        langAdmin: "cod-ed",
      },
    ],
  },
];

let valu;
$(function () {
  $("#type").change(function () {
    valu = $(this).val();
    console.log(valu);
    let index = valu;
    $("#project").empty();
    $("#error").empty();
    console.log(data[index].Data.length);
    if (valu < data.length && data[index].Data.length>0) {
      for (let i = 0; i < data[index].Data.length; i++) {
        try {
          console.log(data);
          var html = "";
          for (i = 0; i < data[index].Data.length; i++) {
            html += `
                <li class="cards_item">
                <div class="card">
                    <div class="card_content">
                    <p class="card_title">${data[index].Data[i].langName}</p>
                    <span class="cardtitle">Project Admin-${data[index].Data[i].langAdmin}</span>
                    <h6 class="card_title">Tech Stack- ${data[index].Data[i].langTitle}</h6>
                    <p class="card_text">${data[index].Data[i].langDesc}</p>
                    <button class="btn card_btn" onclick="window.location.href='${data[index].Data[i].langurl}'"target="blank">Repo Url</button>
                    </div>
                </div>
                </li>
        
                `;
          }
          $("#project").append(html);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      var htmlz = `<div class= "container unique-style3  mb-5 pb-5">`;
      htmlz += `<p class="text-light text-center text-no-data">No data found please select another month</p>`;
      htmlz += `</div>`;
      $("#error").append(htmlz);
    }
  });
});
