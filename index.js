const meowb = document.querySelector('.meowb');
const meow = document.querySelector('.meow');

meowb.addEventListener('click', () => {
  meow.value = meow.value.replace(/\w+/g, 'meow') + '😺 Pinky.';
});
