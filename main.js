function setup() {
  video = createCapture(VIDEO);
  video.size(500,500);

  canvas = createCanvas(550,550);
  canvas.position(550,150);

  poseNet = ml5.poseNet(video,modelLoaded);
}


function modelLoaded()
{
     console.log('PoseNet Is Initialized');
}

function gotPose(error,results)
{
  if(results.length > 0) 
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    diffrence = floor(leftWristX - rightWristX);
  }  
}

function draw()
{
  background('#6C91C2');
  textSize(10);
  Fill('#FFEE787');
  text('Veer',500,500)
}
