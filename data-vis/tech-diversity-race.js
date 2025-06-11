function TechDiversityRace() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Tech Diversity: Race';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'tech-diversity-race';

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
    this.select = createSelect();
    this.select.position(0.36 * width, 0.18 * height);

    // Fill the options with all company names.
    var companies = this.data.columns;
    // First entry is empty.
    for (let i = 1; i < companies.length; i++) {
      this.select.option(companies[i]);
    }
  };

  this.destroy = function() {
    this.select.remove();
  };

  // Create a new pie chart object.
  this.pie = new PieChart(900, height / 1.7, width * 0.3);

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Get the value of the company we're interested in from the
    // select item.
    var companyName = this.select.value();

    // Get the column of raw data for companyName.
    var col = this.data.getColumn(companyName);

    // Convert all data strings to numbers.
    col = stringsToNumbers(col);

    // Copy the row labels from the table (the first item of each row).
    var labels = this.data.getColumn(0);

//-------------------------------------------------------------------------- START NEW CODE --------------------------------------------------------------------------//
    // Colour to use for each category.
    let colours = [
      color('#002147'), // Royal Blue
      color('#C8102E'), // Scarlet Red
      color('#FFD700'), // Gold
      color('#007A33'), // Emerald Green
      color('#4B0082'), // Deep Purple
      color('#A8A9AD')  // Silver Gray
    ];
//-------------------------------------------------------------------------- END NEW CODE --------------------------------------------------------------------------//

    // Make a title.
    var title = 'Employee diversity at ' + companyName;

    // Draw the pie chart!
    this.pie.draw(col, labels, colours, title);
  };
}
