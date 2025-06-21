function aiCheck() {
    // Name for the visualisation to appear in the menu bar.
    this.name = 'AI Validation';

    // Each visualisation must have a unique ID with no special
    // characters.
    this.id = 'ai usage';

    // Title to display above the plot.
    this.title = 'how often does people double-check AI generated information!';

    // Property to represent whether data has been loaded.
    this.loaded = false;

    // Preload the data. This function is called automatically by the gallery when a visualisation is added.
    this.preload = function() {
    var self = this;
    this.data = loadTable(
        './data/survey/ai_double_check_survey.csv', 'csv', 'header', 
        // Callback function to set the value
        // this.loaded to true.
        function(table) {
            self.loaded = true;
        });
    };

    this.setup = function() {
        // Collecting quantity values from quantity column
        this.quantity = this.data.getColumn("Quantity").map(Number);
        this.doubleCheck = this.data.getColumn("How often do you double-check AI-generated information for accuracy?");


        // Initial bubble state. We need to addd the bubble in the setup because the setup runs only once, if we add in draw, the draw will run 60 times per second
        // and we don't want that.
        // this.bubble = this.createBubble(this.quantity[2]);


        // Create array to store bubbles
        this.aBubble = [];

        // Loop through each quantity and create bubble object
        this.createBubbles(26);
    };

    this.destroy = function() {
    };

    this.draw = function() {
        if (!this.loaded) {
            console.log('Data not yet loaded');
            return;
        };
        
        // Draw text
        this.drawText();


        this.lastDrawTime = 0;
        this.drawInterval = 3000;

        // Loop to create a bubble for every quantity. NESTED LOOP! O(n²)
        for (let i = 0; i < this.aBubble.length; i++) {
            for (let j = 0; j < this.aBubble.length; j++) {
                if (i !== j) {
                    let a = this.aBubble[i];
                    let b = this.aBubble[j];

                    let dx = a.x - b.x;
                    let dy = a.y - b.y;
                    let distBetween = sqrt(dx * dx + dy * dy);
                    let minDist = (a.size + b.size) / 2;

                    if (distBetween < minDist) {
                        let angle = atan2(dy, dx);
                        let overlap = minDist - distBetween;

                        // Pushes bubble i out of bubble j
                        a.x += cos(angle) * (overlap / 2);
                        a.y += sin(angle) * (overlap / 2);
                        b.x -= cos(angle) * (overlap / 2);
                        b.y -= sin(angle) * (overlap / 2);
                    }
                }
            }

            this.updateAndDrawBubble(i);
        }

        // Legend
        this.draw5Legend(
            450, 
            740,
            "About half the time",
            "Always",
            "Most of the time",
            "Never",
            "Sometimes"
        )
    }
    
    this.drawText = function() {
        // Draw user message
        let message_ai_usage = "Check out "

        push();
        textSize(30);
        textAlign(LEFT, TOP);
        textFont(robotoFont);
        fill(0);
        noStroke();
        text(message_ai_usage, 440, 125.5);
        textFont(robotoFontBold);
        text(this.title, 570, 125.5)
        pop();
    }

    this.createBubbles = function (sizeValue) {

        // Colors
        let bubbleColors = ['#002147', '#FFCD6E', '#C8102E', '#333333', '#91A7D2'];

        // Loop for bubbles
        for (let i = 0; i < this.data.getRowCount(); i++) {
            let size = this.quantity[i] * sizeValue;

            // Create one bubble object
            let bubble = {
                x: random(500, 1200),
                y: random(300, 600),
                velocityX: random(-0.2, + 0.2),
                velocityY: random(-0.2, + 0.2),
                size: size,
                color: (bubbleColors[i])
            };

            // Add bubble to array
            this.aBubble.push(bubble);
        }
    }

    this.updateAndDrawBubble = function (i) {
        // Update position
        this.aBubble[i].x += this.aBubble[i].velocityX;
        this.aBubble[i].y += this.aBubble[i].velocityY;

        // Interaction with mouse
        let d = dist(mouseX, mouseY, this.aBubble[i].x, this.aBubble[i].y);
        if (d < this.aBubble[i].size / 2) {
            // Calculate the distance between the mouse and the aBubble (in x and y)
            let dx = this.aBubble[i].x - mouseX;
            let dy = this.aBubble[i].y - mouseY;

            // Calculate the angle of the vector.
            let angle = atan2(dy, dx);

            // Tranform how much to walk in x and y, considering cos to the movement in x and and sin the movement in y
            this.aBubble[i].x += cos(angle) * 4;
            this.aBubble[i].y += sin(angle) * 4;
        }

        // Boundary reflection for x on the left
        if (this.aBubble[i].x < (menuLeft.x + menuLeft.w + 60 + this.aBubble[i].size / 2)) {
            this.aBubble[i].velocityX *= -1;
            this.aBubble[i].x = menuLeft.x + menuLeft.w + 60 + this.aBubble[i].size / 2
        }

        // Boundary reflection for x on the right
        if (this.aBubble[i].x > (menuLeft.x + menuLeft.w + 60 + width - 420 - this.aBubble[i].size / 2)) {
            this.aBubble[i].velocityX *= -1;
            this.aBubble[i].x = menuLeft.x + menuLeft.w + 60 + width - 420 - this.aBubble[i].size / 2;
        }

        // Boundary reflection for y on top
        if (this.aBubble[i].y < menuTop.h + 80 + this.aBubble[i].size / 2) {
            this.aBubble[i].velocityY *= -1;
            this.aBubble[i].y = menuTop.h + 80 + this.aBubble[i].size / 2;
        }

        // Boundary reflection for y on the bottom
        if (this.aBubble[i].y > menuTop.w - 805 + menuTop.h + 80 - (this.aBubble[i].size / 2) - 120) {
            this.aBubble[i].velocityY *= -1;
            this.aBubble[i].y = menuTop.w - 805 + menuTop.h + 80 - (this.aBubble[i].size / 2) - 120;
        }
        
        // Draw
        fill(this.aBubble[i].color);
        noStroke();
        ellipse(this.aBubble[i].x, 
                this.aBubble[i].y,
                this.aBubble[i].size,
                this.aBubble[i].size);

        textAlign(CENTER, CENTER);
        textFont(robotoFont);
        textSize(this.aBubble[i].size * 0.4);
        fill(255);
        text(this.quantity[i], this.aBubble[i].x, this.aBubble[i].y);
    };

    this.draw5Legend = function (xPos, yPos, labelText1, labelText2, labelText3, labelText4, labelText5) {
        rightOffset = 300;
        textFont(robotoFont);
        textAlign(LEFT, CENTER);
        textSize(16);
        noFill();
        noStroke();

        fill('#002147');
        rect(xPos + rightOffset, yPos, 15, 15, 3);
        fill(0);
        text(labelText1, xPos + 25 + rightOffset, yPos + 6);

        fill('#FFCD6E');
        rect(xPos + 160 + rightOffset, yPos, 15, 15, 3);
        fill(0);
        text(labelText2, xPos + 180 + rightOffset, yPos + 6);

        fill('#C8102E');
        rect(xPos + 240 + rightOffset, yPos, 15, 15, 3);
        fill(0);
        text(labelText3, xPos + 260 + rightOffset, yPos + 6);

        fill('#333333');
        rect(xPos + 380 + rightOffset, yPos, 15, 15, 3);
        fill(0);
        text(labelText4, xPos + 400 + rightOffset, yPos + 6);

        fill('#91A7D2');
        rect(xPos + 460 + rightOffset, yPos, 15, 15, 3);
        fill(0);
        text(labelText5, xPos + 480 + rightOffset, yPos + 6);
    }

    this.test = function() {
        rect(300,300,300,300);
    }

}