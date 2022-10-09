
const getData = async () => {
    fetch("../data/blogs.json")
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
                    html += `<div class="blog-card">`;
                    html += `<div class="card-img-container">
                        <img src="${data[i].blogImage}">
                    </div>`;
                    html += `<div class="card-content">
                    <p class="style-span">${data[i].blogtitle}</p>
                    <p class="blog-para">${data[i].BlogPara}</p>
                    </div>`
                    html += `<div class="button-holder">
                    <a  href="${data[i].blogLink}" class="read-more-btn style-span">Read More →</a>

                    </div></div>`;
                }

                $("#blog").append(html);
            } catch (error) {
                console.log(error);
            }
        })
};

getData();
