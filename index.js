import image from './assets/jsLogo.png';

const titleHTML = document.createElement('h1');
titleHTML.textContent = 'I Love JavaScript';

const imgHTML = document.createElement('img');
imgHTML.className = 'img';
imgHTML.src = image;

document.body.append(titleHTML, imgHTML);

console.log('Hello World!');
