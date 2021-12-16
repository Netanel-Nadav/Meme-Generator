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
            height: 50
    },
    {
            txt: 'Write something Funny!',
            size: 20,
            align: 'center',
            color: 'red',
            height: 400
}
    ]
};

function _createImg(id) {
    const img = {
        id,
        url: `../../imgs/${id}.jpg`
    }
    return img
}

function _createImgs() {
    var galley = [];
    for (var i = 1; i <= 18; i++) {
        var currImg = _createImg(i);
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