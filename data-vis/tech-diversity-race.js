function TechDiversityRace() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Race Tech Diversity';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'tech-diversity-race';

  // Title to display above the plot.
  this.title = 'the differences between tech companies regarding race!';

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
    this.select1.position(0.35 * width, 0.85 * height);

    this.select2 = createSelect();
    this.select2.position(0.70 * width, 0.85 * height);

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
  this.pie1 = new PieChart(600, height / 1.75, width * 0.25);
  this.pie2 = new PieChart(1050, height / 1.75, width * 0.25);

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

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
    var labels2 = this.data.getColumn(0);

//------------------------------- START NEW CODE -----------------------------------------//
    // Colour to use for each category.
    let colours = [
      color('#002147'), // Royal Blue
      color('#C8102E'), // Scarlet Red
      color('#FFD700'), // Gold
      color('#007A33'), // Emerald Green
      color('#4B0082'), // Deep Purple
      color('#A8A9AD')  // Silver Gray
    ];

    // Make a title.
    var title1 = 'Employee diversity at ' + companyName1;
    var title2 = 'Employee diversity at ' + companyName2;

    // Draw the pie chart!
    this.pie1.draw(col1, labels1, colours, title1);
    this.pie2.draw(col2, labels2, colours, title2);
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

//------------------------------- END NEW CODE -----------------------------------------//
}