class books{
    constructor(tittle,autor){
        this.tittle = tittle;
        this.autor= autor;
    }
}

class UI{
    addbook(book){
        document.getElementById


    }
    removebook(){

    }
    showMessage(){

    }
}

const form = document.getElementById('books');
form.addEventListener("submit", send)

function send(event){

    const tittlebook = document.getElementById('tittleBook').value;
    const name = document.getElementById('nameAutor').value;

    const book = new books(tittlebook,name);


    event.preventDefault();
}