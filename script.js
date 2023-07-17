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
	getPerimeter(){
		return this.width * this.height;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
