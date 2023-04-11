let myLibrary = [];

class Book extends Library {
  Box() {
    super.Box();

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
  }
}
const newBook = new Book('Player Of the Match');
newBook.Box();
mapBooks();
welcomeFunc();
