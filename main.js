class books{
    constructor(tittle,autor){
        this.tittle = tittle;
        this.autor= autor;
    }
}

class UI{
    addbook(book){
        const productCard = document.getElementById('statusbooks');
        const element = document.createElement('div');
        element.innerHTML =`
        <div class= 'bookitem'>
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
    resetform(){
        document.getElementById('books').reset();
    }
    removebook(element){
        if(element.name ==='deletebook'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

const form = document.getElementById('books');
form.addEventListener("submit", send);



function send(event){
    const tittlebook = document.getElementById('tittleBook').value;
    const name = document.getElementById('nameAutor').value;
    const book = new books(tittlebook,name);
    const ui = new UI;
    ui.addbook(book);

    /* local storage */

    if(localStorage.getItem('books')=== null){
        let books = [];
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }else{
        let books = JSON.parse(localStorage.getItem('books'));
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    event.preventDefault();

}

document.getElementById('statusbooks').addEventListener('click', erasebook);

function erasebook(e){
    const ui = new UI();
    ui.removebook(e.target);
}





