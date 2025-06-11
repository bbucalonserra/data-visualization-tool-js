class CanvasDesign {
  constructor() {
    // Nenhuma propriedade sendo definida no momento
  }

  draw_menu_bar(x, y, width, height, rad, fillColor) {
    push();            // Salva o estado atual de desenho
    noStroke();        // Remove contorno do retângulo
    fill(fillColor);   // Define cor de preenchimento
    rect(x, y, width, height, rad); // Desenha o retângulo arredondado
    pop();             // Restaura o estado anterior
  }
}