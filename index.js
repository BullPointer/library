let myLibrary = [];

function Book() {
  // click button to open form
  const clickBook = document.querySelector('.click-book');
  const formBox = document.querySelector('.form');
  clickBook.addEventListener('click', () => {
    formBox.style.display = formBox.style.display === 'block'
      ? 'none' : 'block';
  });
}

Book.prototype = Object.create(Library.prototype);

const newBook = new Book();
newBook.addBookToLibrary();
mapBooks();
