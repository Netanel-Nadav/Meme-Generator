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
            color: 'red',
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


function getGimgs() {
    return gImgs
}

function updateMeme(imgId) {
    gMeme.selectedImgId = imgId;
}

function getMeme() {
    return gMeme
}

function setLineTxt(userText) {
    gMeme.lines[gMeme.selectedLineIdx].txt = userText;
}

function setTextColor(userColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = userColor
}

function setFontSize(val) {
    if (gMeme.lines[gMeme.selectedLineIdx].size < 20 && val === -2) return
    if (gMeme.lines[gMeme.selectedLineIdx].size > 70 && val === 2) return
    gMeme.lines[gMeme.selectedLineIdx].size += val;
    return gMeme.lines[gMeme.selectedLineIdx].size
}

function changeLines(currentText) {
    gMeme.lines[gMeme.selectedLineIdx].isSelected = false;
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.lines[0].isSelected = true;
        currentText.value = gMeme.lines[0].txt;
        gMeme.selectedLineIdx = 0;
        return
    }

    gMeme.selectedLineIdx++
    gMeme.lines[gMeme.selectedLineIdx].isSelected = true;
    currentText.value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function deleteLine() {
    if (gMeme.lines.length === 0) return
    var currLine = gMeme.selectedLineIdx;
    gMeme.lines.splice(currLine, 1)
    gMeme.selectedLineIdx = 0;
}


function alignText(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align;
    var x;
    if (align === 'left') x = 30;
    else if (align === 'center') x = 250;
    else if (align === 'right') x = 450;
    gMeme.lines[gMeme.selectedLineIdx].pos.x = x;
}


function moveText(val) {
    if (gMeme.lines[gMeme.selectedLineIdx].pos.y < 20 && val === -2) return
    if (gMeme.lines[gMeme.selectedLineIdx].pos.y > 480 && val === 2) return
    gMeme.lines[gMeme.selectedLineIdx].pos.y += val;
}


function setFontFamily(val) {
    switch (val) {
        case 'impact':
            gMeme.lines[gMeme.selectedLineIdx].font = 'impact';
            break;
        case 'arial':
            gMeme.lines[gMeme.selectedLineIdx].font = 'arial';
            break;
        case 'times':
            gMeme.lines[gMeme.selectedLineIdx].font = 'times';
            break;
        case 'play':
            gMeme.lines[gMeme.selectedLineIdx].font = 'playFair';
            break;
        case 'imperial':
            gMeme.lines[gMeme.selectedLineIdx].font = 'imperial';
        default:
            gMeme.lines[gMeme.selectedLineIdx].font = 'impact'
    }
}


function setTextStroke(userStroke) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = userStroke;
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
        color: 'blue',
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
        color: 'red',
        font: 'impact',
        stroke: 'black',
        isSelected: true,
        pos: { x: 250, y: 50 },
    }
    gMeme.lines.push(line);
}


function isLineClicked(clickedPos) {
    const currentLine = gMeme.lines[gMeme.selectedLineIdx];
    const posX = currentLine.pos.x
    const posY = currentLine.pos.y
    var textWidth = gCtx.measureText(currentLine.txt).width + 20;
    var textHight = currentLine.size + 20;
    return Math.abs(clickedPos.x - posX) <= textWidth / 2 && Math.abs(clickedPos.y - posY) <= textHight / 2;
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy
}

function switchPages() {
    document.querySelector('.meme-modal').style.display = 'none';
    document.querySelector('.memes-container').style.display = 'none';
    document.querySelector('.img-container').style.display = 'grid';
    document.querySelector('.about-me').style.display = 'flex';
}
