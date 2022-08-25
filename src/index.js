console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
});
// on page load, fetches the images using the url above 
function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  //parses the response as JSON
    .then(response=> response.json())
//adds image elements to the DOM **for each** 🤔 image in the arrayN
    .then(results => {
      results.message.forEach(image => insertImg(image))
    });
}

function insertImg(dogPicUrl) {
  let container = document.getElementById('dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

//on page load, fetches all the dog breeds using the url above 
function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
      breeds = Object.keys(results.message);
      update(breeds);
      addBreedSelectListener();
    });
}
function update(breeds) {
  const ul = document.getElementById('dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}
function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}
function begins(letter) {
  update(breeds.filter(breed => breed.startsWith(letter)));
}
function addBreedSelectListener() {
  const Dropdown = document.getElementById('breed-dropdown');
  Dropdown.addEventListener('change', function (event) {
    begins(event.target.value);
  });
}
function addBreed(breed) {
  const ul = document.getElementById('dog-breeds');
  const li = document.createElement('li');
  li.innerText = breed;
  ul.appendChild(li);
  li.addEventListener('click', Color);
}
function Color(event) {
  event.target.style.color = 'blue';
}