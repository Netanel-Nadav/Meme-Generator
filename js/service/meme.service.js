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
            pos: { x: 250, y: 50 },
        },
    ]
};

function _createImg(id) {
    const img = {
        id,
        url: `img/${id}.jpg`
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
    if (!userText) return
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

function changeLines() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = -1;
    gMeme.selectedLineIdx++
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
        case 'gill':
            gMeme.lines[gMeme.selectedLineIdx].font = 'gill';
            break;
        default:
            gMeme.lines[gMeme.selectedLineIdx].font = 'impact'
    }
}


function setTextStroke(userStroke) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = userStroke;
}

function deleteLine() {
    if (gMeme.lines.length === 0) return
    var currLine = gMeme.selectedLineIdx;
    gMeme.lines.splice(currLine, 1)
}

function addLines() {
    if (gMeme.lines.length > 10) return
    if (gMeme.lines.length === 0) addLine();
    gMeme.selectedLineIdx ++
    const lastObj = gMeme.lines.length -1;
    const currObjY = gMeme.lines[lastObj].pos.y;
    var newLine = {
            txt: 'Write something Funny!',
            size: 20,
            align: 'center',
            color: 'blue',
            font: 'impact',
            stroke: 'black',
            pos: {x: 250, y: currObjY + 50},
    }
    gMeme.lines.push(newLine);
}


function addLine(){
    gMeme.selectedLineIdx = 0;
    const line = {
        txt: 'Write something Funny!',
        size: 20,
        align: 'center',
        color: 'red',
        font: 'impact',
        stroke: 'black',
        pos: { x: 250, y: 50 },
    }
    gMeme.lines.push(line);
}









// change Lines //
// if (gMeme.selectedLineIdx === gMeme.lines.length) {
//     gMeme.selectedLineIdx = 0;
// } else {
//     var currLine = gMeme.selectedLineIdx;
//     currLine++
// }