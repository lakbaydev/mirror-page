(function(){
    const fps=60;
    const mirrorCount = 10;
    const sizeCap = 8;
    const offset = 10;
    const colors = [
        {c1: '#355c7d', c2: '#6c5b7b'},
        {c1: '#a5b2b5', c2: '#bfd0ca'},
        {c1: '#f3b8b1', c2: '#f3d2ac'}
    ];
    let canvasInterval = null;
    const videoObj = initVideo();
    let canvaselement = videoObj.canvaselement;
    let mirrorPositions = [];

    for (let i = 0; i < mirrorCount; i++) {
        let pos = {};
        pos.x = Math.floor(Math.random() * canvaselement.width);
        pos.y = Math.floor(Math.random() * canvaselement.height);

        let sizeRand = Math.floor(Math.random() * sizeCap);
        pos.width = canvaselement.width / sizeRand;
        pos.height = canvaselement.height / sizeRand;
        let colorRand = Math.floor(Math.random() * colors.length);
        pos.style = colorRand >= 0 && colorRand < colors.length ? colors[colorRand] : colors[0];
        mirrorPositions.push(pos);
    }

    function drawBg(pos) {
        videoObj.ctx.fillStyle = pos.style.c1;
        videoObj.ctx.fillRect(pos.x - (offset * 2), pos.y - (offset * 2), pos.width + (offset * 4), pos.height + (offset * 4));

        videoObj.ctx.fillStyle = pos.style.c2;
        videoObj.ctx.fillRect(pos.x - offset, pos.y - offset, pos.width + (offset * 2), pos.height + (offset * 2));
    }

    function drawMirrors() {
        for (let i = 0; i < mirrorCount; i++) {
            let pos = mirrorPositions[i];
            drawBg(pos);
            videoObj.ctx.drawImage(videoObj.videoElem, pos.x, pos.y, pos.width, pos.height);
        }
    }

    canvasInterval = window.setInterval(() => {
        drawMirrors();
    }, 1000 / fps);
})();
