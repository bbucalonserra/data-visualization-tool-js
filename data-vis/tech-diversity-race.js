function TechDiversityRace() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Race tech diversity';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'tech-diversity-race';

  // Title to display above the plot.
  this.title = 'racial diversity in tech.';

  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function() {
    var self = this;
    this.data = loadTable(
      './data/tech-diversity/race-2018.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });
  };

  this.setup = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Create a select DOM element.
    this.select1 = createSelect();
    this.select1.position(0.32 * width, 0.83 * height);

    this.select2 = createSelect();
    this.select2.position(0.65 * width, 0.83 * height);

    // Fill the options with all company names.
    var companies = this.data.columns;

    // First entry is empty.
    for (let i = 1; i < companies.length; i++) {
      this.select1.option(companies[i]);
      this.select2.option(companies[i]);
    }
  };

  this.destroy = function() {
    this.select1.remove();
    this.select2.remove();
  };

  // Create a new pie chart object.
  this.pie1 = new PieChart(615, height / 1.73, width * 0.24);
  this.pie2 = new PieChart(1080, height / 1.73, width * 0.24);

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Boxes
    this.drawBoxes();
//------------------------------- START NEW CODE -----------------------------------------//
    // Legend
    if (accessibilityMode == true) {
      this.draw5LegendColorBlind(
          420, 
          740,
          "White",
          "Asian",
          "Latino",
          "Black",
          "Multi",
          "Other"
      )
    } else {
      this.draw5LegendRegular(
          420, 
          740,
          "White",
          "Asian",
          "Latino",
          "Black",
          "Multi",
          "Other"
      )
    }
//------------------------------- END NEW CODE -----------------------------------------//

    // Anonymous function to draw text.
    this.drawText();

    // Get the value of the company we're interested in from the
    // select item.
    var companyName1 = this.select1.value();
    var companyName2 = this.select2.value();

    // Get the column of raw data for companyName.
    var col1 = this.data.getColumn(companyName1);
    var col2 = this.data.getColumn(companyName2);

    // Convert all data strings to numbers.
    col1 = stringsToNumbers(col1);
    col2 = stringsToNumbers(col2);

    // Copy the row labels from the table (the first item of each row).
    var labels1 = undefined;
    var labels2 = undefined;

//------------------------------- START NEW CODE -----------------------------------------//
    // Colour to use for each category.
    let regularColours = [
      color('#002147'),
      color('#C8102E'),
      color('#FFD700'),
      color('#007A33'),
      color('#4B0082'),
      color('#A8A9AD')
    ];

    let colorBlindColors = [
      color('#E66100'),
      color('#007C91'),
      color('#000000'),
      color('#FFD66E'),
      color('#B2BEB5'),
      color('#544F4B ')
    ]

    // Make a title.
    var title1 =  companyName1;
    var title2 = companyName2;

    // Draw the pie chart.
    if (accessibilityMode == true) {
      this.pie1.draw(col1, labels1, colorBlindColors, title1);
      this.pie2.draw(col2, labels2, colorBlindColors, title2);
    } else {
      this.pie1.draw(col1, labels1, regularColours, title1);
      this.pie2.draw(col2, labels2, regularColours, title2);
    }
  };

  // Function to draw the text from the "user", according to the tittle.
  this.drawText = function() {
      // Draw user message
      let message_diversity_race = "Check out "

      push();
      textSize(30);
      textAlign(LEFT, TOP);
      textFont(robotoFont);
      fill(0);
      noStroke();
      text(message_diversity_race, 440, 125.5);
      textFont(robotoFontBold);
      text(this.title, 570, 125.5)
      pop();
  }

  // Function to draw legend with 5 items for regular (non colorblind)
  this.draw5LegendRegular = function (xPos, yPos, labelText1, labelText2, labelText3, labelText4, labelText5, labelText6) {
      rightOffset = 300;
      textFont(robotoFont);
      textAlign(LEFT, CENTER);
      textSize(16);
      noFill();
      noStroke();

      fill('#002147');
      rect(xPos + 120 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText1, xPos + 140 + rightOffset, yPos + 6);

      fill('#C8102E');
      rect(xPos + 200 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText2, xPos + 220 + rightOffset, yPos + 6);

      fill('#FFD700');
      rect(xPos + 280 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText3, xPos + 300 + rightOffset, yPos + 6);

      fill('#007A33');
      rect(xPos + 370 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText4, xPos + 390 + rightOffset, yPos + 6);

      fill('#4B0082');
      rect(xPos + 450 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText5, xPos + 470 + rightOffset, yPos + 6);

      fill('#A8A9AD');
      rect(xPos + 520 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText6, xPos + 540 + rightOffset, yPos + 6);
  }

  // Function to draw legend with 5 items for color-blind
  this.draw5LegendColorBlind = function (xPos, yPos, labelText1, labelText2, labelText3, labelText4, labelText5, labelText6) {
      rightOffset = 300;
      textFont(robotoFont);
      textAlign(LEFT, CENTER);
      textSize(16);
      noFill();
      noStroke();

      fill('#E66100');
      rect(xPos + 120 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText1, xPos + 140 + rightOffset, yPos + 6);

      fill('#007C91');
      rect(xPos + 200 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText2, xPos + 220 + rightOffset, yPos + 6);

      fill('#000000');
      rect(xPos + 280 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText3, xPos + 300 + rightOffset, yPos + 6);

      fill('#FFD66E');
      rect(xPos + 370 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText4, xPos + 390 + rightOffset, yPos + 6);

      fill('#B2BEB5');
      rect(xPos + 450 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText5, xPos + 470 + rightOffset, yPos + 6);

      fill('#544F4B');
      rect(xPos + 520 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText6, xPos + 540 + rightOffset, yPos + 6);
  }

  // Draw boxes.
  this.drawBoxes = function() {
    noFill();
    stroke(1);
    rect(400, 220, 440, 470, 15);
    rect(863, 220, 440, 470, 15);

  }
//------------------------------- END NEW CODE -----------------------------------------//
}