// Add to Library
function Library() {}

Library.prototype.addBookToLibrary = () => {
  let formBox = document.querySelector('.form');
  formBox.addEventListener('submit', (btn) => {
    btn.preventDefault();
    const author = document.querySelector('.authorInput');
    const titleInput = document.querySelector('.titleInput');
    const numOfPagesInput = document.querySelector('.numOfPagesInput');
    const checkBox = document.querySelector('#checkBox');
    if (formBox.name === 'edit') {
      const libIndex = myLibrary.findIndex((lib) => lib['_id'] === formBox.nonce);
      const bookObj = libObjFunc(formBox.nonce);
      myLibrary[libIndex] = bookObj;
      rmInput();
      formBox.style.display = 'none';
    } else {
      const bookObj = libObjFunc(myLibrary.length);
      myLibrary.push(bookObj);
      rmInput();
    }
    mapBooks();
    function libObjFunc() {
      let bookObj = {
        _id: String(myLibrary.length),
        author: author.value,
        title: titleInput.value,
        numOfPages: numOfPagesInput.value,
        isRead: checkBox.checked,
      };
      return bookObj;
    }
    function rmInput(params) {
      author.value = '';
      titleInput.value = '';
      numOfPagesInput.value = '';
      checkBox.checked = false;
      formBox.name = '';
      formBox.nonce = '';
    }
  });
};
