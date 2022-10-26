'use strict';
async function getAllCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const results = await response.json();
  return results;
}

getAllCharacters().then(allCharacteres=>{
  console.log(allCharacteres);
  document.querySelector('.section').innerHTML='';
  const all=allCharacteres.results;
  crearCharacters(all);
});
async function data(query) {
  const response = await fetch('https://rickandmortyapi.com/api/character', {});
  const data = await response.json();
  const results = data.results.filter(character => character.name.includes(query));
  return results;
}

// eslint-disable-next-line no-unused-vars
function getValor(){
  document.querySelector('.section').innerHTML='';
  const prueba=document.getElementById('buscar').value;
  data(prueba).then(all=>{
    crearCharacters(all);
  });
}
function crearCharacters(all){
  for(let i=0;i<all.length;i++){
    createSection();
    createImageCharacter(i,all);
    createSection2(i);
    createNameCharacter(i,all);
    createList(i,all);
    crearEspacio();
    crearLinea();
    crearEspacio();
  }
}
function createList(i,all){
  createTypeList(i);
  createGender(i,all);
  createSpecie(i,all);
  createOrigin(i,all);
  createLocation(i,all);
  createStatus(i,all);
  createNumerOfEpisodes(i,all);
}
function createStatus(i,characters){
  let newElement=document.createElement('li');
  newElement.textContent='Status: '+characters[i].status;
  newElement.className='list_item';
  document.getElementsByClassName('section_list').item(i).append(newElement);
}
function createOrigin(i,characters){
  let newElement=document.createElement('li');
  newElement.textContent='Origin: '+characters[i].origin.name;
  newElement.className='list_item';
  document.getElementsByClassName('section_list').item(i).append(newElement);
}
function createSpecie(i,characters){
  let newElement=document.createElement('li');
  newElement.textContent='Specie: '+characters[i].species;
  newElement.className='list_item';
  document.getElementsByClassName('section_list').item(i).append(newElement);
}
function createGender(i,characters){
  let newElement=document.createElement('li');
  newElement.textContent='Gender: '+characters[i].gender;
  newElement.className='list_item';
  document.getElementsByClassName('section_list').item(i).append(newElement);
}
function createLocation(i,characters){
  let newElement=document.createElement('li');
  newElement.textContent='Location: '+characters[i].location.name;
  newElement.className='list_item';
  document.getElementsByClassName('section_list').item(i).append(newElement);
}
function createNumerOfEpisodes(i,characters){
  let newElement=document.createElement('li');
  newElement.textContent='Number of episodes in which he appears: '+characters[i].episode.length;
  newElement.className='list_item';
  document.getElementsByClassName('section_list').item(i).append(newElement);
}
function createSection(){
  let newElement=document.createElement('section');
  newElement.className='section1';
  document.querySelector('.section').append(newElement);
}
function crearEspacio(){
  let newElement=document.createElement('br');
  document.querySelector('.section').append(newElement);
}
function crearLinea(){
  let newElement=document.createElement('hr');
  document.querySelector('.section').append(newElement);
}
function createSection2(i){
  let newElement=document.createElement('section');
  newElement.className='section_info';
  document.querySelector('.main').append(newElement);
  document.getElementsByClassName('section1').item(i).append(newElement);
}
function createNameCharacter(i,characters){
  let newElement=document.createElement('h2');
  newElement.textContent=characters[i].name;
  newElement.className='section_name';
  document.getElementsByClassName('section_info').item(i).append(newElement);
}
function createTypeList(i){
  let newElement=document.createElement('ul');
  newElement.className='section_list';
  document.getElementsByClassName('section_info').item(i).append(newElement);
}
function createImageCharacter(i,characters){
  let newElement=document.createElement('img');
  newElement.src=characters[i].image;
  newElement.alt=characters[i].name;
  newElement.className='section_img';
  document.getElementsByClassName('section1').item(i).append(newElement);
}
// eslint-disable-next-line no-unused-vars
function haciaDelante(){
  let j=document.querySelector('.pagination').children[1].textContent;
  for(let i=0;i<7;i++){
    document.querySelector('.pagination_item'+j).textContent=(parseInt(j)+7);
    document.querySelector('.pagination_item'+j).className='pagination_item'+(parseInt(j)+7);
    j++;
  }
}
// eslint-disable-next-line no-unused-vars
function haciaAtras(){
  let j=document.querySelector('.pagination').children[1].textContent;
  if(parseInt(j)!==1){
    for(let i=0;i<7;i++){
      document.querySelector('.pagination_item'+j).textContent=(parseInt(j)-7);
      document.querySelector('.pagination_item'+j).className='pagination_item'+(parseInt(j)-7);
      j++;
    }
  }

}