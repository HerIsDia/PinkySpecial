const meowb = document.querySelector('.meowb');
const meow = document.querySelector('.meow');

meowb.addEventListener('click', () => {
  // Replace every word with "meow" and add "😺 Pinky." at the end. (Note: meow is a textArea)
  meow.value = meow.value.replace(/\w+/g, 'meow') + '😺 Pinky.';
});
