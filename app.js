const apiKey = '5LtB1G9-xsFkv8uc5sTDgOKWYJi8EodgPC1yQfM7U0o';  // Your Unsplash API key
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search');

// Function to fetch images based on the search term
function fetchImages(query) {
  fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      displayImages(data.results);  // Pass the images data to display function
    })
    .catch(error => console.error('Error fetching images:', error));
}

// Function to display images on the webpage
function displayImages(images) {
  gallery.innerHTML = '';  // Clear the gallery before adding new images
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.urls.small;  // Get the small image URL
    imgElement.alt = image.alt_description || 'Unsplash image';
    gallery.appendChild(imgElement);  // Add the image to the gallery
  });
}

// Event listener for the search input field
searchInput.addEventListener('input', function () {
  const query = searchInput.value.trim();
  if (query) {
    fetchImages(query);  // Fetch images if there is text in the search field
  } else {
    gallery.innerHTML = '';  // Clear the gallery if no search term
  }
});
