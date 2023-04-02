function formRmButton() {
  if (myLibrary.length >= 1) {
    let rmBtn = document.querySelector('.rmBtn');
    let moreRmBtn = document.querySelectorAll('.rmBtn');

    if (myLibrary.length >= 1) {
      rmBtn.addEventListener('click', firstRmFunc);
      function firstRmFunc() {
        const library = myLibrary.filter((lib) => lib['_id'] !== rmBtn.id);
        myLibrary = library;
        mapBooks();
      }
    }

    if (myLibrary.length >= 2) {
      rmBtn.removeEventListener('click', firstRmFunc);
      moreRmBtn.forEach((arr) => {
        arr.addEventListener('click', secondRmFunc);
        function secondRmFunc() {
          const library = myLibrary.filter((lib) => lib['_id'] !== arr.id);
          myLibrary = library;
          mapBooks();
        }
      });
    }
  }
}
