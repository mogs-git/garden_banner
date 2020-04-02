function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRndFloat(min, max) {
  return (Math.random() * (max - min + 1) ) + min;
}

class Plant {
	constructor(x, growth_rate, max_height) {
		this.x = x;
		this.growth_rate = growth_rate;
		this.max_height = max_height;
		this.height = 0;
	} 

	grow() {
		if (this.height < this.max_height) {
			this.height += 1;
		}
	}

}

class Tree extends Plant {
	constructor(x, growth_rate, max_height) {
		super(x, growth_rate, max_height);
		this.width = 10;
		this.height = 0;
		this.num_leaves = 200;
		this.leaf_positions = [];

		for (let i = 0; i < this.num_leaves; i++) {
			this.leaf_positions.push(createVector(getRndFloat(-15,15), getRndFloat(-10,10)))
		}
	}

	static spawn_rate() {
		return 0.1; // value scaled between zero and one. high is faster spawn.
	}



	display() {
		let greens = ["#31872d", "#3ebd39", "#1e5c1c"];

		fill("brown");
		rect(this.x, height-this.height, this.width, this.height);

		let leaves_centre = {x: this.x+(this.width/2), 
			y: height-this.height};


		if (this.height > 15) {
			for (let i = 0; i < this.num_leaves; i++) {
				strokeWeight(0.5)
				fill(greens[getRndInteger(0,2)]);
				ellipse(leaves_centre.x+this.leaf_positions[i].x, leaves_centre.y+this.leaf_positions[i].y, 3);
			}
		} else {
			for (let i = 0; i < this.num_leaves; i++) {
				strokeWeight(0.5)
				fill(greens[getRndInteger(0,2)]);
				ellipse(leaves_centre.x+this.leaf_positions[i].x, leaves_centre.y+this.leaf_positions[i].y, 3); // scale size/position with height until certain hieght?
			}
		}

	}
}

let trees;
let num_trees = 20;
let fr;
let x;
let gr;

function setup() {
	createCanvas(400, 100);
	fr = 30;
	frameRate(fr);

	trees = [];
	x= getRndInteger(0,width);
	gr = getRndInteger(5,10);
	trees.push(new Tree(x, fr/4, 80))
}

function draw() {
    drawingContext.clearRect(0, 0, width, height);
	
    if (frameCount % (fr-fr*Tree.spawn_rate()) == 0 && trees.length < num_trees) {
    	x= getRndInteger(0,width);
    	gr = getRndInteger(5,10);
    	trees.push(new Tree(x, fr/10, 80))
    }

	trees.forEach(tree => {
		if (frameCount % tree.growth_rate == 0) {
			tree.grow()
		}
		tree.display();
	})
}