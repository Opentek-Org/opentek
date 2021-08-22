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
htmlc += `<option>This month is ${n}. Check if any program is happening!!</option>`;
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
          eventName: "NumFOCUS",
          eventDate: "January 15 (Round 1)",
          eventDesc:
            "NumFOCUS aims to ensure that funding and resources are available to sustain projects in the scientific data stack over the long haul. One of the ways we accomplish this vision is through programs that provide support for open source scientific computing projects: our fiscal sponsorship program and our affiliation program.",
          eventurl: "https://numfocus.org/projects-overview",
          eventImg: "../images/programs/numfocus.png",
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
          eventName: "Google Summer of Code",
          eventDate: "February 1",
          eventDesc:
            "Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 10 week programming project during their break from school.",
          eventurl: "https://summerofcode.withgoogle.com/",
          eventImg: "../images/programs/gsoc.png",
        },
      },
      {
        event: "2",
        details: {
          eventName: "Google Season of Docs",
          eventDate: "February 9",
          eventDesc:
            "Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. Together we raise awareness of open source, of docs, and of technical writing.",
          eventurl: "https://developers.google.com/season-of-docs",
          eventImg: "../images/programs/gsod.png",
        },
      },
      {
        event: "3",
        details: {
          eventName: "Outreachy",
          eventDate: "February - Applications for May Cohort",
          eventDesc:
            "Outreachy is a diversity initiative that provides paid, remote internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.",
          eventurl: "https://www.outreachy.org/",
          eventImg: "../images/programs/outreachy.png",
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
          eventName: "Rails Girls Summer of Code",
          eventDate: "2nd March - 30th March (Student Registrations) ",
          eventDesc:
            "Rails Girls Summer of Code is a global fellowship program for women and non-binary coders. Students receive a three-month scholarship to work on existing Open Source projects and expand their skill set.",
          eventurl: "https://railsgirlssummerofcode.org/",
          eventImg: "../images/programs/rgsoc.png",
        },
      },
      {
        event: "2",
        details: {
          eventName: "Rails Girls Summer of Code",
          eventDate: "2nd March - 30th March (Student Registrations) ",
          eventDesc:
            "Rails Girls Summer of Code is a global fellowship program for women and non-binary coders. Students receive a three-month scholarship to work on existing Open Source projects and expand their skill set.",
          eventurl: "https://railsgirlssummerofcode.org/",
          eventImg: "../images/programs/rgsoc.png",
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
      // {
      //   event: "1",
      //   details: {
      //     eventName: "GUADEC",
      //     eventDate: "21-07-2021 - 25/07/2021",
      //     eventDesc:
      //       "GUADEC is the GNOME community’s largest conference, bringing together hundreds of users, contributors, community members, and enthusiastic supporters together for a week of talks and workshops.",
      //     eventurl: "https://events.gnome.org/event/9/",
      //     eventImg: "../images/events/guadec.png",
      //   },
      // },
      // {
      //   event: "2",
      //   details: {
      //     eventName: "BOSC",
      //     eventDate: "29-07-2021 - 31/07/2021",
      //     eventDesc:
      //       "The Bioinformatics Open Source Conference promotes and facilitates the open source development of bioinformatics tools and open science.",
      //     eventurl: "https://www.open-bio.org/events/bosc-2021/about/",
      //     eventImg: "../images/events/bosc.png",
      //   },
      // },
    ],
  },
  {
    monthId: "7",
    Data: [
      // {
      //   event: "1",
      //   details: {
      //     eventName: "Wikimania ",
      //     eventDate: "13/08/2021 - 17/08/2021",
      //     eventDesc:
      //       "Wikimania is the Wikimedia movement’s annual conference celebrating the free knowledge projects made possible by the volunteer community and hosted by the Wikimedia Foundation",
      //     eventurl: "https://wikimania.wikimedia.org/wiki/About",
      //     eventImg: "../images/events/wikimania.png",
      //   },
      // },
      // {
      //   event: "2",
      //   details: {
      //     eventName: "GitLab Commit Virtual",
      //     eventDate: "03/08/2021 - 04/08/2021",
      //     eventDesc:
      //       "During this two-day conference, attendees will learn how they can instill modern DevOps practices at their organizations.",
      //     eventurl: "https://gitlabcommitvirtual2021.com/",
      //     eventImg: "../images/events/gitlab.png",
      //   },
      // },
      // {
      //   event: "3",
      //   details: {
      //     eventName: "ApacheCon Asia",
      //     eventDate: "06/08/2021 - 09/08/2021",
      //     eventDesc:
      //       "Join us from the comfort of your own home for three days of Apache project content across dozens of categories, from Big Data to Search to Web Frameworks and more.",
      //     eventurl: "https://hopin.com/events/apachecon-asia-2021",
      //     eventImg: "../images/events/apache.png",
      //   },
      // },
      // {
      //   event: "4",
      //   details: {
      //     eventName: "DebConf21",
      //     eventDate: "06/08/2021 - 09/08/2021",
      //     eventDesc:
      //       "DebConf is the Debian Project's developer conference. In addition to a full schedule of technical, social and policy talks, DebConf provides an opportunity for developers, contributors and other interested people to meet in person and work together more closely.",
      //     eventurl: "https://debconf21.debconf.org/",
      //     eventImg: "../images/events/debcon.png",
      //   },
      // },
      // {
      //   event: "5",
      //   details: {
      //     eventName: "BornHack",
      //     eventDate: "19/08/2021 - 26/08/2021",
      //     eventDesc:
      //       "BornHack is a 7 day outdoor tent camp where hackers, makers and people with an interest in technology or security come together to celebrate technology, socialise, learn and have fun.",
      //     eventurl: "https://bornhack.dk/bornhack-2021/",
      //     eventImg: "../images/events/bornhack.png",
      //   },
      // },
    ],
  },
  {
    monthId: "8",
    Data: [
      // {
      //   event: "1",
      //   details: {
      //     eventName: "Open Source Summit",
      //     eventDate: "27/09/2021 - 30/09/2021",
      //     eventDesc:
      //       "Open Source Summit connects the open source ecosystem under one roof. It’s a unique environment for cross-collaboration between developers, sysadmins, devops, architects and others who are driving technology forward.",
      //     eventurl:
      //       "https://events.linuxfoundation.org/open-source-summit-north-america/",
      //     eventImg: "../images/events/oss.png",
      //   },
      // },
      // {
      //   event: "2",
      //   details: {
      //     eventName: "Linux Security Summit",
      //     eventDate: "29/09/2021 - 01/10/2021",
      //     eventDesc:
      //       "Open Source Summit connects the open source ecosystem under one roof. It’s a unique environment for cross-collaboration between developers, sysadmins, devops, architects and others who are driving technology forward.",
      //     eventurl:
      //       "https://events.linuxfoundation.org/linux-security-summit-north-america/",
      //     eventImg: "../images/events/lss.png",
      //   },
      // },
      // {
      //   event: "3",
      //   details: {
      //     eventName: "PyCon India",
      //     eventDate: "17/09/2021 - 20/09/2021",
      //     eventDesc:
      //       "PyCon India is the largest annual gathering of Python aficionados and experts in India where Pythonistas come from around the world to celebrate their use of Python, and share their knowledge and experience.",
      //     eventurl: "https://in.pycon.org/2021/#tickets",
      //     eventImg: "../images/events/pycon.png",
      //   },
      // },
    ],
  },
  {
    monthId: "9",
    Data: [
      {
        event: "1",
        details: {
          eventName: "Codeheat",
          eventDate: "October 1",
          eventDesc:
            "Codeheat is separated into two month periods. After each period we announce winners of the period. Participants contributing at least five pull requests can get a digital certificate and with more than ten pull requests developers can win awesome prizes. ",
          eventurl: "https://codeheat.org/",
          eventImg: "../images/programs/codeheat.png",
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
          eventName: "Season of KDE",
          eventDate: "December 4",
          eventDesc:
            "KDE Student Programs offers an opportunity to everyone (not just students) to participate in both code and non-code projects that benefits the KDE ecosystem. In the past few years, SoK participants have not only contributed new application features but have also developed the KDE Continuous Integration System, statistical reports for developers, a web framework, ported KDE Applications, created documentation and lots and lots of other work.",
          eventurl: "https://season.kde.org/",
          eventImg: "../images/programs/kde.png",
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
    $("#program").empty();
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
