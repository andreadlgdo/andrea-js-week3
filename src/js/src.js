'use strict';

async function data(query) {
  const response = await fetch('https://rickandmortyapi.com/api/character', {})
  const data = await response.json();
  const results = data.results.filter(character => character.name.includes(query));
  return results;
}

function getValor(){
  const prueba=document.getElementById('buscar').value;
  console.log(prueba);
  data(prueba).then(all=>{
    console.log(all);
    for(let i=0;i<all.length;i++){
      createSection();
      createImageCharacter(i,all);
      createNameCharacter(i,all);
      crearEspacio();
      crearLinea();
      crearEspacio();
    }
  });
};


function createSection(){
  let newElement=document.createElement('section');
  newElement.className='section';
  document.querySelector('.main').append(newElement);
}
function crearEspacio(){
  let newElement=document.createElement('br');
  document.querySelector('.main').append(newElement);
}
function crearLinea(){
  let newElement=document.createElement('hr');
  document.querySelector('.main').append(newElement);
}
function createNameCharacter(i,characters){
  let newElement=document.createElement('h2');
  newElement.textContent=characters[i].name;
  newElement.className='section_name';
  document.getElementsByClassName('section').item(i).append(newElement);
}
function createImageCharacter(i,characters){
  let newElement=document.createElement('img');
  newElement.src=characters[i].image;
  newElement.alt=characters[i].name;
  newElement.className='section_img';
  document.getElementsByClassName('section').item(i).append(newElement);
}