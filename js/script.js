const container = document.querySelector(".row");
let newHTML = "";

function loadCharacter(json) {
  const character = json.results;

  for (let i = 0; i < character.length; i++) {
    let typeValue = "Unknown";
    if (character[i].type) {
      typeValue = character[i].type;
    }

    const details = `<div class="col-sm-6 col-md-4 col-lg-3">                
    <div class="card">    
        <img class="image" src="${character[i].image}" alt="${character[i].name}">
        <div class="details">
            <h4 class="name">${character[i].name}</h4>
            <p>Type: ${typeValue}</p>    
            <p>Episode count: ${character[i].episode.length}</p>                                  
            <a class="btn btn-primary" href="details.html?id=${character[i].id}">Details</a>
        </div>
    </div>
</div>`;
    newHTML += details;
  }
  container.innerHTML = newHTML;
}

const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    loadCharacter(json);
  })
  .catch(function(error) {
    console.dir(error);
  });
