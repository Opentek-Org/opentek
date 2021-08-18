
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
htmlc += `<option>This month is ${n}. Check if any event is happening!!</option>`;
for (let index = 0; index < months.length; index++) {
  htmlc += `<option value="${index}">${months[index]}</option>`;
}

htmlc += "</select>";
$("#selectoption").append(htmlc);

let data = [
  {
    monthId: "0",
    Data: [
      {
        event: "1",
        details: {
          eventName: "JIIT Open-Source Developers Circle",
          eventDate: "22/01/2020",
          eventDesc:
            "JIIT Month of Code is an online programme by the open-source club of Jaypee Institute of Information Technology, JIIT Noida-128, the JODC, focused on introducing students to open source software development and documentation writing.",
          eventurl: "https://jiitodc.netlify.app/events",
          eventImg: "../images/events/jodo.png",
        },
      },
      {
        event: "2",
        details: {
          eventName:
            "International Conference on Open Source Software and New Perspectives ICOSSNP",
          eventDate: "11/01/2022 - 12/01/2022",
          eventDesc:
            "ICOSSNP aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Open Source Software and New Perspectives.",
          eventurl:
            "https://waset.org/open-source-software-and-new-perspectives-conference-in-january-2022-in-singapore",
          eventImg: "../images/events/icossnp.png",
        },
      },
    ],
  },
  {
    monthId: "1",
    Data: [
      {
        event: "1",
        details: {
          eventName: "FOSDEM",
          eventDate: "06/02/2021 - 07/02/2021",
          eventDesc:
            "FOSDEM is a free event for software developers to meet, share ideas and collaborate. Every year, thousands of developers of free and open source software from all over the world gather at the event in Brussels. In 2021, they will gather online.",
          eventurl: "https://fosdem.org/2021/",
          eventImg: "../images/events/fosdem.png",
        },
      },
    ],
  },
  {
    monthId: "2",
    Data: [
      {
        event: "1",
        details: {
          eventName: "FOSSASIA Virtual Summit 2021",
          eventDate: "13/03/2021 - 21/03/2021",
          eventDesc:
            "The FOSSASIA Summit is a unique event with a broad range of open technology topics such as web and mobile technologies, Javascript, Python, cloud services, artificial intelligence, Open Hardware and production, privacy, security, digital sovereignty, Blockchain, DevOps, databases, kernel and platform, Open Source licences and compliance, open health tech and Covid-19, Open Science, Open Source culture and circular economy.",
          eventurl: "https://eventyay.com/e/fa96ae2c",
          eventImg: "../images/events/fossasia.png",
        },
      },
    ],
  },
  {
    monthId: "3",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Eventsddddd Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
  {
    monthId: "4",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Eventsddddd Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
  {
    monthId: "5",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Eventsddddd Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
  {
    monthId: "6",
    Data: [
      {
        event: "1",
        details: {
          eventName: "EventAug Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
  {
    monthId: "7",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Eventsddddd Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
  {
    monthId: "8",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Eventsddddd Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
  {
    monthId: "9",
    Data: [
      {
        event: "1",
        details: {
          eventName: "DrupalCon",
          eventDate: "04/10/2021 - 07/10/2021",
          eventDesc:
            "DrupalCon unites experts from around the globe who create ambitious digital experiences.Network, learn, and be inspired.",
          eventurl: "https://events.drupal.org/",
          eventImg: "../images/events/drupalcon.png",
        },
      },
    ],
  },
  {
    monthId: "10",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Eventsddddd Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
  {
    monthId: "11",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Eventsddddd Name",
          eventDate: "",
          eventDesc: "",
          eventurl: "",
          eventImg: "",
        },
      },
    ],
  },
];

let valu;
$(function () {
  $("#type").change(function () {
    valu = $(this).val();
    // console.log(valu);
    let index = valu;
    $("#rowdy").empty();
    $("#error").empty();
    if (valu < data.length && data[index].Data.length > 0) {
      for (let i = 0; i < data[index].Data.length; i++) {
        try {
          // console.log(data);
          var html = '<div class="row">';
          for (i = 0; i < data[index].Data.length; i++) {
            if (i % 3 == 0 && i != 0) {
              html += "</div>";
              html += '<div class="row">';
            }

            html += `<div class="col-lg-9 col-12 m-auto">
                    
                            <div class="over-item txt-right unique-style3">
                                  <div class="row">
                                      <div class="col-md-8 col-12">
                                      <div class="break"></div>
                                      <h3 class="text-left" >${data[index].Data[i].details.eventName}</h3>
                                      <h6 class="text-left text-light" >${data[index].Data[i].details.eventDate}</h6></br>
                                      <p class="text-left">${data[index].Data[i].details.eventDesc}</p>
                                      <div class="over-btn text-left">
                                          <a href="${data[index].Data[i].details.eventurl}">Read More</a>
                                      </div>
                                      </div>
                                      <div class="col-md-4 col-12">
                                      <img src="${data[index].Data[i].details.eventImg}" height="200px" alt="" srcset=""></div>
                                  </div>
                                
                                
                            </div></div>`;
          }

          $("#rowdy").append(html);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      var htmlz = `<div class= "container">`;
      htmlz += `<p class="text-light text-center">No data found please select another month</p>`;
      htmlz += `</div>`;
      $("#error").append(htmlz);
    }
    //   for (let index = 0; index < data.length; index++) {
    //     console.log("monthid" +data[index].monthId);
    //     console.log("index"+index);
    //     if(data[index].monthId==valu){
    //         console.log("true");
    //         console.log(data[0].Data.length);
    //        for (let i = 0; i < data[index].Data.length; i++) {
    //         try {
    //             // console.log(data);
    //             var html = '<div class="row">';
    //             for (i = 0; i < data[index].Data.length; i++) {

    //               if (i % 3 == 0 && i != 0) {
    //                 html += "</div>";
    //                 html += '<div class="row">';
    //               }

    //               html += `<div class="col-lg-9 col-12 m-auto">

    //                         <div class="over-item txt-right unique-style3">
    //                               <div class="row">
    //                                   <div class="col-md-8 col-12">
    //                                   <div class="break"></div>
    //                                   <h3 class="text-left" >${data[index].Data[i].details.eventName}</h3>
    //                                   <h6 class="text-left text-light" >${data[index].Data[i].details.eventDate}</h6></br>
    //                                   <p class="text-left">${data[index].Data[i].details.eventDesc}</p>
    //                                   <div class="over-btn text-left">
    //                                       <a href="${data[index].Data[i].details.eventurl}">Read More</a>
    //                                   </div>
    //                                   </div>
    //                                   <div class="col-md-4 col-12">
    //                                   <img src="${data[index].Data[i].details.eventImg}" height="200px" alt="" srcset=""></div>
    //                               </div>

    //                         </div></div>`;
    //             }

    //             $("#rowdy").append(html);
    //           } catch (error) {
    //             console.log(error);
    //           }
    //         }

    //     }else{
    //       console.log("index"+index);
    //       console.log("month"+data[index].monthId);
    //         var htmlz=`<div class= "container">` ;
    //         htmlz += `<p class="text-light">No data found please select another month</p>`;
    //         htmlz +=`</div>`;
    //         $("#error").append(htmlz);
    //     }
    // }
  });
});
