function setup() {
	// Create the canvas
	createCanvas(720, 400);
	background(200);

	// Set colors
	fill(74, 48, 26, 180);

	let treeBase = createVector(300,200);
	rect(treeBase.x, treeBase.y, 50,180)

	fill(46, 94, 24, 180);

	
	let leaves_height = 80;
	let leaves_width = 60;
	push()
	noStroke();
	translate(treeBase.x,treeBase.y-(leaves_height/2))

	for (let i = 0; i < 12; i ++) {
		ellipse(0, 30, leaves_width, leaves_height);
		rotate(PI/5);
	}
	rotate(8*PI/5)
	translate(40,0)
	for (let i = 0; i < 12; i ++) {
		ellipse(0, 30, leaves_width, leaves_height);
		rotate(PI/5);
	}
	pop()

	push()
	fill(74, 48, 26, 180);
	let treeBase2 = createVector(500,200);
	rect(treeBase2.x, treeBase2.y, 50,180);
	noStroke();
	fill(46, 94, 24, 180);
	translate(treeBase2.x,treeBase2.y-(leaves_height/2))
	for (let i = 0; i < 12; i ++) {
		ellipse(0, 30, leaves_width, leaves_height);
		rotate(PI/5);
	}
	rotate(8*PI/5)
	translate(40,0)
	for (let i = 0; i < 12; i ++) {
		ellipse(0, 30, leaves_width, leaves_height);
		rotate(PI/5);
	}
	pop()



	function drawTree(stump_x, stump_y, tree_height, tree_width) {
		push()
		let leaves_height = tree_height * 0.5;
		let leaves_width = tree_width * 1.5;
		fill(74, 48, 26, 180);
		rect(stump_x, stump_y, tree_width, tree_height);
		noStroke();
		fill(46, 94, 24, 180);
		translate(stump_x, stump_y - (leaves_height/2))
		for (let i = 0; i < 12; i ++) {
			ellipse(0, leaves_width/2, leaves_width, leaves_height);
			rotate(PI/5);
		}
		rotate(8*PI/5)
		translate(tree_width*0.8,0)
		for (let i = 0; i < 12; i ++) {
			ellipse(0, leaves_width/2, leaves_width, leaves_height);
			rotate(PI/5);
		}
		pop()
	}

	//drawTree(100,200,180,50);
	drawTree(100,200,180, 30); // as long as tree height/width is in a 180:50 ratio it'll work
}