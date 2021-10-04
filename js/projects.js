let domain = [
  "Web Development",
  "Machine Learning",
  "API",
  "DSA",
  "NODEJS",
  "App Development",
];

let htmlc = `<select class="custom-select mr-sm-2 " id="type">`;
htmlc += `<option value="Choose your Domain" disabled selected>Choose your Domain</option>`;
for (let index = 0; index < domain.length; index++) {
  htmlc += `<option value="${index}">${domain[index]}</option>`;
}

htmlc += "</select>";
$("#selectoption").append(htmlc);
fetch("../data/projects.json")
  .then((data) => data.json())
  .then((data) => {
    let valu;
    $(function () {
      $("#type").change(function () {
        valu = $(this).val();
        console.log(valu);
        let index = valu;
        $("#project").empty();
        $("#error").empty();
        console.log(data[index].Data.length);
        if (valu < data.length && data[index].Data.length > 0) {
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
          htmlz += `<p class="text-light text-center text-no-data">No data found.Please select another month.</p>`;
          htmlz += `</div>`;
          $("#error").append(htmlz);
        }
      });
    });
  });
