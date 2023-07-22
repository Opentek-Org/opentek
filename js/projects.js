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
                <i class="fa fa-share share_icon" data-url="${data[i].langurl}"></i>
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

  // Add event listener to share icons
  const shareIcons = document.querySelectorAll('.share_icon');
  shareIcons.forEach(icon => {
    icon.addEventListener('click', handleShareClick);
  });

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
