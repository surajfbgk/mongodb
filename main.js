var canvas=document.querySelector('canvas');
var video=document.querySelector('video');
var btnDownload=document.querySelector('#download');
var btnCapture=document.querySelector('#capture');
var btnVideo=document.querySelector('#btn-video');


btnVideo.addEventListener("click",()=>{
    try {
        navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:true}).then((stream)=>{
            video.srcObject=stream;
        });
    } catch (error) {
        alert(error);
    }
});

btnCapture.addEventListener("click",()=>{
    try {
        var obj=canvas.getContext("2d");
        obj.drawImage(video,0,0,720,640);
    } catch (error) {
        alert(error);
    }
});

btnDownload.addEventListener("click",()=>{
    try {
        var dt=new Date();
        var dataUri=canvas.toDataURL();
        var a=document.createElement('a');
        a.href=dataUri;
        a.download=`${dt}.png`;
        a.click();
    } catch (error) {
        alert(error);
    }
});


