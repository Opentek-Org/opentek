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

let data = [
  {
    monthId: "0",
    Data: [
      {
        event: "1",
        details: {
          eventName: "CodeTriage",
          eventDate: "Anytime",
          eventDesc:
            "Give back to open source, one issue at a time, with CodeTriage. You’ll get one issue from your favorite repo per day to help you dig deeper, learn more, and stay involved with the code you rely on.",
          eventurl: "https://www.codetriage.com/",
          eventImg: "../images/programs/codetriage.png",
        },
      },
      {
        event: "2",
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
          eventName: "Google Summer of Earth Engine",
          eventDate: "15th March ",
          eventDesc:
            "Google Summer of Earth Engine is a research program for Indian university students & researchers to get a chance to work with leading research organizations in the country working in environment, conservation, water resources and agricultural domains over 3 months of summer on a project and get paid to do so!",
          eventurl:
            "https://sites.google.com/view/summerofearthengine/home?authuser=0",
          eventImg: "../images/programs/gsoe.png",
        },
      },
      {
        event: "3",
        details: {
          eventName: "GirlScript Summer of Code",
          eventDate: "4th March ",
          eventDesc:
            "GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation, started in 2018, with an aim to help beginners get started with Open Source Development while encouraging diversity.",
          eventurl: "https://gssoc.girlscript.tech/index.html",
          eventImg: "../images/programs/gssoc.png",
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
          eventName: "Event Name",
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
          eventName: "BOSS - Bountiful Open Source Summer",
          eventDate: "15th May",
          eventDesc:
            "Each year we teach hundreds of students coding, programming and software development. Over the past five years (we started off in April 2014), we have helped more than 3000 students gain expertise in Android, Web, Data Science and more.",
          eventurl: "https://lab.codingblocks.com/boss",
          eventImg: "../images/programs/cb.png",
        },
      },
    ],
  },
  {
    monthId: "5",
    Data: [],
  },
  {
    monthId: "6",
    Data: [],
  },
  {
    monthId: "7",
    Data: [
      {
        event: "1",
        details: {
          eventName: "GirlScript Winter of Contributing",
          eventDate: "1st August",
          eventDesc:
            "GWOC encourages individuals to share their knowledge and ideas to develop technical skills and gain valuable experience in the field of tech education. ",
          eventurl: "https://gwoc.girlscript.tech/",
          eventImg: "../images/programs/gwoc.png",
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
          eventName: "Script Winter of Code",
          eventDate: "5th August",
          eventDesc:
            "Script Winter of Code is an open-source program envisioned by the Script Foundation. It aims to bring students into the world of open source development and see the power of unified problem-solving in real time.",
          eventurl: "https://swoc.scriptindia.org/#/",
          eventImg: "../images/programs/swoc.png",
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
          eventName: "Codeheat",
          eventDate: "October 1",
          eventDesc:
            "Codeheat is separated into two month periods. After each period we announce winners of the period. Participants contributing at least five pull requests can get a digital certificate and with more than ten pull requests developers can win awesome prizes. ",
          eventurl: "https://codeheat.org/",
          eventImg: "../images/programs/codeheat.png",
        },
      },
      {
        event: "2",
        details: {
          eventName: "Hacktoberfest",
          eventDate: "October 1",
          eventDesc:
            "Hacktoberfest is a month long celebration of open source software. It happens every year in October. During this event everyone can support open-source by contributing changes, and then earn a limited edition swag.",
          eventurl: "https://hacktoberfest.digitalocean.com/",
          eventImg: "../images/programs/hacktoberfest.png",
        },
      },
      {
        event: "3",
        details: {
          eventName: "NJACK Winter of Code",
          eventDate: "October 23",
          eventDesc:
            "NWoC (NJACK Winter of Code) is a program by NJACK (The Official Computer Science Club of IIT Patna) that helps students understand the paradigm of Open Source contribution and gives them real world software development experience.",
          eventurl: "https://njackwinterofcode.github.io/",
          eventImg: "../images/programs/nwoc.png",
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
          eventName: "Winter of Code",
          eventDate: "5th November",
          eventDesc:
            "Developer Students Club of NSEC brings to you Winter of Code which is a month-long extravaganza of Open Source contribution, bringing together students, organisations and mentors to build amazing projects together.",
          eventurl: "https://winterofcode.com/",
          eventImg: "../images/programs/woc.png",
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
  });
});
