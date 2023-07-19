const ratingInput = document.getElementById('rating');
const ratingError = document.getElementById('rating-error');

ratingInput.addEventListener('input', function () {
  const rating = parseInt(ratingInput.value);

  if (isNaN(rating) || rating < 1 || rating > 5) {
    ratingError.textContent = 'Please enter a rating between 1 and 5';
  } else {
    ratingError.textContent = '';
  }
});