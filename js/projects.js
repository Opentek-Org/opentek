const fetchAuthConfig = () => fetch("/auth_config.json");


//toastr
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


fetchAuthConfig()
  .then((response) => response.json())
  .then((firebaseConfig) => {
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("projects")
          .get()
          .then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
              data.push({ langId: doc.id, ...doc.data() });
            });
            $(function () {
              loadData(data, db, user);
            });
          })
          .catch((error) => {
            console.log(error);
            var htmlz = `<div class= "container unique-style3  mb-5 pb-5">`;
            htmlz += `<p class="text-light text-center text-no-data">Failed to fetch data. Please try again later.</p>`;
            htmlz += `</div>`;
            $("#error").append(htmlz);
          });
      } else {
        console.log("User is not logged in");
        // Handle case when the user is not logged in
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });

function loadData(data, db, user) {
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

                <i class="fa fa-heart save_icon" data-lang-id="${data[i].langId}"></i>
                <button type="button" class="twitter-share-button" data-bs-toggle="modal" data-bs-target="#myModel" id="shareBtn" data-bs-placement="top" title="Click Me!" data-url="${data[i].langurl}">
                <i class="fa-solid fa-share fa-bounce" style="color: #e11919;"></i>Share
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
  $("#project").append(html);
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
  // const shareIcons = document.querySelectorAll('.share_icon');
  // shareIcons.forEach(icon => {
  //   icon.addEventListener('click', handleShareClick);
  // });

  // Add event listener to save icons
  const saveIcons = document.querySelectorAll('.save_icon');
  saveIcons.forEach(icon => {
    icon.addEventListener('click', handleSaveClick);
  });

  // Share icon click event handler
  function handleShareClick(event) {
    const url = event.target.dataset.url;
    if (url) {
      navigator.clipboard.writeText(url)
        .then(() => {
          toastr["info"]("URL copied to clipboard:")

          // You can show a success message or perform any other action here
        })
        .catch((error) => {
          toastr["error"]('Error copying URL to clipboard:', error);
          // You can show an error message or perform any other action here
        });
    }
  }



  // Save icon click event handler
  function handleSaveClick(event) {
    const langId = event.target.dataset.langId;
    if (langId) {
      const uid = user.uid;
      const userRef = db.collection("users").doc(uid);
      userRef.update({
        saved: firebase.firestore.FieldValue.arrayUnion(langId)
      })
        .then(() => {
          toastr["success"]('Project Saved!');
          // You can show a success message or perform any other action here
        })
        .catch((error) => {
          toastr["success"]('Error saving langID:', error);
          // You can show an error message or perform any other action here
        });
    }
  }
}
