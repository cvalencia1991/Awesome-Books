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

class UI {
  addbook(book) {
    const productCard = document.getElementById('statusbooks');
    const element = document.createElement('div');
    element.innerHTML = `
        <div>
            <div class="bookstyle">
                ${book.tittle}<br>
                ${book.autor}<br>
                <button type="button" name="deletebook">remove</button>
                <hr class="styleline">
            </div>
        </div>
        `;
    productCard.appendChild(element);
    this.resetform();
  }

  resetform() {
    document.getElementById('books').reset();
  }

  removebook(element) {
    if (element.name === 'deletebook') {
      element.parentElement.parentElement.parentElement.remove();
    }
  }
}

function send(event) {
  const tittlebook = document.getElementById('tittleBook').value;
  const name = document.getElementById('nameAutor').value;
  const book = new books(tittlebook, name);
  const ui = new UI();
  ui.addbook(book);

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
  const ui = new UI();
  ui.removebook(e.target);
}

document.getElementById('statusbooks').addEventListener('click', erasebook);
