function PieChart(x, y, diameter) {

  // Assign x and y
  this.x = x;
  this.y = y;

    // Assign diamanter
  this.diameter = diameter;

  // Assign label spce
  this.labelSpace = 30;

  // Function to get the radians according to data length
  this.get_radians = function(data) {
    var total = sum(data);
    var radians = [];

    for (let i = 0; i < data.length; i++) {
      radians.push((data[i] / total) * TWO_PI);
    }

    return radians;
  };

  this.draw = function(data, labels=undefined, colours, title) {

    // Test that data is not empty and that each input array is the
    if (labels!==undefined) {
      // same length.
      if (data.length == 0) {
        alert('Data has length zero!');
      } else if (![labels, colours].every((array) => {
        return array.length == data.length;
      })) {
        alert(`Data (length: ${data.length})
              Labels (length: ${labels.length})
              Colours (length: ${colours.length})
              Arrays must be the same length!`);
        }
    }


    // https://p5js.org/examples/form-pie-chart.html

    var angles = this.get_radians(data);
    var lastAngle = 0;
    var colour;

    for (var i = 0; i < data.length; i++) {
      if (colours) {
        colour = colours[i];
      } else {
        colour = map(i, 0, data.length, 0, 255);
      }

      fill(colour);
      stroke(0);
      strokeWeight(1);

      arc(this.x, this.y,
          this.diameter, this.diameter,
          lastAngle, lastAngle + angles[i] + 0.001); // Hack for 0!
    
    //-------------------------------------------------------------------------- START NEW CODE --------------------------------------------------------------------------//
    // Creating a variable "d" to calculate the distance between two points. Here, it's the distance between the mouse (point 1) and the center of the pie chart (point 2).
    // Structure: dist(x1, y1, x2, y2), where x1/y1 are coordenates of the first point and x2/y2 coordenats of the second point.
    let d = dist(mouseX, mouseY, this.x, this.y);
    let mouse_pie_angle = null;

    //
    if (d < this.diameter / 2) { // Divided by two since radius = diameter/2.
      // atan2(y, x) is from arctangente, it calculates the angle of a vector between 2 points, where x is the distance in x and y the distance in y. IT'S THE SIZE OF A VECTOR.
      // It returns an angle in radius from -PI to PI (-180º to +180º)
      mouse_pie_angle = atan2(mouseY - this.y, mouseX - this.x);

      if (mouse_pie_angle < 0) {
        mouse_pie_angle += TWO_PI;
      }
    }

    // if to create mouse hover
    if (mouse_pie_angle !== null && mouse_pie_angle >= lastAngle && mouse_pie_angle < lastAngle + angles[i]) {
      let [r, g, b] = colours[i].levels;
      let valueText = data[i].toFixed(2) + "%";

      textSize(25);
      textAlign('left', 'top');
      textLeading(18);

      let textW = textWidth(valueText) + 20;
      let textH = 40;

      // Horizontal position
      let tooltipX = (mouseX + 10 + textW > width)
                    ? mouseX - textW - 10
                    : mouseX + 10;

      // Vertical position
      let tooltipY = mouseY - textH - 10;
      if (tooltipY < 0) {
        tooltipY = mouseY + 10;
      }

      // Background
      fill(255, 255, 255, 230);
      stroke(0);
      strokeWeight(1);
      rect(tooltipX, tooltipY, textW, textH);

      // Text
      fill(0);
      noStroke();
      text(valueText, tooltipX + 5, tooltipY + 5);
    }

      if (labels) {
        this.makeLegendItem(labels[i], i, colour);
      }

      lastAngle += angles[i];
    }

    if (title) {
      noStroke();
      textAlign('center', 'center');
      textSize(24);
      fill(0);
      text(title, this.x, this.y - this.diameter * 0.6);
    }
  };

  // Function to create a legend per item
  this.makeLegendItem = function(label, i, colour) {
    var x = this.x + 50 + this.diameter / 2;
    var y = this.y + (this.labelSpace * i) - this.diameter / 3;
    var boxWidth = this.labelSpace / 2;
    var boxHeight = this.labelSpace / 2;

    fill(colour);
    rect(x, y, boxWidth, boxHeight);

    fill('black');
    noStroke();
    textAlign('left', 'center');
    textSize(12);
    text(label, x + boxWidth + 10, y + boxWidth / 2);
  };
}