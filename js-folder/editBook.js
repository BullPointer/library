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
        passFunc(arr);
      }
    }

    if (myLibrary.length >= 2) {
      editBtn.removeEventListener('click', firstEditFunc);
      moreEditBtn.forEach((arr) => {
        arr.addEventListener('click', secondEditFunc);
        function secondEditFunc() {
          passFunc(arr);
        }
      });
    }
    function passFunc(btnObj) {
      const bookObj = myLibrary.find((lib) => lib['_id'] === btnObj.id);
      formBox.style.display = 'block';
      formBox.name = 'edit';
      formBox.nonce = btnObj.id;
      author.value = bookObj.author;
      titleInput.value = bookObj.title;
      numOfPagesInput.value = bookObj.numOfPages;
      checkBox.checked = Boolean(bookObj.isRead);
    }
  }
}