
    // Get the input element and error message span
    const avatarInput = document.getElementById('avatar');
  const avatarError = document.getElementById('avatar-error');

  // Add an event listener for input changes
  avatarInput.addEventListener('input', function () {
    // Get the entered URL
    const url = avatarInput.value;

    // Regular expression pattern for URL validation
    // const urlPattern = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/i;
    const urlPattern = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*(\?[\w=&-]*)?(#.*)?$/i;

    

    // Check if the URL matches the pattern
    if (urlPattern.test(url)) {
      // Valid URL, clear the error message
      avatarError.textContent = '';
    } else {
      // Invalid URL, display an error message
      avatarError.textContent = 'Please enter a valid URL';
    }
  });
