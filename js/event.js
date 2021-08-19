
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
          eventName: "GUADEC",
          eventDate: "21-07-2021 - 25/07/2021",
          eventDesc:
            "GUADEC is the GNOME community’s largest conference, bringing together hundreds of users, contributors, community members, and enthusiastic supporters together for a week of talks and workshops.",
          eventurl: "https://events.gnome.org/event/9/",
          eventImg: "../images/events/guadec.png",
        },
      },
      {
        event: "2",
        details: {
          eventName: "BOSC",
          eventDate: "29-07-2021 - 31/07/2021",
          eventDesc:
            "The Bioinformatics Open Source Conference promotes and facilitates the open source development of bioinformatics tools and open science.",
          eventurl: "https://www.open-bio.org/events/bosc-2021/about/",
          eventImg: "../images/events/bosc.png",
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
          eventName: "Wikimania ",
          eventDate: "13/08/2021 - 17/08/2021",
          eventDesc:
            "Wikimania is the Wikimedia movement’s annual conference celebrating the free knowledge projects made possible by the volunteer community and hosted by the Wikimedia Foundation",
          eventurl: "https://wikimania.wikimedia.org/wiki/About",
          eventImg: "../images/events/wikimania.png",
        },
      },
      {
        event: "2",
        details: {
          eventName: "GitLab Commit Virtual",
          eventDate: "03/08/2021 - 04/08/2021",
          eventDesc:
            "During this two-day conference, attendees will learn how they can instill modern DevOps practices at their organizations.",
          eventurl: "https://gitlabcommitvirtual2021.com/",
          eventImg: "../images/events/gitlab.png",
        },
      },
      {
        event: "3",
        details: {
          eventName: "ApacheCon Asia",
          eventDate: "06/08/2021 - 09/08/2021",
          eventDesc:
            "Join us from the comfort of your own home for three days of Apache project content across dozens of categories, from Big Data to Search to Web Frameworks and more.",
          eventurl: "https://hopin.com/events/apachecon-asia-2021",
          eventImg: "../images/events/apache.png",
        },
      },
      {
        event: "4",
        details: {
          eventName: "DebConf21",
          eventDate: "06/08/2021 - 09/08/2021",
          eventDesc:
            "DebConf is the Debian Project's developer conference. In addition to a full schedule of technical, social and policy talks, DebConf provides an opportunity for developers, contributors and other interested people to meet in person and work together more closely.",
          eventurl: "https://debconf21.debconf.org/",
          eventImg: "../images/events/debcon.png",
        },
      },
      {
        event: "5",
        details: {
          eventName: "BornHack",
          eventDate: "19/08/2021 - 26/08/2021",
          eventDesc:
            "BornHack is a 7 day outdoor tent camp where hackers, makers and people with an interest in technology or security come together to celebrate technology, socialise, learn and have fun.",
          eventurl: "https://bornhack.dk/bornhack-2021/",
          eventImg: "../images/events/bornhack.png",
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
          eventName: "Open Source Summit",
          eventDate: "27/09/2021 - 30/09/2021",
          eventDesc:
            "Open Source Summit connects the open source ecosystem under one roof. It’s a unique environment for cross-collaboration between developers, sysadmins, devops, architects and others who are driving technology forward.",
          eventurl:
            "https://events.linuxfoundation.org/open-source-summit-north-america/",
          eventImg: "../images/events/oss.png",
        },
      },
      {
        event: "2",
        details: {
          eventName: "Linux Security Summit",
          eventDate: "29/09/2021 - 01/10/2021",
          eventDesc:
            "Open Source Summit connects the open source ecosystem under one roof. It’s a unique environment for cross-collaboration between developers, sysadmins, devops, architects and others who are driving technology forward.",
          eventurl:
            "https://events.linuxfoundation.org/linux-security-summit-north-america/",
          eventImg: "../images/events/lss.png",
        },
      },
      {
        event: "3",
        details: {
          eventName: "PyCon India",
          eventDate: "17/09/2021 - 20/09/2021",
          eventDesc:
            "PyCon India is the largest annual gathering of Python aficionados and experts in India where Pythonistas come from around the world to celebrate their use of Python, and share their knowledge and experience.",
          eventurl: "https://in.pycon.org/2021/#tickets",
          eventImg: "../images/events/pycon.png",
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
          eventName: "Open Source India (OSI)",
          eventDate: "07/10/2021 - 08/10/2021",
          eventDesc:
            "Open Source India (OSI) is an attempt by the team at Open Source For You magazine in partnership with India’s Open Source community and industry—to bring various stake-holders under one roof.",
          eventurl: "https://www.opensourceindia.in/",
          eventImg: "../images/events/osi.png",
        },
      },
      {
        event: "2",
        details: {
          eventName: "DrupalCon",
          eventDate: "04/10/2021 - 07/10/2021",
          eventDesc:
            "DrupalCon unites experts from around the globe who create ambitious digital experiences.Network, learn, and be inspired.",
          eventurl: "https://events.drupal.org/",
          eventImg: "../images/events/drupalcon.png",
        },
      },
      {
        event: "3",
        details: {
          eventName: "WordCamp US Online",
          eventDate: "01/10/2021",
          eventDesc:
            "WordCamps are casual, locally-organized conferences covering everything related to WordPress, the free and open source personal publishing software that powers over 75 million sites on the web",
          eventurl: "https://us.wordcamp.org/2021/",
          eventImg: "../images/events/wordcamp.png",
        },
      },
      {
        event: "4",
        details: {
          eventName: "KubeCon + CloudNativeCon North America",
          eventDate: "11/10/2021 - 15/10/2021",
          eventDesc:
            "CNCF’s flagship conference gathers adopters & technologists from leading OS and cloud native communities (Kubernetes, Prometheus, Envoy, CoreDNS and more) for education and advancement of cloud native computing.",
          eventurl:
            "https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/",
          eventImg: "../images/events/kubecon.png",
        },
      },
      {
        event: "5",
        details: {
          eventName: "Open Networking & Edge Summit",
          eventDate: "11/10/2021 - 12/10/2021",
          eventDesc:
            "Open Networking & Edge Summit is the ONE event for End to End Connectivity Solutions powered by Open Source. It enables the collaborative development necessary to shape the future of networking and edge computing.",
          eventurl:
            "https://events.linuxfoundation.org/open-networking-edge-summit-north-america/",
          eventImg: "../images/events/ones.png",
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
                    
                            <div class="over-item txt-right unique-style3 rounded-3">
                                  <div class="row">
                                      <div class="col-md-8 col-12 ">
                                      <div class="break"></div>
                                      <h3 class="text-left" >${data[index].Data[i].details.eventName}</h3>
                                      <h6 class="text-left text-light" >${data[index].Data[i].details.eventDate}</h6></br>
                                      <p class="text-left">${data[index].Data[i].details.eventDesc}</p>
                                      <div class="over-btn text-left">
                                          <a href ="${data[index].Data[i].details.eventurl}" target="blank">Website</a>
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
