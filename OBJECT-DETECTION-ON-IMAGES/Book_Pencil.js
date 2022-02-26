var img = "";
var CocossdModelStatus;
function back()
{
    window.location = "index.html";
}
function preload()
{
    img = loadImage("Book_Pencil.jpeg");
}
function setup()
{
    canvas = createCanvas(550,400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded); 
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}
function modelLoaded()
{
    console.log("M O D E L  I S  L O A D E D  ! ! ! ! ! !");
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}
function draw()
{
    image(img,0,0,canvas.width,canvas.height);
}