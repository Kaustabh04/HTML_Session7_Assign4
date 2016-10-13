
// Outer Function

function outerFunction(){
	var txt = "Hello World";
	
	// Inner Function
	function innerFunction(){
		console.log(txt)
	}
	innerFunction();
}
outerFunction();


