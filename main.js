nosex=0;
nosey=0;
leftearx=0;
lefteary=0;
function preload(){
lips=loadImage("https://i.postimg.cc/vBTcc6TQ/download-removebg-preview.png");
wig=loadImage("wig.png");
}
function setup(){
   canvas=createCanvas(300,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.size(300,300);
   video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function draw(){
image(video,0,0,300,300);
image(lips, nosex-30, nosey+10, 60,60);
image(wig, leftearx-240, lefteary-180, 380,400);

}
function takesnapshot(){
    save("filterimage.jpg")
}
function modelloaded(){
    console.log("model has been initialized");

}
function gotposes(result){
    if(result.length>0){
    console.log(result);
    console.log("nosex="+result[0].pose.nose.x);
    console.log("nosey="+result[0].pose.nose.y);
    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y;
    leftearx=result[0].pose.leftEar.x;
    lefteary=result[0].pose.leftEar.y;
    }
}