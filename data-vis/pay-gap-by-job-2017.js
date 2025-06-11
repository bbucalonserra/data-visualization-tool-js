function PayGapByJob2017() {

  // Offset for the x/y-axis.
  this.offsetX = 550;
  this.offsetY = 300;
  this.scale =  0.7;

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Pay GAP per Job';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'pay-gap-by-job-2017';

  // Property to represent whether data has been loaded.
  this.loaded = false;

  // Graph properties.
  this.pad = 20;
  this.padX = this.pad + this.offsetX;

  this.dotSizeMin = 15;
  this.dotSizeMax = 40;

  // Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
  this.preload = function() {
    var self = this;
    this.data = loadTable(
      './data/pay-gap/occupation-hourly-pay-by-gender-2017.csv', 'csv', 'header',
      // Callback function to set the value
      // this.loaded to true.
      function(table) {
        self.loaded = true;
      });

  };

  this.setup = function() {
  };

  this.destroy = function() {
  };

  this.draw = function() {
    if (!this.loaded) {
      console.log('Data not yet loaded');
      return;
    }

    // Draw the axes.
    this.addAxes();

    // Get data from the table object.
    var jobs = this.data.getColumn('job_subtype');
    var propFemale = this.data.getColumn('proportion_female');
    var payGap = this.data.getColumn('pay_gap');
    var numJobs = this.data.getColumn('num_jobs');

    // Convert numerical data from strings to numbers.
    propFemale = stringsToNumbers(propFemale);
    payGap = stringsToNumbers(payGap);
    numJobs = stringsToNumbers(numJobs);

    // Set ranges for axes.
    //
    // Use full 100% for x-axis (proportion of women in roles).
    var propFemaleMin = 0;
    var propFemaleMax = 100;

    // For y-axis (pay gap) use a symmetrical axis equal to the
    // largest gap direction so that equal pay (0% pay gap) is in the
    // centre of the canvas. Above the line means men are paid
    // more. Below the line means women are paid more.
    var payGapMin = -20;
    var payGapMax = 20;

    // Find smallest and largest numbers of people across all
    // categories to scale the size of the dots.
    var numJobsMin = min(numJobs);
    var numJobsMax = max(numJobs);

    fill(255);
    stroke(0);
    strokeWeight(1);

    for (i = 0; i < this.data.getRowCount(); i++) {
      // Draw an ellipse for each point.
      // x = propFemale
      // y = payGap
      // size = numJobs
    ellipse(
      ( map(propFemale[i], propFemaleMin, propFemaleMax,
            this.pad, width - this.pad)
        + this.offsetX
      ) * this.scale,

      ( map(payGap[i], payGapMin, payGapMax,
            height - this.pad, this.pad)
        + this.offsetY
      ) * this.scale,

      map(numJobs[i], numJobsMin, numJobsMax,
          this.dotSizeMin, this.dotSizeMax)
      * this.scale
    );
    }
  };

  this.addAxes = function () {
    stroke(200);

    // Add vertical line.
    line(
      (width/2 + this.offsetX) * this.scale,
      (this.pad           + this.offsetY) * this.scale,
      (width/2 + this.offsetX) * this.scale,
      (height - this.pad  + this.offsetY) * this.scale
    );

    // Add horizontal line.
    line(
      (this.pad + this.offsetX)          * this.scale,
      (height/2 + this.offsetY)          * this.scale,
      (width   - this.pad + this.offsetX) * this.scale,
      (height/2 + this.offsetY)          * this.scale
    );
  };
}
