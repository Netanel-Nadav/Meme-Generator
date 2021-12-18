'use strict'

var gCanvas;
var gCtx;
var gTouchEvents = ['touchstart', 'touchmove', 'touchend'];
const STORAGE_KEY = 'memeDB';
var gSavedMemes;


function init() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  renderGallery();
  addListeners()
}


function onRenderMeme(imgId) {
  updateMeme(imgId);
  renderMeme();
}


function addListeners() {
  gCanvas.addEventListener('mouseup', getPos)
  gCanvas.addEventListener('touchstart', getPos)
}


function renderMeme() {
  var meme = getMeme();
  const elModal = document.querySelector('.meme-modal').style.display = 'flex';
  const elImgContainer = document.querySelector('.img-container').style.display = 'none';
  const elAboutMe = document.querySelector('.about-me').style.display = 'none';
  gCanvas.style.display = 'block';
  drawImg(meme);
}


function drawImg(meme) {
  var img = new Image();
  img.src = `img/${meme.selectedImgId}.jpg`;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    meme.lines.forEach(line => {
      drawText(line);
      drawRect(line);
    });
  }
}


function drawText(line) {
  const positionX = line.pos.x;
  const positionY = line.pos.y;
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = line.align;
  gCtx.font = `${line.size}pt ${line.font}`;
  gCtx.fillStyle = line.color;
  gCtx.strokeStyle = line.stroke;
  gCtx.fillText(line.txt, positionX, positionY);
  gCtx.strokeText(line.txt, positionX, positionY);
}


function drawRect(line) {
  const positionX = line.pos.x;
  const positionY = line.pos.y;
  const textWidth = gCtx.measureText(line.txt).width + 20;
  const textHeight = line.size + 20;
  gCtx.beginPath();
  if (line.align === 'center') gCtx.rect(positionX - textWidth / 2, positionY - line.size, textWidth, textHeight);
  if (line.align === 'left') gCtx.rect(positionX - 10, positionY - line.size, textWidth, textHeight);
  if (line.align === 'right') gCtx.rect(positionX - (textWidth - 10), positionY - line.size, textWidth, textHeight);
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = '#37d6b6';
  gCtx.stroke();
  gCtx.closePath();
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

function onAlignText(align) {
  alignText(align);
  renderMeme()
}

function onMoveText(val) {
  moveText(val);
  renderMeme();
}


function onSetFontFamily(val) {
  setFontFamily(val);
  renderMeme();
}


function onDownloadCanvas(elLink) {
  const data = gCanvas.toDataURL('image/jpeg');
  elLink.href = data;
  elLink.download = 'myMeme.jpeg'
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


function onDeleteLines(){
  deleteLine();
  renderMeme();
}


function onAddLines(){
  console.log('add me!...');
  addLines();
  renderMeme();
}

function onSetTextStroke() {
  const userStroke = document.querySelector('input[name=user-stroke]').value;
  setTextStroke(userStroke);
  renderMeme();
}

function saveMeme(){
  const meme = new Image();
  meme.src = gCanvas.toDataURL()
  gSavedMemes.push(meme.src);
  saveToStorage(STORAGE_KEY, gSavedMemes);
}