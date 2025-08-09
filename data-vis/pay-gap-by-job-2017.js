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
    // Set colors range
    let colorRanges = [
    [[200, 255], [140, 180], [0, 50]],
    [[20, 60], [60, 100], [60, 90]],
    [[180, 220], [0, 40], [20, 60]],
    [[80, 120], [130, 170], [40, 80]],
    [[240, 255], [190, 220], [100, 140]],
    [[0, 40], [0, 40], [0, 40]],
    [[100, 160], [100, 160], [100, 160]]];

    // Creating job types
    this.jobs = this.data.getColumn('job_type');
    this.unique_jobs = [... new Set (this.jobs)];
    this.job_colors = [];

    // Iterating
    for (let i = 0; i < this.unique_jobs.length; i++) {
      let range = colorRanges[int(random(colorRanges.length))];
      this.job_colors.push(color(random(range[0][0], range[0][1]), random(range[1][0], range[1][1]), random(range[2][0], range[2][1])))
    }
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
    var propFemale = this.data.getColumn('proportion_female');
    var payGap = this.data.getColumn('pay_gap');
    var numJobs = this.data.getColumn('num_jobs');

    // Convert numerical data from strings to numbers.
    propFemale = stringsToNumbers(propFemale);
    payGap = stringsToNumbers(payGap);
    numJobs = stringsToNumbers(numJobs);

    // Set ranges for axes.
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

      let job_index = this.unique_jobs.indexOf(this.jobs[i]);

      fill(this.job_colors[job_index]);

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
