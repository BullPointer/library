let myLibrary = [];

function Book() {}

Book.prototype.books = () => ('Here I am');

function formButton() {
  // click button something to open form
  const clickBook = document.querySelector('.click-book');
  const formBox = document.querySelector('.form');
  clickBook.addEventListener('click', () => {
    formBox.style.display = formBox.style.display === 'block'
      ? 'none' : 'block';
  });
}

// AddBookToLibrary.prototype = Object.create(Book.prototype);
const newBook = new Book();
newBook.books();
addBookToLibrary();
mapBooks();
formButton();
