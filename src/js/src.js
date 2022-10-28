'use strict';
async function getAllCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const results = await response.json();
  return results;
}

getAllCharacters().then(allCharacteres=>{
  document.querySelector('.section').innerHTML='';
  const all=allCharacteres.results;
  crearCharacters(all);
});

let filters='';

async function getCharactersByFilterOneFilter(type,valor) {
  const response = await fetch('https://rickandmortyapi.com/api/character/?'+type+'='+valor);
  const results = await response.json();

  return results;
}
async function getCharactersByFilter2Filter(types,valores) {
  const response = await fetch('https://rickandmortyapi.com/api/character/?'+types[0]+'='+valores[0]+'&'
      +types[1]+'='+valores[1]);
  const results = await response.json();

  return results;
}
async function getCharactersByFilter3Filter(types,valores) {
  const response = await fetch('https://rickandmortyapi.com/api/character/?'+types[0]+'='+valores[0]+'&'
      +types[1]+'='+valores[1]+'&'+types[2]+'='+valores[2]);
  const results = await response.json();

  return results;
}
let types=new Array();
let valores=new Array();
let j=0;
// eslint-disable-next-line no-unused-vars
function  filterby(type,valor){
  for (let i=0;i<types.length;i++){
    console.log(types[i]);
    console.log(valores[i]);
    if(types[i]===type){
      valores[i]=valor;
      console.log(valores[i]);
    }
  }
  types[j]=type;
  valores[j]=valor;
  j++;

}
// eslint-disable-next-line no-unused-vars
function filter(){
  document.querySelector('.section').innerHTML='';
  console.log(types);
  console.log(valores);
  if(types.length===1){
    getCharactersByFilterOneFilter(types[0],valores[0]).then(allCharacteres=>{
      console.log(allCharacteres);
      filters = allCharacteres.results;
      console.log(filters);
      crearCharacters(filters);
    });
  }else if (types.length===2){
    getCharactersByFilter2Filter(types,valores).then(allCharacteres=>{
      filters = allCharacteres.results;
      console.log(filters);
      crearCharacters(filters);
    });
  }else{
    getCharactersByFilter3Filter(types,valores).then(allCharacteres=>{
      filters = allCharacteres.results;
      console.log(filters);
      crearCharacters(filters);
    });
  }
  document.querySelectorAll('.aside_radio').forEach((x) => x.checked=false);
  filters='';
}
// eslint-disable-next-line no-unused-vars
function getCharacters(){
  getAllCharacters().then(allCharacteres=>{
    document.querySelector('.section').innerHTML='';
    const all=allCharacteres.results;
    crearCharacters(all);
  });
}


async function data(query) {
  const response = await fetch('https://rickandmortyapi.com/api/character', {});
  const data = await response.json();
  const results = data.results.filter(character => character.name.includes(query));
  return results;
}



async function findByPage(query) {
  const response = await fetch('https://rickandmortyapi.com/api/character/?page='+query, {});
  const data = await response.json();
  return data;
}

let pagAnterior=1;
// eslint-disable-next-line no-unused-vars
function cambiarPagina(valor){
  document.querySelector('.section').innerHTML='';
  console.log(pagAnterior);
  document.querySelector('.pagination_item'+pagAnterior).style.border='none';
  pagAnterior=valor;
  document.querySelector('.pagination_item'+pagAnterior).style.borderRadius= '5px';
  document.querySelector('.pagination_item'+pagAnterior).style.border= '4px solid powderblue';
  findByPage(valor).then(all=>{
    if(all.results.length===0){
      crearNoCharacteres();
    }else{
      crearCharacters(all.results);
    }

  });
}
// eslint-disable-next-line no-unused-vars
function getValor(){
  document.querySelector('.section').innerHTML='';
  const prueba=document.getElementById('buscar').value;
  data(prueba).then(all=>{
    if(all.length===0){
      crearNoCharacteres();
    }
    crearCharacters(all);
  });
}
function crearNoCharacteres(){
  let imgNotFound=document.createElement('img');
  let titleNoFound=document.createElement('h3');
  titleNoFound.textContent='Oops! No results!';
  titleNoFound.className='section_title-not-found';
  imgNotFound.src='images/noElement.png';
  imgNotFound.className='section_image-not-found';
  document.querySelector('.section').append(titleNoFound);
  document.querySelector('.section').append(imgNotFound);
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

/*
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

}*/