const meowb = document.querySelector('.meowb');
const meow = document.querySelector('.meow');

meowb.addEventListener('click', () => {
  // Replace every word with "meow" and add "😺 Pinky." at the end.
  meow.textContent = meow.textContent.replace(/\w+/g, 'meow') + '😺 Pinky.';
});
