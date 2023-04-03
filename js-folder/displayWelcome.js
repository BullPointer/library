// document.addEventListener('click', displayForm);
// function displayForm(params) {
//   // !clickBook.contains(event.target)
//   if (!clickBook.contains(formBox)) {
//     formBox.style.display = 'none';
//   }
// }

function welcomeFunc(params) {
  const welcome = document.querySelector('.welcome-box');
  window.onload = () => {
    if (myLibrary.length === 0) {
      welcome.style.display = 'block';
    }
  };
}
