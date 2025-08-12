//------------------------------- START NEW CODE -----------------------------------------//
function UKFoodAttitudes() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Food Attitudes';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'uk-food-attitudes';

  // Title
  this.title = 'food attitudes.';

  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function() {
    var self = this;
    this.data = loadTable(
      './data/food/uk-food-attitudes-2018.csv', 'csv', 'header',
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
    this.select = createSelect();
    this.select.position(0.28 * width, 0.305 * height);

    // Fill the options with all company names.
    var questions = this.data.columns;
    // First entry is empty.
    for (let i = 1; i < questions.length; i++) {
      this.select.option(questions[i]);
    }
  };

  this.destroy = function() {
    this.select.remove();
  };

  // Create a new pie chart object.
  this.pie = new PieChart(850, height / 1.6, width * 0.3);

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // 
    this.drawText();

    // Draw Legend
    this.drawLegend();

    // Get the value of the company we're interested in from the
    // select item.
    var questionType = this.select.value();

    // Get the column of raw data for questionType.
    var col = this.data.getColumn(questionType);

    // Convert all data strings to numbers.
    col = stringsToNumbers(col);

    // Copy the row labels from the table (the first item of each row).
    var labels = this.data.getColumn(0);

    // Colour to use for each category.
    let RegularColours = [
      color('#002147'),
      color('#C8102E'),
      color('#FFD700'),
      color('#007A33'),
      color('#4B0082')
    ];

    let ColorblindColours = [
      color('#544F4B'),
      color('#007C91'),
      color('#E66100'),
      color('#B2BEB5'),
      color('#FFD66E')
    ];

    // Make a title.
    // var title = 'Question: ' + questionType;
    var title = ""

    // Draw the pie chart!
    this.pie.draw(col, labels, accessibilityMode == true ? ColorblindColours : RegularColours, title);
  };

  this.drawLegend = function () {

    // Boxes
    fill(242, 242, 242);
    noStroke();
    rect(375, 200, 480, 65, 8);

    // Text
    textSize(18);
    textAlign(LEFT, TOP);
    textFont(robotoFont);
    fill(0);
    noStroke();
    text("Opinion", 385, 205);
  };

  this.drawText = function() {
      // Draw user message
      let texts = "Check out ";

      push();
      textSize(30);
      textAlign(LEFT, TOP);
      textFont(robotoFont);
      fill(0);
      noStroke();
      text(texts, 440, 125.5);
      textFont(robotoFontBold);
      text(this.title, 570, 125.5);
      pop();
  }
}
//------------------------------- END NEW CODE -----------------------------------------//