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

  $("#project").empty().append(html);


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
