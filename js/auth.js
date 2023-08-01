let firebaseConfig = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
  const response = await fetchAuthConfig();
  firebaseConfig = await response.json();
  firebase.initializeApp(firebaseConfig);
};

const updateUI = async () => {
  const user = firebase.auth().currentUser;
  const isAuthenticated = !!user;


  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;
  document.getElementById("btn-save").disabled = !isAuthenticated;

  document.getElementById("btn-logout").hidden = !isAuthenticated;
  document.getElementById("btn-login").hidden = isAuthenticated;
  document.getElementById("btn-save").hidden = !isAuthenticated;

  if (isAuthenticated) {
    document.getElementById("gated-content-2").classList.add("hidden-p");
    document.getElementById("gated-content-4").classList.add("hidden-p");

    let tuneIn_A = document.getElementById("gated-content-1");
    tuneIn_A.getElementsByTagName("a")[0].removeEventListener("click", login, true);
    let participate_A = document.getElementById("gated-content-3");
    participate_A.getElementsByTagName("a")[0].removeEventListener("click", login, true);

    let tuneIn_A_FOOTER = document.getElementById("gated-content-5");
    tuneIn_A_FOOTER.removeEventListener("click", login, true);
    let participate_A_FOOTER = document.getElementById("gated-content-6");
    participate_A_FOOTER.removeEventListener("click", login, true);

    const pictureUrl = user.photoURL;
    console.log(pictureUrl);

    document.getElementById("avatar-img").src = pictureUrl;
    document.getElementById("avatar-img-div").classList.remove("hidden-icon");

    const { uid } = user;

    const firestore = firebase.firestore();
    const userRef = firestore.collection("users").doc(uid);

    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      // User details don't exist in Firestore, create user data
      const { displayName, email } = user;
      const userDetails = {
        uid,
        displayName,
        email,
        saved: [],
      };

      await userRef.set(userDetails);
      console.log("User details stored in Firestore");
    } else {
      console.log("User details already exist in Firestore");
    }
  } else {
    let tuneIn_A = document.getElementById("gated-content-1");
    tuneIn_A.getElementsByTagName("a")[0].addEventListener("click", login, true);
    let participate_A = document.getElementById("gated-content-3");
    participate_A.getElementsByTagName("a")[0].addEventListener("click", login, true);

    let tuneIn_A_FOOTER = document.getElementById("gated-content-5");
    tuneIn_A_FOOTER.addEventListener("click", login, true);
    let participate_A_FOOTER = document.getElementById("gated-content-6");
    participate_A_FOOTER.addEventListener("click", login, true);
  }
};

window.onload = async () => {
  await configureClient();
  firebase.auth().onAuthStateChanged((user) => {
    updateUI();
  });
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await firebase.auth().getRedirectResult();
    updateUI();
    window.history.replaceState({}, document.title, "/");
  }
};

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

const logout = () => {
  firebase.auth().signOut().then(() => {
    location.reload();
  });
};
