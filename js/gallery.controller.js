'use strict'


function renderGallery(){
    const imgs = getGimgs();
    const strHTML = imgs.map(img => {
      return `<img src="${img.url}" onclick="onRenderMeme('${img.id}')" alt="">`
    })
    document.querySelector('.img-container').innerHTML = strHTML.join('');
}

function toggleMenu() {
  document.body.classList.toggle('menu-open');
}
