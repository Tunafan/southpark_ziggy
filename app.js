"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  console.log(`.js gang gang`);
  const characters = await getCharacter(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );

  characters.forEach(showCharacter);
}
async function getCharacter(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function showCharacter(character) {
  console.log(character);

  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    //character traits
    /*html*/ `
    <article>
        <h2>${character.name}</h2>
        <img src="${character.image}" id="lol" alt="" />
        <p><b>Job\(s\):</b> ${character.occupation}<p>
        <p><b>Voices:</b> ${character.voicedBy}<p>
        <p><b>Saying:</b> ${character.catchPhrase}<p>
        <p><b>First appearance:</b> ${character.firstAppearance}<p>
        </article>`
  );
  // klik-event
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);
  function characterClicked() {
    showCharacterModal(character);
  }

  function showCharacterModal(character) {
    console.log(character);
    document.querySelector("#dialog-image").src = character.image;

    // description
    let description = generateDescription(character);
    document.querySelector("#dialog-nickname").textContent = character.nickname;

    document.querySelector("#dialog-occupation").textContent =
      character.occupation;
    document.querySelector("#dialog-age").textContent = character.age;
    document.querySelector("#dialog-voicedBy").textContent = character.voicedBy;
    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-catchphrase").textContent =
      character.catchphrase;
    document.querySelector("#dialog-hairColor").textContent =
      character.hairColor;

    document.querySelector("#dialog-episodes").textContent = character.episodes;
    document.querySelector("#dialog-appearances").textContent =
      character.appearances;
    document.querySelector("#dialog-firstAppearance").textContent =
      character.firstAppearance;

    // show dialog
    document.querySelector("dialog").showModal();
  }
}
function generateDescription(character) {
  let description = "";

  return description;
}
