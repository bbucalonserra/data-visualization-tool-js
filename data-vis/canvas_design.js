function CanvasDesign (){


    this.draw_menu_bar = function(x, y, width, height, rad, fillColor) {
    push();
    noStroke();
    fill(fillColor);
    rect(x, y, width, height, rad);
    pop();
    }
}