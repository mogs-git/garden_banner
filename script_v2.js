// GENERAL UTILITY FUNCTIONS ------------------------------------------------------------
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRndFloat(min, max) {
  return (Math.random() * (max - min + 1) ) + min;
}

// Classes ------------------------------------------------------------------------------
class Plant {
	constructor(x, growth_rate) {
		this.x = x;
		this.growth_rate = growth_rate;
		this.height = 0;
		this.width = 0;
	} 

	grow() {
		if (this.height < this.max_height) {
			this.height += height/100; // plant height grows at 100th rate of height of screen until max hieght. (Takes 70 calls to growth to reach 70% height of screen).
		}
		if (this.width < this.max_width) {
			this.width += height/300; // until max width is reacher, width grows at 1/3rd rate of height.
		}
	}

}

let greens = ["rgba(15, 97, 12,0.7)", "rgba(7, 135, 3, 0.7)", "rgba(17, 71, 15,0.7)"]

class Tree extends Plant {
	constructor(x, growth_rate) {
		super(x, growth_rate);
		this.height = 1;
		this.width = 2;
		this.max_height = getRndInteger(height*0.5, height * 0.75) // "height" is NOT height of object, but height of viewport.
		this.max_width = this.max_height/7
		this.col = greens[getRndInteger(0,2)]
	}

	static spawn_rate() {
		return 0.1; // value scaled between zero and one. high is faster spawn.
	}



	display() {
		let trunk_x = this.x 
		let trunk_y = height - this.height
		let tree_height = this.height
		let tree_width = this.width
		let leaves_height;
		let leaves_width;

		// begin drawing
		push()

		// draw the trunk
		fill("rgb(74, 48, 26)");
		rect(trunk_x, trunk_y, tree_width, tree_height);
		
		// draw the leaves
		leaves_height = Math.min(tree_height * 0.5, this.max_height * 0.3);
		leaves_width = Math.min(tree_width * 1.5, this.max_width * 1.25);

		translate(trunk_x, trunk_y - (leaves_height/2)) // Move the leaves to the centre top of the trunk
		noStroke();
		fill(this.col);

		for (let i = 0; i < 18; i ++) {
			ellipse(0, leaves_width/2, leaves_width, leaves_height);
			rotate(PI/5);
		}
		rotate(2*PI/5)
		translate(tree_width*0.8,0)
		for (let i = 0; i < 18; i ++) {
			ellipse(0, leaves_width/2, leaves_width, leaves_height);
			rotate(PI/5);
		}
		pop()
	}
}

let trees;
let num_trees = 20;
let my_frameRate;
let x;
let gr;

function setup() {
	createCanvas(800, 300);
	my_frameRate = 30;
	frameRate(my_frameRate);

	// Draw our first tree
	trees = [];
	x = getRndInteger(0,width);
	gr = getRndInteger(15,20);
	trees.push(new Tree(x, gr))
}

function draw() {
    drawingContext.clearRect(0, 0, width, height);
	
    if (frameCount % (my_frameRate-my_frameRate*Tree.spawn_rate()) == 0 && trees.length < num_trees) {
    	x = getRndInteger(0,width);
    	gr = getRndInteger(15, 20);
    	trees.push(new Tree(x, gr))
    }

	trees.forEach(tree => {
		if (frameCount % tree.growth_rate == 0) {
			tree.grow()
		}
		tree.display();
	})
}