const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = "";

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "index.html";
}

const baseUrl = "https://rickandmortyapi.com/api/character/";
const characterUrl = `${baseUrl}${id}`;

fetch(characterUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    characterDetails(json);
  })
  .catch(function(error) {
    document.location.href = "error.html";
  });

const container = document.querySelector(".detail-container");
let newHTML = "";

function characterDetails(result) {
  document.title = result.name;

  const characterImage = document.querySelector("img.details-image");
  characterImage.src = result.image;
  characterImage.alt = result.name;

  const characterName = document.querySelector("h1");
  characterName.innerHTML = result.name;

  const characterStatus = document.querySelector("#status");
  characterStatus.innerHTML = result.status;

  const characterSpecies = document.querySelector("#species");
  characterSpecies.innerHTML = result.species;

  const characterOrigin = document.querySelector("#origin");
  characterOrigin.innerHTML = result.origin.name;

  const characterLocation = document.querySelector("#location");
  characterLocation.innerHTML = result.location.name;
}
