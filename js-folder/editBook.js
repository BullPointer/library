function editBookFunc() {
  if (myLibrary.length >= 1) {
    let editBtn = document.querySelector('.editBtn');
    let moreEditBtn = document.querySelectorAll('.editBtn');
    let formBox = document.querySelector('.form');
    let author = document.querySelector('.authorInput');
    let titleInput = document.querySelector('.titleInput');
    let numOfPagesInput = document.querySelector('.numOfPagesInput');
    let checkBox = document.querySelector('#checkBox');

    if (myLibrary.length >= 1) {
      editBtn.addEventListener('click', firstEditFunc);
      function firstEditFunc() {
        formBox.style.display = 'block';
        const bookObj = myLibrary.find((lib) => lib['_id'] === editBtn.id);
        formBox.name = 'edit';
        formBox.nonce = editBtn.id;
        author.value = bookObj.author;
        titleInput.value = bookObj.title;
        numOfPagesInput.value = bookObj.numOfPages;
        checkBox.checked = Boolean(bookObj.isRead);
      }
    }

    if (myLibrary.length >= 2) {
      editBtn.removeEventListener('click', firstEditFunc);
      moreEditBtn.forEach((arr) => {
        arr.addEventListener('click', secondEditFunc);
        function secondEditFunc() {
          formBox.style.display = 'block';
          const bookObj = myLibrary.find((lib) => lib['_id'] === arr.id);
          formBox.name = 'edit';
          formBox.nonce = arr.id;
          author.value = bookObj.author;
          titleInput.value = bookObj.title;
          numOfPagesInput.value = bookObj.numOfPages;
          checkBox.checked = Boolean(bookObj.isRead);
        }
      });
    }
  }
}
