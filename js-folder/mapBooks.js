function mapBooks() {
  const container = document.querySelector('.container');
  container.textContent = '';
  myLibrary.forEach((arr) => {
    const book = document.createElement('div');
    const author = document.createElement('div');
    const title = document.createElement('div');
    const numOfPages = document.createElement('div');
    const isRead = document.createElement('div');
    const rmbtn = document.createElement('div');
    const editbtn = document.createElement('div');

    book.classList.add('book');
    author.classList.add('txt');
    title.classList.add('txt');
    numOfPages.classList.add('txt');
    isRead.classList.add('txt');
    editbtn.classList.add('editBtn');
    rmbtn.classList.add('rmBtn');

    author.textContent = arr.author;
    title.textContent = arr.title;
    numOfPages.textContent = arr.numOfPages;
    isRead.textContent = arr.isRead;
    editbtn.textContent = 'Edit';
    editbtn.id = arr['_id'];
    rmbtn.textContent = 'Remove';
    rmbtn.id = arr['_id'];

    book.append(author, title, numOfPages, isRead, editbtn, rmbtn);
    container.appendChild(book);
  });
  editBookFunc();
  formRmButton();
}
