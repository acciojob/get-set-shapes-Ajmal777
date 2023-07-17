//complete this code
class Rectangle {
	width;
	height;
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	getArea(){
		return this.width * this.height;
	}
	
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super();
		this.width = side;
		this.height = side;
	}
	getPerimeter(){
		return this.width * this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
