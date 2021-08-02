function preload(){

}

function setup() {
     var canvas = createCanvas(500, 500);
     canvas.position(100, 250);

     video = createCapture(VIDEO);
     video.hide();

     
}

function draw() {
      image(video, 0, 0, 500, 500);
     
}


function take_snapshot() {
     save("image.png");
}