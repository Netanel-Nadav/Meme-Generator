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
            height: 50,
            font: 'impact',
            stroke: 'black',
    },
    {
            txt: 'Write something Funny!',
            size: 20,
            align: 'center',
            color: 'red',
            height: 400,
            font: 'impact',
            stroke: 'black',
}
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

function getMeme(){
    return gMeme
}

function setLineTxt(userText){
    if(!userText) return
    gMeme.lines[gMeme.selectedLineIdx].txt = userText;
}

function setTextColor(userColor){
    gMeme.lines[gMeme.selectedLineIdx].color = userColor
}

function setFontSize(val){
    if(gMeme.lines[gMeme.selectedLineIdx].size < 20 && val === -2) return
    if(gMeme.lines[gMeme.selectedLineIdx].size > 70 && val === 2) return
    gMeme.lines[gMeme.selectedLineIdx].size += val;
    return gMeme.lines[gMeme.selectedLineIdx].size
}

function changeLines(){
    if (!gMeme.selectedLineIdx) gMeme.selectedLineIdx = 1;
    else gMeme.selectedLineIdx = 0;
}


function alignText(val){
    if(val === 0) gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    if(val === 1) gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    if(val === -1) gMeme.lines[gMeme.selectedLineIdx].align = 'right'
}


function moveText(val){
    if(gMeme.lines[gMeme.selectedLineIdx].height < 20 && val === -2) return
    if(gMeme.lines[gMeme.selectedLineIdx].height > 480 && val === 2) return
    gMeme.lines[gMeme.selectedLineIdx].height += val;
}


function setFontFamily(val){
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


function setTextStroke(userStroke){
    gMeme.lines[gMeme.selectedLineIdx].stroke = userStroke;
}