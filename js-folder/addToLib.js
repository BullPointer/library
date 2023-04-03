// Add to Library
function Library() {}

Library.prototype.addBookToLibrary = () => {
  const welcome = document.querySelector('.welcome-box');
  let formBox = document.querySelector('.form');
  formBox.addEventListener('submit', (btn) => {
    btn.preventDefault();
    const author = document.querySelector('.authorInput');
    const titleInput = document.querySelector('.titleInput');
    const numOfPagesInput = document.querySelector('.numOfPagesInput');
    const checkBox = document.querySelector('#checkBox');
    if (formBox.name === 'edit') {
      const libIndex = myLibrary.findIndex((lib) => lib['_id'] === formBox.nonce);
      const bookObj = {
        _id: String(formBox.nonce),
        author: author.value,
        title: titleInput.value,
        numOfPages: numOfPagesInput.value,
        isRead: checkBox.checked,
      };
      myLibrary[libIndex] = bookObj;
      rmInput();
      formBox.style.display = 'none';
    } else if ((author.value.length <= 3)
    || (titleInput.value.length <= 3)
    || (Number(numOfPagesInput.value) <= 5)) {
      const msg = document.createElement('div');
      msg.classList.add('errorMsg');
      msg.textContent = 'Text is lesser than 3 or Number of Pages is less than 1';
      msg.style = 'color: red; font-size: 12px';
      formBox.appendChild(msg);
      msg.textContent = '';
      return false;
    } else {
      welcome.style.display = 'none';
      const bookObj = {
        _id: String(myLibrary.length),
        author: author.value,
        title: titleInput.value,
        numOfPages: numOfPagesInput.value,
        isRead: checkBox.checked,
      };
      myLibrary.push(bookObj);
      rmInput();
    }
    mapBooks();
    function rmInput() {
      author.value = '';
      titleInput.value = '';
      numOfPagesInput.value = '';
      checkBox.checked = false;
      formBox.name = '';
      formBox.nonce = '';
    }
  });
};
