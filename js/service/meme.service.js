'use strict'

const gImgs = _createImgs();
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Write something Funny!',
            size: 20,
            align: 'center',
            color: 'white',
            font: 'impact',
            stroke: 'black',
            isSelected: true,
            isDrag: false,
            pos: { x: 250, y: 50 },
        },
    ]
};

function _createImg(id) {
    const img = {
        id,
        url: `img/${id}.jpg`,
    }
    return img
}

function _createImgs() {
    var galley = [];
    for (let i = 1; i <= 18; i++) {
        const currImg = _createImg(i);
        galley.push(currImg)
    }
    return galley
}


function addLines() {
    if (gMeme.lines.length > 10) return
    if (gMeme.lines.length === 0) addLine();
    gMeme.lines[gMeme.selectedLineIdx].isSelected = false;
    gMeme.selectedLineIdx++
    const lastObj = gMeme.lines.length - 1;
    const currObjY = gMeme.lines[lastObj].pos.y;
    var newLine = {
        txt: 'Write something Funny!',
        size: 20,
        align: 'center',
        color: 'white',
        font: 'impact',
        stroke: 'black',
        isSelected: true,
        pos: { x: 250, y: currObjY + 50 },
    }
    gMeme.lines.push(newLine);
}


function addLine() {
    gMeme.selectedLineIdx = 0;
    const line = {
        txt: 'Write something Funny!',
        size: 20,
        align: 'center',
        color: 'white',
        font: 'impact',
        stroke: 'black',
        isSelected: true,
        pos: { x: 250, y: 50 },
    }
    gMeme.lines.push(line);
}


function getImgs() {
    return gImgs
}

function updateMeme(imgId) {
    gMeme.selectedImgId = imgId;
}

function getMeme() {
    return gMeme
}

function getSelectedLine(){
    return gMeme.lines[gMeme.selectedLineIdx];
}

function setLineText(userText) {
    getSelectedLine().txt = userText;
}

function setTextColor(userColor) {
    getSelectedLine().color = userColor
}

function setFontSize(val) {
    if ( getSelectedLine().size < 20 && val === -2) return
    if ( getSelectedLine().size > 70 && val === 2) return
    getSelectedLine().size += val;
    return  getSelectedLine().size
}

function changeLines(currentText) {
    getSelectedLine().isSelected = false;
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.lines[0].isSelected = true;
        currentText.value = gMeme.lines[0].txt;
        gMeme.selectedLineIdx = 0;
        return
    }

    gMeme.selectedLineIdx++
    getSelectedLine().isSelected = true;
    currentText.value = getSelectedLine().txt;
}

function removeLine() {
    if (gMeme.lines.length === 0) return
    var currLine = gMeme.selectedLineIdx;
    gMeme.lines.splice(currLine, 1)
    gMeme.selectedLineIdx = 0;
}


function alignText(align) {
    getSelectedLine().align = align;
    var x;
    if (align === 'left') x = 30;
    else if (align === 'center') x = 250;
    else if (align === 'right') x = 450;
    getSelectedLine().pos.x = x;
}


function moveText(val) {
    if ( getSelectedLine().pos.y < 20 && val === -2) return
    if ( getSelectedLine().pos.y > 480 && val === 2) return
     getSelectedLine().pos.y += val;
}


function setFontFamily(val) {
    switch (val) {
        case 'impact':
             getSelectedLine().font = 'impact';
            break;
        case 'arial':
             getSelectedLine().font = 'arial';
            break;
        case 'times':
             getSelectedLine().font = 'times';
            break;
        case 'play':
             getSelectedLine().font = 'playFair';
            break;
        case 'imperial':
             getSelectedLine().font = 'imperial';
        default:
             getSelectedLine().font = 'impact'
    }
}


function setTextStroke(userStroke) {
     getSelectedLine().stroke = userStroke;
}



function isLineClicked(clickedPos) {
    const currentLine =  getSelectedLine();
    const posX = currentLine.pos.x
    const posY = currentLine.pos.y
    var textWidth = gCtx.measureText(currentLine.txt).width + 20;
    var textHight = currentLine.size + 20;
    return Math.abs(clickedPos.x - posX) <= textWidth / 2 && Math.abs(clickedPos.y - posY) <= textHight / 2;
}

function setLineDrag(isDrag) {
     getSelectedLine().isDrag = isDrag
}

function moveLine(dx, dy) {
     getSelectedLine().pos.x += dx
     getSelectedLine().pos.y += dy
}

function switchPages() {
    document.querySelector('.meme-modal').style.display = 'none';
    document.querySelector('.memes-container').style.display = 'none';
    document.querySelector('.img-container').style.display = 'grid';
    document.querySelector('.about-me').style.display = 'flex';
}
