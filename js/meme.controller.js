'use strict'

var gCanvas;
var gCtx;
var gTouchEvents = ['touchstart', 'touchmove', 'touchend'];



function onRenderMeme(imgId) {
  updateMeme(imgId);
  renderMeme();
}


function renderMeme() {
  const elModal = document.querySelector('.meme-modal').style.display = 'flex';
  const elImgContainer = document.querySelector('.img-container').style.display = 'none';
  const elAboutMe = document.querySelector('.about-me').style.display = 'none';
  gCanvas.style.display = 'block';
  var meme = getMeme();
  drawImg(meme);
}


function drawImg(meme) {
  var img = new Image();
  img.src = `img/${meme.selectedImgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    meme.lines.forEach(line => drawText(line));
  };
}


function drawText(line) {
  const textHeight = line.height;
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = line.align;
  gCtx.font = `${line.size}pt ${line.font}`;
  gCtx.fillStyle = line.color;
  gCtx.strokeStyle = line.stroke;
  gCtx.fillText(line.txt, gCanvas.width / 2, textHeight);
  gCtx.strokeText(line.txt, gCanvas.width / 2, textHeight);
  drawRect(line)
}


function drawRect(line) {
  var textHeight = parseInt(gCtx.font);
  var textLenght = gCtx.measureText(line.text).width;
  gCtx.rect(gCanvas.width / 2, line.height - 20, textLenght * 3 , textHeight * 1.6);
  gCtx.strokeStyle = '#1b1b1b';
  gCtx.stroke();
}


function onSetLineText() {
  var userText = document.querySelector('input[name=txt]').value;
  setLineTxt(userText);
  renderMeme();
}

function onSetTextColor() {
  var userColor = document.querySelector('input[name=user-color]').value;
  setTextColor(userColor);
  renderMeme();
}

function onSetFontSize(val) {
  setFontSize(val);
  renderMeme();
}

function onChangeLines() {
  changeLines();
  renderMeme();
}

function onAlignText(val) {
  alignText(val);
  renderMeme()
}

function onMoveText(val) {
  moveText(val);
  renderMeme();
}

function addListeners() {
  gCanvas.addEventListener('mouseup', getPos)
  gCanvas.addEventListener('touchstart', getPos)
}

function onSetTextStroke() {

}

function onSetFontFamily(val) {
  setFontFamily(val);
  renderMeme();
}


function getPos(ev) {
  if (!gTouchEvents.includes(ev.type)) {
    var pos = {
      x: ev.offsetX,
      y: ev.offsetY
    }
  } else {
    ev.preventDefault();
    ev = ev.changedTouches[0];
    pos = {
      x: ev.pageX - ev.target.offsetLeft,
      y: ev.pageY - ev.target.offsetTop
    }
  }
  console.log(pos);
  return pos
}

function onSetTextStroke() {
  const userStroke = document.querySelector('input[name=user-stroke]').value;
  setTextStroke(userStroke);
  renderMeme()
}