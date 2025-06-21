// Global variable to store the gallery object. The gallery object is a container for all the visualisations.
let gallery;

// Definig global variables for menu left and top
let menuLeft;
let menuTop;

function preload() {
  // Load images
  uol_logo = loadImage('assets/uol_logo.png');
  user_logo = loadImage('assets/user_logo.png');
  ai_icon = loadImage('assets/ai.png');
  climate_icon = loadImage('assets/climate.png');
  job_icon = loadImage('assets/job.png');
  pay_icon = loadImage('assets/pay.png');
  tech_icon = loadImage('assets/tech.png');
  vitamin_icon = loadImage('assets/vitamin.png');

  // Load font
  robotoFont = loadFont('assets/roboto_font/Roboto_Condensed-Regular.ttf');
  robotoFontBold = loadFont('assets/roboto_font/Roboto_Condensed-Bold.ttf');
}

function setup() {
  // Create a canvas to fill the content div from index.html.
  canvasContainer = select('.app');
  var c = createCanvas(1400, 800);
  c.parent('app');

  // Create a new gallery object.
  gallery = new Gallery();

  // Margins
  menuLeft = {x: 42, y: 0, w: 260, h: height};
  menuTop  = {x: 42, y: 0, w: width, h: 100};

  // Font
  textFont(robotoFont);

  // Add the visualisation objects here.
  gallery.addVisual(new PayGapTimeSeries());
  gallery.addVisual(new aiCheck());
  gallery.addVisual(new TechDiversityRace());
  gallery.addVisual(new TechDiversityGender());
  gallery.addVisual(new PayGapByJob2017());
  gallery.addVisual(new ClimateChange());
  gallery.addVisual(new UKFoodAttitudes());
  gallery.addVisual(new NutrientsTimeSeries());
}

function draw() {
  // Call constructors.
  canvas = new canvasDesign();

  // Entire canvas background
  background(255);

  // First layer of canvas background
  canvas.draw_canvas_background(menuLeft.x + menuLeft.w, menuTop.h, width, menuTop.w, 0, "#F2F2F2");

  // Second layer for charts (white)
  canvas.draw_canvas_background(menuLeft.x + menuLeft.w + 60, menuTop.h + 80, width - 420, menuTop.w - 805, 20, 255);

  // Draw borders into the canvas.
  canvas.draw_canvas_borders(menuLeft.x, 0, width - menuLeft.x, height, 2, 0);

  // Draw menu bar at the left of the canvas.
  canvas.draw_menu_bar(menuLeft.x, menuLeft.y, menuLeft.w, menuLeft.h, 0, "#C8102E"); 

  // Draw upper rectangle
  canvas.draw_menu_bar(menuTop.x, menuTop.y, menuTop.w, menuTop.h, 0, "#C7C7C795");

  // Draw UOL logo 
  let targetHeight = 70;
  let aspect = uol_logo.width / uol_logo.height;
  let targetWidth = targetHeight * aspect;
  image(uol_logo, 75, 15, targetWidth, targetHeight);

  // Draw tittle
  push();
  textSize(30);
  textAlign(LEFT, TOP);
  textFont(robotoFontBold);
  fill(255);
  noStroke();
  text("MENU BAR", 103, 150);
  pop();

  if (gallery.selectedVisual != null) {
    // Select visuals
    gallery.selectedVisual.draw();

    // Draw user image
    image(user_logo, menuLeft.x + menuLeft.w + 60, 106, 65, 65);
  }
  else {
    canvas.drawHomeScreen();
  }
}