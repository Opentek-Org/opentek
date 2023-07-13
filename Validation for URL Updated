// Assuming you have a JSON array called 'data' containing the card information
const datas = [
  {
    name: "Teresa May",
    position: "Founder at ET ",
    rating: 4.5,
    quote:
      "OpenTek brings everything related to Open Source under one Umbrella and provides an clear way to innovation..",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
  },
  {
    name: "Maggie McLoan",
    position: "Backend Developer at LAML",
    rating: 4,
    quote:
      "OpenTek is a revolutionary platform that connects developers, designers, and enthusiasts in the world of Open Source.",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp",
  },
  {
    name: "Alexa Horwitz",
    position: "Front-end Developer in NY",
    rating: 4.5,
    quote:
      "Join OpenTek and unlock a world of opportunities to learn, collaborate, and contribute to the Open Source community.",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp",
  },
  {
    name: "John Smith",
    position: "Marketing Specialist in OPENAI",
    rating: 4,
    quote:
      "OpenTek empowers individuals and organizations to embrace Open Source and create impactful projects that benefit everyone.",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
  {
    name: "Dan Abrahmov",
    position: "Web Developer in FLAT",
    rating: 4.5,
    quote:
      "OpenTek is more than a platform; it is a movement that champions transparency, collaboration, and innovation through Open Source.",
    image: "https://bit.ly/dan-abramov",
  },
  {
    name: "Kent Dodds",
    position: "Android Developer in WAM",
    rating: 4,
    quote:
      "OpenTek brings together passionate individuals from all backgrounds to foster a culture of knowledge sharing and community building.",
    image: "https://bit.ly/kent-c-dodds",
  },
];

function generateCarouselItems(data) {
  console.log(data);
  // Select the carousel container element
  const carouselContainer = document.querySelector(".carousel-inner");
  // Select the carousel indicators container element
  const indicatorsContainer = document.querySelector(".carousel-indicators");

  // Calculate the number of carousel items based on the number of objects in 'data'
  const numCarouselItems = Math.ceil(data.length / 3);

  // Generate carousel items with three cards each
  for (let i = 0; i < numCarouselItems; i++) {
    // Create a carousel item element
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");

    // Create a row element for the cards
    const row = document.createElement("div");
    row.classList.add("row", "text-center");

    // Calculate the indices for the current carousel item
    const startIndex = i * 3;
    const endIndex = Math.min(startIndex + 3, data.length);

    // Generate cards within the row
    for (let j = startIndex; j < endIndex; j++) {
      const cardData = data[j];
      // Create a card element
      const Column = document.createElement("div");
      Column.classList.add("col-md-4", "mb-4", "mb-md-0");
      const card = document.createElement("div");
      card.classList.add("card", "bg-black", "border-2", "pink-border");

      // Construct the card HTML using template literals and the cardData object
      card.innerHTML = `
        <div class="card-body py-4 mt-2 ">
          <div class="d-flex justify-content-center mb-4">
            <img src="${cardData.image}"
              class="rounded-circle shadow-1-strong" width="100" height="100" />
          </div>
          <h5 class="font-weight-bold text-white">${cardData.name}</h5>
          <h6 class="font-weight-bold my-3 text-white">${cardData.position}</h6>
          <ul class="list-unstyled d-flex justify-content-center ">
            ${generateStars(cardData.rating)}
          </ul>
          <p class="mb-2 text-white">
            <i class="fas fa-quote-left pe-2 text-white"></i>${cardData.quote}
          </p>
        </div>
      `;
      Column.appendChild(card);
      // Append the card to the row
      row.appendChild(Column);
    }

    // Append the row to the carousel item
    carouselItem.appendChild(row);

    // Add the 'active' class to the first carousel item
    if (i === 0) {
      carouselItem.classList.add("active");
    }

    // Append the carousel item to the carousel container
    carouselContainer.appendChild(carouselItem);

    // Create a carousel indicator for the current carousel item
    const indicator = document.createElement("li");
    indicator.setAttribute("data-target", "#testimonialCarousel");
    indicator.setAttribute("data-slide-to", i.toString());
    if (i === 0) {
      indicator.classList.add("active");
    }
    indicatorsContainer.appendChild(indicator);
  }
}
// Helper function to generate star icons based on the rating
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<li><i class="fas fa-star fa-sm text-info"></i></li>';
  }

  if (halfStar) {
    starsHTML +=
      '<li><i class="fas fa-star-half-alt fa-sm text-info"></i></li>';
  }

  return starsHTML;
}

axios
  .get("https://opentek.onrender.com/testimonials")
  .then((response) => {
    // Store the fetched data in the 'data' array
    data = response.data;

    // Call the function to generate the carousel items with the fetched data
    generateCarouselItems(data.testimonials);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const modalOpenButton = document.getElementById("modal");
if (modalOpenButton) {
  console.log("clicked");
  modalOpenButton.addEventListener("click", () => {
    console.log("clicked modal");
    const testimonialForm = document.getElementById("testimonialForm");
    if (testimonialForm) {
      testimonialForm.addEventListener("submit", async (event) => {
        console.log("clicked form");
        event.preventDefault(); // Prevent the form from submitting normally
        console.log("<----------------------------->");
        const name = document.getElementById("name").value;
        const position = document.getElementById("position").value;
        const quote = document.getElementById("quote").value;
        const rating = document.getElementById("rating").value;
        const image = document.getElementById("avatar").value;

        const testimonial = { name, position, quote, rating, image };
        // Regular expression pattern for URL validation
         const urlPattern = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*(\?[\w=&-]*)?(#.*)?$/i;

        if (!urlPattern.test(image)) {
          alert("Please enter a valid URL");
          return; // Exit the function if the URL is invalid
        }

        if (isNaN(rating) || rating < 1 || rating > 5) {
          alert("Please enter a rating between 1 and 5");
          return; // Exit the function if the rating is invalid
        }

        try {
          const response = await fetch(
            "https://opentek.onrender.com/testimonials",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(testimonial),
            }
          );

          if (response.ok) {
            const result = await response.json();
            console.log("Testimonial saved successfully. ID:", result.id);
            alert("Testimonial saved successfully");
            location.reload(); // Refresh the page
          } else {
            console.error(
              "Error saving testimonial:",
              response.status,
              response.statusText
            );
            alert("Error saving testimonial");
            location.reload(); // Refresh the page
          }
        } catch (error) {
          console.error("Error saving testimonial:", error);
          alert("Error saving testimonial");
          location.reload(); // Refresh the page
        }
      });
    }
  });
}
