'use strict';

async function getCharacters(){
  const response=await fetch('https://rickandmortyapi.com/api/character');
  const allCharacters = await response.json();
  return allCharacters;

}
getCharacters().then(allCharacters => {
  const characters=allCharacters.results;
  console.log(allCharacters.results[0]);
  for(let i=0;i<characters.length/2;i++){
    let newElement=document.createElement('h2');
    newElement.textContent=characters[i].name;
    document.querySelector('section').append(newElement);

  }
});