let domain = ["WEBDEV", "ML", "RESTAPI","DSA","NODEJS"];

let htmlc = `<select class="custom-select mr-sm-2 " id="type">`;
htmlc += `<option value="Choose your Domain" disabled selected>Choose your Domain</option>`;
for (let index = 0; index < domain.length; index++) {
  htmlc += `<option value="${index}">${domain[index]}</option>`;
}

htmlc += "</select>";
$("#selectoption").append(htmlc);


let data = [
    {
        domainId:"0",
        domainName:"WEBDEV",
        Data:[
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
        ]
    },
    {
        domainId:"1",
        Data:[
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
        ]
    },
    {
        domainId:"2",
        Data:[
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
            {
                langId:"0",
                langTitle:["HTML","CSS","JS"],
                langImg:"https://picsum.photos/500/300/?image=5",
                langName:"projectname",
                langDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                langLevel:"basic",
                langurl:"#",
                langAdmin:"Nishi"
            },
        ]
    }
];

let valu;
$(function () {
  $("#type").change(function () {
    valu = $(this).val();
    console.log(valu);
    let index = valu;
    $("#program").empty();
    $("#error").empty();
    if (valu < data.length && valu<data[index].Data.length) {
      for (let i = 0; i < data[index].Data.length; i++) {
        try {
          // console.log(data);
          var html = '';
          for (i = 0; i < data[index].Data.length; i++) {

            html += `
                <li class="cards_item">
                <div class="card">
                    <div class="card_image"><img src="${data[index].Data[i].langImg}"></div>
                    <div class="card_content">
                    <p class="card_title">${data[index].Data[i].langName}<span class="card_title text-light text-right">(${data[index].Data[i].langLevel})</span></p>
                    <span class="cardtitle">ProjectAdmin-${data[index].Data[i].langAdmin}</span>
                    <h6 class="card_title">${data[index].Data[i].langTitle}</h6>
                    <p class="card_text">${data[index].Data[i].langDesc}</p>
                    <button class="btn card_btn" onclick="window.location.href='${data[index].Data[i].langurl}'">Repo Url</button>
                    </div>
                </div>
                </li>
        
                `;
          }
          $("#program").append(html);
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
