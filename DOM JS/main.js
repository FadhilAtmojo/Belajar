// get element by id

const judul = document.getElementById('judul');
judul.style.color = 'red';

// get elements by tag name -> hasilnya HTML collection
const paragraf = document.getElementsByTagName('p');
console.log(paragraf);
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = 'azure';
}

// get element by classname -> hasilnya HTMLcollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = '<a href="#">Fadhill Atmojo<a>';

// query selector hasilnya element
const p4 = document.querySelector('section#b p');
p4.style.color = 'red';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = "lightblue";

// query selector all hasilnya nodelist
const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#ccc';
}

// // mengubah node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.color = 'red';


// dom manipulation classlist
const paragraf1 = document.querySelector("section#a .p1");
paragraf1.classList.add("fontColor");