/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
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
  const styleHeaderForm = document.getElementById('header-line');
  const books = document.getElementById('books');
  const statusbooks = document.getElementById('statusbooks');
  const contact = document.getElementById('contact');
  styleHeaderForm.textContent = 'all awesome books';
  books.style.display = 'none';
  statusbooks.style.display = 'flex';
  contact.style.display = 'none';
  event.preventDefault();
}

function displayContact(event) {
  const books = document.getElementById('books');
  const headerLine = document.getElementById('header-line');
  const contact = document.getElementById('contact');
  const statusbooks = document.getElementById('statusbooks');
  const seeinfo = document.getElementById('see');
  books.style.display = 'none';
  headerLine.textContent = 'Contact information';
  contact.style.display = 'flex';
  statusbooks.style.display = 'none';
  seeinfo.style.display = 'flex';
  event.preventDefault();
}

function displayform(event) {
  const books = document.getElementById('books');
  const headerLine = document.getElementById('header-line');
  const contact = document.getElementById('contact');
  const statusbooks = document.getElementById('statusbooks');
  const see = document.getElementById('see');
  books.style.display = 'flex';
  headerLine.textContent = 'Add a new book';
  contact.style.display = 'none';
  statusbooks.style.display = 'none';
  see.style.display = 'none';
  event.preventDefault();
}

function currentTime() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh -= 12;
    session = 'PM';
  }

  hh = (hh < 10) ? `0${hh}` : hh;
  mm = (mm < 10) ? `0${mm}` : mm;
  ss = (ss < 10) ? `0${ss}` : ss;
  const time = `${hh}:${mm}:${ss} ${session}`;

  document.getElementById('time').innerText = time;
  const t = setTimeout(() => { currentTime(); }, 1000);
}
currentTime();