'use strict'


function init() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  renderGallery();
  addListeners()
}


function renderGallery(){
  console.log('@!@!@!');
    const imgs = getGimgs();
    console.log(imgs);
    const strHTML = imgs.map(img => {
      return `<img src="${img.url}" onclick="onRenderMeme('${img.id}')" alt="">`
    })
    document.querySelector('.img-container').innerHTML = strHTML.join('');
}

function toggleMenu() {
  document.body.classList.toggle('menu-open');
}
