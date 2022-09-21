/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */

const form = document.getElementById('books');

class books {
  constructor(tittle, autor) {
    this.tittle = tittle;
    this.autor = autor;
  }
}

class methods {
  addbook(book) {
    const productCard = document.getElementById('statusbooks');
    const element = document.createElement('div');
    element.classList.add('bookstyle');
    element.innerHTML = `
      "${book.tittle}" by ${book.autor}
      <div>
      <button type="button" name="deletebook">remove</button>
      <div>
        `;
    productCard.appendChild(element);
  }

  resetform() {
    document.getElementById('books').reset();
  }

  removebook(element) {
    if (element.name === 'deletebook') {
      element.parentElement.parentElement.remove();
    }
  }
}

function send(event) {
  const tittlebook = document.getElementById('tittleBook').value;
  const name = document.getElementById('nameAutor').value;
  const book = new books(tittlebook, name);
  const ui = new methods();
  ui.addbook(book);
  ui.resetform();

  /* local storage */
  if (localStorage.getItem('books') === null) {
    const books = [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  } else {
    const books = JSON.parse(localStorage.getItem('books'));
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  event.preventDefault();
}

form.addEventListener('submit', send);

function erasebook(e) {
  const ui = new methods();
  ui.removebook(e.target);
}

document.getElementById('statusbooks').addEventListener('click', erasebook);


function listbooks(event) {
  event.preventDefault();
  const styleHeaderForm = document.getElementById('header-line')
  const books = document.getElementById('books');
  const statusbooks = document.getElementById('statusbooks');
  styleHeaderForm.textContent = "all awesome books";
  books.style.display = 'none'
  statusbooks.style.display='flex';
  const contact = document.getElementById('contact');
  contact.style.display = 'none'
  
}

function displayContact(event) {
  event.preventDefault();
  const books = document.getElementById('books');
  const headerLine = document.getElementById('header-line');
  books.style.display='none'
  headerLine.textContent = "Contact information";
  const contact = document.getElementById('contact');
  contact.style.display='flex';
  const statusbooks = document.getElementById('statusbooks');
  statusbooks.style.display = 'none'
  const seeinfo= document.getElementById('see');
  seeinfo.style.display='flex'
}

function  displayform(event) {
  
  event.preventDefault();
  const books = document.getElementById('books');
  const headerLine = document.getElementById('header-line');
  books.style.display='flex'
  headerLine.textContent = "Add a new book";
  const contact = document.getElementById('contact');
  contact.style.display='none';
  const statusbooks = document.getElementById('statusbooks');
  statusbooks.style.display = 'none'
  const see = document.getElementById('see');
  see.style.display = 'none';
}

function currentTime(){
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("time").innerText = time;
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();


