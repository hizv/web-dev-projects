const DOG_BASE_URL = "https://dog.ceo/api/breed";

const doggers = document.querySelector('.doggers')
const sd = document.querySelector('.dog-selector')

function addNewDogger() {
  const breed = sd.value.replace('-', '/')
  const DOG_URL = `${DOG_BASE_URL}/${breed}/images/random`;
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute dogga";
      doggers.insertBefore(img, doggers.firstChild);
    });
}

document.querySelector(".add-dogger").addEventListener("click", addNewDogger);
