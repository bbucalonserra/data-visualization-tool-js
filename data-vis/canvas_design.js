  class canvasDesign {
    constructor() {
    }

    draw_menu_bar(x, y, w, h, rad, fillColor) {
      push();
      noStroke();
      fill(fillColor);
      rect(x, y, w, h, rad);
      pop();
    }

    draw_canvas_borders(x, y, rectW, rectH, borderWeight, borderColor) {
      push();
      noFill();
      stroke(borderColor);
      strokeWeight(borderWeight);
      rect(x, y, rectW, rectH);
      pop();
    }

    draw_canvas_background(x, y, w, h, c, fillColor) {
      push();
      noStroke();
      fill(fillColor);
      rect(x, y, w, h, c);
      pop();
    }
  }