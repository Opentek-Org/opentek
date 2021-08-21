const getData = async () => {
  const data = [
    {
      id: "msyGybzCKRs",
      title: "Kunal Kushwaha",
      subtitle: "About the Video",
      para: "In this video you will understand what Open Source is and how contributing can help you.",
      // button: "Contribute",
      // buttonurl: "http://",
    },
    {
      id: "uj4fy4kpaOA",
      title: "Love Babbar",
      subtitle: "About the Video",
      para: "This video includes overview of Git and Github, complete practical use of all the git commands IN JUST 33 MINUTES",
      // button: "Contribute",
      // buttonurl: "http://",
    },
    {
      id: "2j7fD92g-gE",
      title: "Simplilearn",
      subtitle: "About the Video",
      para: "This Git installation video will take you through the step by step process involved in Git installation on Windows.",
      // button: "Contribute",
      // buttonurl: "http://",
    },
    {
      id: "apGV9Kg7ics",
      title: "Kunal Kushwaha",
      subtitle: "About the Video",
      para: "This tutorial will help you with using Git & GitHub for your personal projects and contributing to Open Source, with no prerequisites, in an easy to understand language.",
      // button: "Contribute",
      // buttonurl: "http://",
    },
    {
      id: "yzeVMecydCE",
      title: "FreeCodeCamp",
      subtitle: "About the Video",
      para: "Learn why and how to contribute to open source software. You will learn about how to find projects to contribute to, how to make issues and PRs, how to make money from open source, and more.",
      // button: "Contribute",
      // buttonurl: "http://",
    },
    {
      id: "VdF6RvLiCao",
      title: "Code For Cause",
      subtitle: "About the Video",
      para: "Are you a Java Developer looking for some Open Source organisations to contribute to? Here's a list of some Open Source organisations for you, & also some that take part in Google Summer of Code (GSoC) ☀️",
      // button: "Contribute",
      // buttonurl: "http://",
    },
    {
      id: "SYtPC9tHYyQ",
      title: "Eddie Jaoude",
      subtitle: "About the Video",
      para: "Learn the jargons of GitHub like tag/release, commit, branch, fork, project board, label, milestone, actions and much more!",
      // button: "Contribute",
      // buttonurl: "http://",
    },
  ];
  try {
    console.log(data);
    var html = '<div class="row">';
    for (i = 0; i < data.length; i++) {
      if (i % 3 == 0 && i != 0) {
        html += "</div>";
        html += '<div class="row">';
      }
      html += `<div class="col-lg-4 col-sm-4">`;
      // html += `<div class=" card  mt-5 card_red text-center">
      //       <iframe  height="215" src="https://www.youtube.com/embed/${data[i].id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      //                    </div>   `;
      html += `<div class="mt-5 card text-center">
      <a href=https://www.youtube.com/embed/${data[i].id}?autoplay=1>
      <img id="ytimg" height="215" width="100%" src=https://img.youtube.com/vi/${data[i].id}/hqdefault.jpg alt='ytvideo'>
      <div class" text-center" >
      <span id="butt">▶</span>
      </div>
      </a>
      </div>   `;
      html += `<div class="about-txt">
      <span class="separet-span">${data[i].title}</span>
      <h5 style="color: white; padding:8px 0px 8px 0px;">${data[i].subtitle}</h5>
      <div>
          <p style="text-align: justify;">${data[i].para}</p>
          
      </div>
        </div></div>`;
    }

    $("#rowdy").append(html);
  } catch (error) {
    console.log(error);
  }
};

getData();
