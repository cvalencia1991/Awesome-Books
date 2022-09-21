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

// const list = document.querySelector('#list')
// list.onclick = displaybooks;
function displaybooks(event) { 
  event.preventDefault();
 const styleHeaderForm = document.getElementById('styleheader')
 styleHeaderForm.style.display='none';
 const headerLine = document.getElementById('header-line');
 headerLine.textContent = "all awesome books";
 const books = document.getElementById('statusbooks');
 books.style.display = 'none' // document.getElementById(id).style.property = new style

}

function displayContact(event) { 
  event.preventDefault();
 const styleHeaderForm = document.getElementById('styleheader')
//  styleHeaderForm.style.display='none';
 const headerLine = document.getElementById('header-line');
 headerLine.textContent = "Contact information";

//  const element = document.createElement('div');
 styleHeaderForm.innerHTML = `
 <div>
 <p>Do you have any questions or just want to say "Helo"?<br>
    You can reach out to us!<br><br>
    <ul>
    <li>Our email: ceservalencia@gmail.com
    <li>Our phone number: 00949y345853498579
    <li>Our address: Streetname 4364, 74834 City, country
    <ul>
 <div>
   `;
   const cardboook = document.getElementById('cardboook')
   cardboook.style.display='none';
  //  headerLine.insertAdjacentElement(element);

}