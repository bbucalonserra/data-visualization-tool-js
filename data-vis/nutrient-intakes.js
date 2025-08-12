//------------------------------- START NEW CODE -----------------------------------------//
function NutrientsTimeSeries() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Vitamins Intake TimeSeries';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'nutrients-timeseries';

  // Title to display above the plot.
  this.title = 'the vitamins instake.';

    // Names for each axis.
  this.xAxisLabel = 'Year';
  this.y1AxisLabel = 'Values';
  this.y2AxisLabel = "";

  this.RegularColors = [];

  this.colorBlindedColors = [];

  var marginSize = 35;

  // Layout object to store all common plot layout parameters and methods.
  this.layout = {
    marginSize: marginSize,

    // Locations of margin positions. Left and bottom have double margin
    // size due to axis and tick labels.
    leftMargin: marginSize * 12,
    rightMargin: width - marginSize - 80,
    topMargin: marginSize + 250,
    bottomMargin: height - marginSize * 4,
    pad: 5,

    plotWidth: function() {
      return this.rightMargin - this.leftMargin;
    },

    plotHeight: function() {
      return this.bottomMargin - this.topMargin;
    },

    // Boolean to enable/disable background grid.
    grid: false,

    // Number of axis tick labels to draw so that they are not drawn on top of one another.
    numXTickLabels: 10,
    numYTickLabels: 8,
  };

  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Preload the data. This function is called automatically by the gallery when a visualisation is added.
  this.preload = function() {
    var self = this;
    this.data = loadTable(
      './data/food/avg-intake-weighted-reference-nutrient-intakes.csv', 'csv', 'header', 
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });

  };

  this.setup = function() {
    // Font defaults.
    textSize(16);

    // Set min and max years: assumes data is sorted by date.
    this.startYear = Number(this.data.columns[1]);
    // this.endYear = this.data.getNum(this.data.getRowCount() - 1, 'year');
    this.endYear = Number(this.data.columns[this.data.columns.length - 1]);

    // Colors
    this.RegularColors = [
      "#002147",
      "#C8102E",
      "#FFD700",
      "#007A33"
    ]

    this.colorBlindedColors = [
      "#E66100",
      "#007C91",
      "#B2BEB5",
      "#544F4B"
    ]

    // Find min and max
    this.minValue = 0;
    this.maxValue = 45;
  };

  this.destroy = function() {
  };

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Text
    this.drawText();

    this.draw4Legend(
        500, 
        720,
        "Vitamin B6",
        "Vitamin B12",
        "Vitamin C",
        "Vitamin A"
    )

    // Draw all y-axis labels.
    drawYAxisTickLabels(this.minValue,
                        this.maxValue,
                        this.layout,
                        this.mapPayGapToHeight.bind(this),
                        0);

    // Draw x and y axis.
    drawAxis(this.layout);

    // Draw x and y axis labels.
    drawAxisLabels(this.xAxisLabel,
                   this.y1AxisLabel,
                   this.y2AxisLabel,
                   this.layout);

    // Plot all pay gaps between startYear and endYear using the width of the canvas minus margins.
    var numYears = this.endYear - this.startYear + 2;

    // Loop over all rows and draw a line from the previous value to the current.
    for (var i = 0; i < this.data.getRowCount(); i++) {

      let row = this.data.getRow(i);
      let previous = null;
      let l = row.getString(0);
      
      for(var j = 1; j < numYears; j++) {
        var current = {
          'year': this.startYear + j - 1,
          'value': row.getNum(j)
        };

        if (previous != null) {
          // Draw line segment connecting previous year to current
          // year pay gap.
          stroke(accessibilityMode == true ? this.colorBlindedColors[i] : this.RegularColors[i]);
          strokeWeight(4);
          line(this.mapYearToWidth(previous.year),
              this.mapPayGapToHeight(previous.value),
              this.mapYearToWidth(current.year),
              this.mapPayGapToHeight(current.value));

          // The number of x-axis labels to skip so that only
          // numXTickLabels are drawn.
          var xLabelSkip = ceil(numYears / this.layout.numXTickLabels);

          // Draw the tick label marking the start of the previous year.
          if (i % xLabelSkip == 0) {
            drawXAxisTickLabel(previous.year, 
                              this.layout,
                              this.mapYearToWidth.bind(this));
          }
        }

      // Assign current year to previous year so that it is available during the next iteration of this loop to give us the start position of the next line segment.
      previous = current;
      }
    }
  };

  this.mapYearToWidth = function(value) {
    return map(value,
               this.startYear,
               this.endYear,
               this.layout.leftMargin + 50,   // Draw left-to-right from margin.
               this.layout.rightMargin);
  };

  this.mapPayGapToHeight = function(value) {
    return map(value,
               this.minValue,
               this.maxValue,
               this.layout.bottomMargin, // Smaller pay gap at bottom.
               this.layout.topMargin);   // Bigger pay gap at top.
  };

  this.drawText = function() {
    // Draw user message
    let texts = "Check out "

    push();
    textSize(30);
    textAlign(LEFT, TOP);
    textFont(robotoFont);
    fill(0);
    noStroke();
    text(texts, 440, 125.5);
    textFont(robotoFontBold);
    text(this.title, 570, 125.5)
    pop();
  }

  this.draw4Legend = function (xPos, yPos, labelText1, labelText2, labelText3, labelText4) {
      rightOffset = 300;
      textFont(robotoFont);
      textAlign(LEFT, CENTER);
      textSize(16);
      noFill();
      noStroke();

      fill(accessibilityMode == true ? this.colorBlindedColors[0] : this.RegularColors[0]);
      rect(xPos + 120 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText1, xPos + 140 + rightOffset, yPos + 6);

      fill(accessibilityMode == true ? this.colorBlindedColors[1] : this.RegularColors[1]);
      rect(xPos + 220 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText2, xPos + 240 + rightOffset, yPos + 6);

      fill(accessibilityMode == true ? this.colorBlindedColors[2] : this.RegularColors[2]);
      rect(xPos + 330 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText3, xPos + 350 + rightOffset, yPos + 6);

      fill(accessibilityMode == true ? this.colorBlindedColors[3] : this.RegularColors[3]);
      rect(xPos + 420 + rightOffset, yPos, 15, 15, 3);
      fill(0);
      text(labelText4, xPos + 440 + rightOffset, yPos + 6);
  }


}
//------------------------------- END NEW CODE -----------------------------------------//