let domain = ["Web Development", "Machine Learning", "API", "DSA", "NODEJS", "App Development"];

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
    if (valu < data.length && data[index].Data.length>0) {
      for (let i = 0; i < data[index].Data.length; i++) {
        try {
          console.log(data);
          var html = "";
          for (i = 0; i < data[index].Data.length; i++) {
            html += `
            <li class="custom-card-item col-12 col-lg-4 m-auto">
                    <div class="custom-card text-white d-flex flex-column justify-content-between position-relative">
                        <div class="mb-3">
                            <p class="custom-card-title text-capitalize fs-3 mb-2">${data[index].Data[i].langName}</p>
                            <p class="custom-card-description">${data[index].Data[i].langDesc}</p>
                        </div>
                        <div class="mb-3">
                            <p class="headline text-capitalize">project admin :</p>
                            <p class="subtitle text-capitalize">${data[index].Data[i].langAdmin}</p>
                        </div>
                        <div>
                            <p class="headline text-capitalize">tech stack :</p>
                            <ul>
                                <li class="text-uppercase lh-base">${data[index].Data[i].langTitle}</li>
                            </ul>
                        </div>
                        <a href="${data[index].Data[i].langurl}" target="_blank" class="text-decoration-none"><button class="custom-card-link position-absolute rounded-circle p-2 border-0 d-flex align-items-center justify-content-center"><i class="fa fa-external-link-square-alt fs-4"></i></button></a>
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
  })