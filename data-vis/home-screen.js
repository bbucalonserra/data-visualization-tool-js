function drawHomeScreen() {
    // Draw user message
    image(user_logo, menuLeft.x + menuLeft.w + 225, 380, 200, 200);
    let welcome_message = "Welcome,"
    let user_message = "user!"
    let user_message2 = "Check the red menu bar on the left"
    let user_message3 = "to start the data exploration!"

    push();
    textSize(60);
    textAlign(LEFT, TOP);
    textFont(robotoFontBold);
    fill(0);
    noStroke();
    text(welcome_message, 750, 400);
    textFont(robotoFont);
    text(user_message, 990, 400);
    textSize(30);
    text(user_message2, 750, 470);
    text(user_message3, 750, 510); 
    pop();
}