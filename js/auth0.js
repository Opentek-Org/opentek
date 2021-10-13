let auth0 = null;
const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
  });
};

const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;

  document.getElementById("btn-logout").hidden = !isAuthenticated;
  document.getElementById("btn-login").hidden = isAuthenticated;

  if (isAuthenticated) {
    document.getElementById("gated-content-1").classList.remove("hidden");
    document.getElementById("gated-content-3").classList.remove("hidden");
    document.getElementById("gated-content-5").classList.remove("hidden");
    document.getElementById("gated-content-6").classList.remove("hidden");
    document.getElementById("gated-content-2").classList.add("hidden-p");
    document.getElementById("gated-content-4").classList.add("hidden-p");

    const claims = await auth0.getIdTokenClaims();
    const pictureUrl = claims.picture;
    console.log(pictureUrl);

    document.getElementById("avatar-img").src = pictureUrl;
    document.getElementById("avatar-img-div").classList.remove("hidden-icon");
  } else {
    document.getElementById("gated-content-1").classList.add("hidden");
  }
};

window.onload = async () => {
  await configureClient();
  updateUI();
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    // Process the login state
    await auth0.handleRedirectCallback();
    updateUI();
    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
  }
};

const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin,
  });
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin,
  });
};
