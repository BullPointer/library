let myLibrary = [];

function Book() {
  // click button to open form
  const container = document.querySelector('.wrap');
  const clickBook = document.querySelector('.click-book');
  const formBox = document.querySelector('.form');
  clickBook.addEventListener('click', () => {
    formBox.style.display = formBox.style.display === 'block'
      ? 'none' : 'block';
  });
  container.addEventListener('click', () => {
    formBox.style.display = 'none';
  });
  const arr = [];
  console.log(typeof (arr.length), ' My length');
}

Book.prototype = Object.create(Library.prototype);

const newBook = new Book();
newBook.addBookToLibrary();
mapBooks();
welcomeFunc();
