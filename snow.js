class Snow{
        constructor(x, y, width, height) {
                var options = {
                    isStatic: false
                }
            this.body = Matter.Bodies.rectangle(x, y, width, height, [options]);
            this.width = width;
            this.height = height;
            this.image = loadImage("snow5.webp");
             World.add(world, this.body);
         }
          display(){
            push();
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
        }