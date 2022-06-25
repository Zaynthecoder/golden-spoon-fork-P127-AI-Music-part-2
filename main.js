peterpansong = "peterpan.mp3";
harrypottersong = "harrypotter.mp3";

function preload() {
    peterpansong = loadSound("peterpan.mp3");
    harrypottersong = loadSound("harrypotter.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,500);

}