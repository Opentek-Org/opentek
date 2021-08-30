const getData = async () => {
  fetch("../data/tutorial.json")
  .then((data) => data.json())
  .then((data) => {
  try {
    console.log(data);
    var html = '<div class="row">';
    for (i = 0; i < data.length; i++) {
      if (i % 3 == 0 && i != 0) {
        html += "</div>";
        html += '<div class="row">';
      }
      html += `<div class="col-lg-4 col-sm-4">`;
      html += `<div class="mt-5 card text-center">
      <a href=https://www.youtube.com/embed/${data[i].tutorialId}?autoplay=1>
      <img id="ytimg" height="100%" width="100%" src=https://img.youtube.com/vi/${data[i].tutorialId}/hqdefault.jpg alt='ytvideo'>
      <div class" text-center" >
      <span id="butt"><img src="https://img.icons8.com/color/48/000000/youtube-play.png"/></span>
      </div>
      </a>
      </div>   `;
      html += `<div class="about-txt">
      <span class="style-span">${data[i].title}</span>
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
})
};

getData();
