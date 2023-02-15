function initVideo() {
    var videoElem = document.getElementById("video-src");
    var streamContraints = {
        audio: true,
        video: { width: 1920, height: 1080 },
    };
    var canvaselement = document.querySelector('#canvaselement');
    var ctx = canvaselement.getContext('2d', { alpha: false });


    if (videoElem) {
        navigator.mediaDevices
        .getUserMedia(streamContraints)
        .then(gotStream)
        .catch(function (e) {
            if (confirm("An error with camera occured:(" + e.name + ") Do you want to reload?")) {
                location.reload();
            }
        });
    }
    //if stream found 
    function gotStream(stream) {
        videoElem.srcObject = stream 
        videoElem.play()
    }


    return { ctx: ctx, videoElem: videoElem, canvaselement: canvaselement };
}