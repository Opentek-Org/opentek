let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var d = new Date();
var n = months[d.getMonth()];

let htmlc = `<select class="custom-select mr-sm-2 " id="type">`;
htmlc += `<option value="This month is ${n}. Check if any program is happening!!" disabled selected>This month is ${n}. Check if any program is happening!!</option>`;
for (let index = 0; index < months.length; index++) {
  htmlc += `<option value="${index}">${months[index]}</option>`;
}

htmlc += "</select>";
$("#selectoption").append(htmlc);

fetch("../data/program.json")
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
    let valu;
    $(function () {
      $("#type").change(function () {
        valu = $(this).val();
        // console.log(valu);
        let index = valu;
        $("#program").empty();
        $("#error").empty();
        if (valu < res.length && res[index].Data.length > 0) {
          for (let i = 0; i < res[index].Data.length; i++) {
            try {
              // console.log(data);
              var html = '<div class="row">';
              for (i = 0; i < res[index].Data.length; i++) {
                if (i % 3 == 0 && i != 0) {
                  html += "</div>";
                  html += '<div class="row">';
                }

                html += `<div class="col-lg-9 col-12 m-auto">
                        
                                <div class="over-item txt-right unique-style3 rounded-3">
                                      <div class="row">
                                          <div class="col-md-8 col-12 ">
                                          <div class="break"></div>
                                          <h3 class="text-left" >${res[index].Data[i].details.eventName}</h3>
                                          <h6 class="text-left text-light" >${res[index].Data[i].details.eventDate}</h6></br>
                                          <p class="text-left">${res[index].Data[i].details.eventDesc}</p>
                                          <div class="over-btn text-left">
                                              <a href ="${res[index].Data[i].details.eventurl}" target="blank">Website</a>
                                          </div>
                                          </div>
                                          <div class="col-md-4 col-12">
                                          <img src="${res[index].Data[i].details.eventImg}" height="200px" alt="" srcset=""></div>
                                      </div>
                                    
                                    
                                </div></div>`;
              }

              $("#program").append(html);
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
