const fetchAuthConfig = () => fetch("/auth_config.json");

// ...

fetchAuthConfig()
  .then((response) => response.json())
  .then((firebaseConfig) => {
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        console.log("UID:", uid);

        db.collection("users")
          .doc(uid)
          .get()
          .then((userDoc) => {
            const savedProjects = userDoc.data().saved || [];
            console.log("Saved Projects:", savedProjects);

            const query = db.collection("projects").where("langId", "in", savedProjects);

            query.get()
              .then((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                  data.push(doc.data());
                });

                if (data.length > 0) {
                  $(function () {
                    loadData(data, db);
                  });
                } else {
                  // Handle case when no saved projects are found
                  var htmlz = `<div class="container unique-style3 mb-5 pb-5">`;
                  htmlz += `<p class="text-light text-center text-no-data">No saved projects found.</p>`;
                  htmlz += `</div>`;
                  $("#error").append(htmlz);
                }
              })
              .catch((error) => {
                console.log(error);
                var htmlz = `<div class="container unique-style3 mb-5 pb-5">`;
                htmlz += `<p class="text-light text-center text-no-data">Failed to fetch data. Please try again later.</p>`;
                htmlz += `</div>`;
                $("#error").append(htmlz);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // User is not logged in, handle accordingly
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });

function loadData(data, db) {
  var html = "";
  for (let i = data.length - 1; i >= 0; i--) {
    try {
      html += `
      <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <p class="card_title">${data[i].langName}</p>
          <div class="card-project-properties"> 
            <span class="card-project-admin-name">Project Admin: ${data[i].langAdmin}</span>
            <h6 class="card-stack">${data[i].langTitle}</h6>
          </div>
          <p class="card_text">${data[i].langDesc}</p>
        </div>
        <div class="card_icons right-align">
          <a href="${data[i].langurl}" target="_blank"><button class="btn card_btn">Github Repository</button></a>
          <div class="icon_container">

          <label class="bookmark" style="margin-top: 20px;">
          <input type="checkbox"   class="save_icon" data-lang-id="${data[i].langId}" checked />
          <div>
            <svg class="background" viewBox="0 0 16 24" stroke="currentColor" >
              <path d="M0.5,23.124911 L6.9318135,16.6008331 C6.93933086,16.5932441 6.93933086,16.5932441 6.94691994,16.5857267 C7.53686305,16.0041267 8.48658644,16.01089 9.0681865,16.6008331 L15.5,23.124911 L15.5,2.02869001 C15.5,1.18283629 14.8268205,0.5 14,0.5 L2,0.5 C1.17317953,0.5 0.5,1.18283629 0.5,2.02869001 L0.5,23.124911 Z"></path>
            </svg>
            <svg class="active" viewBox="0 0 16 24" fill="currentColor" >
              <path d="M2,0 L14,0 C15.1045695,0 16,0.908275455 16,2.02869001 L16,23.7565572 C16,23.8910069 15.8925483,24 15.76,24 C15.696348,24 15.6353031,23.9743516 15.5902944,23.9286973 L8.71212433,16.9518598 C8.32439096,16.5585644 7.69124204,16.5540555 7.29794663,16.9417889 C7.29456578,16.9451219 7.29120871,16.948479 7.28787567,16.9518598 L0.409705627,23.9286973 C0.315979797,24.0237676 0.164020203,24.0237676 0.0702943725,23.9286973 C0.0252856417,23.8830429 0,23.8211222 0,23.7565572 L0,2.02869001 C0,0.908275455 0.8954305,0 2,0 Z"></path>
            </svg>
          </div>
        </label>
        
            <button type="button" class="twitter-share-button" data-bs-toggle="modal" data-bs-target="#myModel" id="shareBtn" data-bs-placement="top" title="Click Me!" data-url="${data[i].langurl}">
            <i class="fa-solid fa-share " style="color: #e11919;"></i>Share
        </button>

          </div>
        </div>
      </div>
    </li>
      `;
    } catch (error) {
      console.log(error);
    }
  }

  $("#project").empty().append(html);
//sharing
const shareButtons = document.querySelectorAll("#shareBtn");
shareButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log("Called");
    const url = button.dataset.url;

    // Set the URL value in the input field of the share modal
    const inputField = document.querySelector("#myModel input[type='text']");
    inputField.value = url;
    console.log(inputField.value);

    // Set the URL in the anchor tags (icon links) inside the share modal
    const iconLinks = document.querySelectorAll("#myModel .icons a");
    iconLinks.forEach(function(link) {
      const platform = link.dataset.platform;
      link.href = getPlatformShareURL(platform, url);
    });


    // Open the share modal programmatically
  
  });
});
const copyBtn = document.getElementById('copy');
const inputField = document.querySelector("#myModel input[type='text']");

copyBtn.addEventListener('click', () => {
  inputField.select();
  document.execCommand('copy');
  copyBtn.innerText = 'Copied';
  setTimeout(() => {
    copyBtn.innerText = 'Copy';
  }, 1500);
});

function getPlatformShareURL(platform, url) {
  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Your%20tweet%20text%20here`;
    case "whatsapp":
      return `https://api.whatsapp.com/send?text=Your%20WhatsApp%20message%20here%20${encodeURIComponent(url)}`;
    case "telegram":
      return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=Your%20Telegram%20message%20here`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    case "reddit":
      return `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=Your%20Reddit%20title%20here`;
    case "email":
      return `mailto:?subject=Check%20out%20this%20project!&body=${encodeURIComponent(url)}`;
    case "pinterest":
      return `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
    case "tumblr":
      return `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(url)}`;
    case "slack":
      return `https://slack.com/intl/en-gb/redirect?url=${encodeURIComponent(url)}`;
    case "discord":
      return `https://discord.com/channels/@me?url=${encodeURIComponent(url)}`;
    default:
      return "";
  }
}
































  // Add event listener to share icons
  const shareIcons = document.querySelectorAll('.share_icon');
  shareIcons.forEach(icon => {
    icon.addEventListener('click', handleShareClick);
  });

  // Share icon click event handler
  function handleShareClick(event) {
    const url = event.target.dataset.url;
    if (url) {
      navigator.clipboard.writeText(url)
        .then(() => {
          alert('URL copied to clipboard:', url);
          // You can show a success message or perform any other action here
        })
        .catch((error) => {
          console.log('Error copying URL to clipboard:', error);
          // You can show an error message or perform any other action here
        });
    }
  }
}
