// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.
var gallery;

function preload() {
  uol_logo = loadImage('assets/uol_logo.png');
}

function setup() {
  // Create a canvas to fill the content div from index.html.
  canvasContainer = select('.app');
  var c = createCanvas(1400, 800);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Add the visualisation objects here.
  gallery.addVisual(new TechDiversityRace());
  gallery.addVisual(new TechDiversityGender());
  gallery.addVisual(new PayGapByJob2017());
  gallery.addVisual(new PayGapTimeSeries());
  gallery.addVisual(new ClimateChange());
  gallery.addVisual(new UKFoodAttitudes());
  gallery.addVisual(new NutrientsTimeSeries());
}

function draw() {

  background(255);
  
  // Draw borders into the canvas.
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(42, 0, width - 42, height);
  
  // Call constructor
  canvas = new CanvasDesign();

  // Draw menu bar at the left of the canvas.
  canvas.draw_menu_bar(42, 0, 260, height, 0, "#C8102E"); 

  // Draw upper rectangle
  canvas.draw_menu_bar(42, 0, width, 100, 0, "#DCDCDC80");

  // Draw image
  // Fix proportions
  let targetHeight = 70;
  let aspect = uol_logo.width / uol_logo.height;
  let targetWidth = targetHeight * aspect;
  image(uol_logo, 75, 15, targetWidth, targetHeight);

  // Draw tittle
  push();
  textSize(30);
  textAlign(LEFT, TOP);
  textFont('Roboto');
  fill(255);
  noStroke();
  text("ANALYTICS", 88, 150);
  pop();

  if (gallery.selectedVisual != null) {
    gallery.selectedVisual.draw();
  }
}