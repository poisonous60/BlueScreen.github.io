var dots = [];
var MaxIndex = 157;
var Inc = 0.02005;

var len = 100;

class Dot {
	constructor(start_angle, r, b, g) {
		this.dx = [MaxIndex];
		this.dy = [MaxIndex];
		this.angle = start_angle;
		this.r = r;
		this.b = b;
		this.g = g;
		__init__(this.dx, this.dy)
	}

	move() {
		this.angle += Inc;
		putIndex(this.dx, sin(this.angle) * len);
		putIndex(this.dy, cos(this.angle) * len);
		// print("Move! dx : " + sin(this.angle) * len + ", dy : " + cos(this.angle) * len);
	}


	showPos() {
		print("This.dx[0] = " + this.dx[0] + "This.dy[0] = " + this.dy[0]);
	}
}

function display(dot1, dot2) {
	for (var i = 0; i < MaxIndex; i++) {
	// 	fill(dot1.r, dot1.b, dot1.g);
	// 	circle(dot1.dx[0], dot1.dy[0], 4);
	// 	fill(dot2.r, dot2.b, dot2.g);
	// 	circle(dot2.dx[0], dot2.dy[0], 4);
		line(dot1.dx[i], dot1.dy[i], dot2.dx[i], dot2.dy[i])
	}
}

function setup() {
	createCanvas(400, 400);
	dots[0] = new Dot(0, 255, 0, 0);
	dots[1] = new Dot(PI, 0, 255, 0);
}

function draw() {
	background(220);
	translate(200, 200);
	noFill();
	circle(0, 0, len);
	display(dots[0], dots[1])
	dots[0].move();
	dots[1].move();
	// dots[1].showPos();
}


function putIndex(li, value) {
	for (var i = li.length - 1; i > 0; i--) {
		li[i] = li[i - 1];
	}
	li[0] = value;
}

function __init__(dx, dy) {
	for (var i = 0; i < MaxIndex; i++) {
		dx[i] = 0;
		dy[i] = 0;
	}
}
