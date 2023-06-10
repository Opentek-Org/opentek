let domain = [
    "Web Development",
    "Machine Learning",
    "API",
    "DSA",
    "NODEJS",
    "App Development",
];

let htmlc = `<div>`;
// htmlc += `<button value="all" id="def-filter" class="filter selected-filter">All</button>`;
for (let index = 0; index < domain.length; index++) {
    htmlc += `<button value="${index}" class="filter">${domain[index]}</button>`;
}

htmlc += `<button class="hide" id="clear-filter">Clear Filters</button>`;

htmlc += "</div>";
$("#selectoption").append(htmlc);

function loadData(data, values) {
    let index = values[0];
    var html = "";
    for (let i = 0; i < data.length; i++) {
        if (
            values == "all" ||
            data[i].domainIds.some((domainId) => values.includes(domainId))
        )
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
}

fetch("../data/projects.json")
    .then((data) => data.json())
    .then((data) => {
        $(function () {
            $(".filter").click(function (e) {
                if (!e.target.matches(".selected-filter")) {
                    e.target.classList.add("selected-filter");
                } else {
                    e.target.classList.remove("selected-filter");
                }
                let values = $(".selected-filter")
                    .map((_, el) => el.value)
                    .get();
                $("#project").empty();
                $("#error").empty();
                if (values.length === 0) {
                    $("#clear-filter").addClass("hide");
                    loadData(data, "all");
                } else {
                    $("#clear-filter").removeClass("hide");
                    loadData(data, values);
                }
            });
            $("#clear-filter").click(() => {
              $("#clear-filter").addClass("hide");
              $(".filter").removeClass("selected-filter");
              loadData(data, "all");
            })
            loadData(data, "all");
        });
    });
