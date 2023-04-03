// Welcome container
function welcomeFunc(params) {
  const welcome = document.querySelector('.welcome-box');
  window.onload = () => {
    if (myLibrary.length === 0) {
      welcome.style.display = 'block';
    }
  };
}
