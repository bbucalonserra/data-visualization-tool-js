function TechDiversityGender() {

  // Offset
  x_offset = 100;
  y_offset = 100;
  // Name for the visualisation to appear in the menu bar.
  this.name = 'Gender Tech Diversity';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'tech-diversity-gender';

  // Title to display above the plot.
  this.title = 'tech diversity in gender!';

  // Layout object to store all common plot layout parameters and
  // methods.
  this.layout = {
    // Locations of margin positions. Left and bottom have double margin
    // size due to axis and tick labels.
    leftMargin: width - x_offset * 9.5,
    rightMargin: width - x_offset * 4,
    topMargin: 160 + y_offset,
    bottomMargin: height,
    pad: 4,

    plotWidth: function() {
      return this.rightMargin - this.leftMargin;
    },

    // Boolean to enable/disable background grid.
    grid: true,

    // Number of axis tick labels to draw so that they are not drawn on
    // top of one another.
    numXTickLabels: 10,
    numYTickLabels: 8,
  };

  // Middle of the plot: for 50% line.
  this.midX = (this.layout.plotWidth() / 2) + this.layout.leftMargin;

  // Default visualisation colours.
  this.femaleColour = color('#C8102E');
  this.maleColour = color('#002147');

  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function() {
    var self = this;
    this.data = loadTable(
      './data/tech-diversity/gender-2018.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });

  };

  this.setup = function() {
    // Font defaults.
    textSize(16);
  };

  this.destroy = function() {
  };

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Anonymous function to draw text.
    this.drawText();

    // Draw Female/Male labels at the top of the plot.
    this.drawCategoryLabels();

    var lineHeight = (height*0.90 - this.layout.topMargin) /
        this.data.getRowCount();

    for (var i = 0; i < this.data.getRowCount(); i++) {

      // Calculate the y position for each company.
      var lineY = (lineHeight * i) + this.layout.topMargin;

      // Create an object that stores data from the current row.
      var company = {
        // Convert strings to numbers.
        'name': this.data.getString(i, 'company'),
        'female': this.data.getNum(i, 'female'),
        'male': this.data.getNum(i, 'male'),
      };

      // Draw the company name in the left margin.
      fill(0);
      noStroke();
      textSize(14);
      textAlign('right', 'top');
      text(company.name,
           this.layout.leftMargin - this.layout.pad,
           lineY - 4);

      // Draw female employees rectangle.
      fill(this.femaleColour);
      rect(this.layout.leftMargin,
           lineY,
           this.mapPercentToWidth(company.female),
           lineHeight - this.layout.pad);

      // Draw male employees rectangle.
      fill(this.maleColour);
      rect(this.layout.leftMargin + this.mapPercentToWidth(company.female),
           lineY,
           this.mapPercentToWidth(company.male),
           lineHeight - this.layout.pad);
    }

  
    // Pop values
    var femaleArray = [];
    var maleArray = [];

    //
    for (let i = 0; i < this.data.getRowCount(); i++) {
      femaleArray.push(this.data.getNum(i, 'female'));
      maleArray.push(this.data.getNum(i, 'male'));
    }

    // Mean
    this.femaleMean = str(round(mean(femaleArray), 2));
    this.maleMean = str(round(mean(maleArray), 2));

    // Draw 50% line
    stroke(150);
    strokeWeight(1);
    line(this.midX,
         this.layout.topMargin,
         this.midX,
         this.layout.bottomMargin);

    // Means
    this.drawMean();
  };

  this.drawCategoryLabels = function() {
    fill(0);
    textSize(18);
    noStroke();
    textAlign('left', 'top');
    text('Female',
         this.layout.leftMargin,
         this.layout.pad + 230);
    textAlign('center', 'top');
    text('50%',
         this.midX,
         this.layout.pad + 230);
    textAlign('right', 'top');
    text('Male',
         this.layout.rightMargin,
         this.layout.pad + 230);
  };

  this.mapPercentToWidth = function(percent) {
    return map(percent,
               0,
               100,
               0,
               this.layout.plotWidth());
  };

  // Function to draw the text from the "user", according to the tittle.
  this.drawText = function() {
      // Draw user message
      let message_diversity_gender = "Check out "

      push();
      textSize(30);
      textAlign(LEFT, TOP);
      textFont(robotoFont);
      fill(0);
      noStroke();
      text(message_diversity_gender, 440, 125.5);
      textFont(robotoFontBold);
      text(this.title, 570, 125.5)
      pop();
  }

  // Function to draw mean values
  this.drawMean = function() {
    // Female
    fill(this.femaleColour);
    ellipse(width - 230, height - 430, 180, 180);

    textSize(55);
    textFont(robotoFont);
    fill("white");
    noStroke();
    text(this.femaleMean + "%", width - 180, height - 440);

    textSize(25);
    text("Female mean", width - 165, height - 475);

    // Male
    fill(this.maleColour);
    ellipse(width - 230, height - 200, 180, 180);

    textSize(60);
    textFont(robotoFont);
    fill("white");
    noStroke();
    text(this.maleMean + "%", width - 180, height - 220);

    textSize(25);
    text("Male mean", width - 180, height - 255);
  }
}
