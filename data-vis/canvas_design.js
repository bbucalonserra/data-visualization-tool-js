class canvasDesign {
  constructor() {
    // Nenhuma propriedade sendo definida no momento
  }

  draw_menu_bar(x, y, width, height, rad, fillColor) {
    push();
    noStroke();
    fill(fillColor);
    rect(x, y, width, height, rad);
    pop();
  }
}