let domain = [
  "All domains",
  "Web Development",
  "Machine Learning",
  "API",
  "DSA",
  "NODEJS",
  "App Development",
];

let htmlc = `<div>`;
htmlc += `<button value="all" id="def-filter" class="filter selected-filter">All</button>`;
for (let index = 0; index < domain.length; index++) {
    htmlc += `<button value="${index}" class="filter">${domain[index]}</button>`;
  }
htmlc += '</div>'
$("#selectoption").append(htmlc);

function loadData(data, valu) {
  let index = valu;
  if (valu == "all" || valu < domain.length) {
    var html = "";
    for (let i = 0; i < data.length; i++) {
      if (valu == "all" || data[i].domainIds.includes(index))
      try {
          html += `
          <li class="cards_item">
          <div class="card">
              <div class="card_content">
              <p class="card_title">${data[i].langName}</p>
              <span class="cardtitle">Project Admin-${data[i].langAdmin}</span>
              <h6 class="card_title">Tech Stack- ${data[i].langTitle}</h6>
              <p class="card_text">${data[i].langDesc}</p>
              </div>
              <button class="btn card_btn" onclick="window.location.href='${data[i].langurl}'"target="blank">Repo Url</button>
          </div>
          </li>
  
          `;
      } catch (error) {
        console.log(error);
      }
    }
    $("#project").append(html);
  } else {
    var htmlz = `<div class= "container unique-style3  mb-5 pb-5">`;
    htmlz += `<p class="text-light text-center text-no-data">No data found.Please select another month.</p>`;
    htmlz += `</div>`;
    $("#error").append(htmlz);
  }
}

fetch("../data/projects.json")
  .then((data) => data.json())
  .then((data) => {
    let valu;
    $(function () {
      $(".filter").click(function (e) {
        $(".filter").removeClass('selected-filter');
        e.target.classList.add('selected-filter');
        valu = e.target.value
        $("#project").empty();
        $("#error").empty();
        loadData(data, valu);
      });
      loadData(data, "all");
    });
  });
