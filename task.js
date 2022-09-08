function print(){
	   var input = document.getElementById("input");
	   console.log(input.value);
	   
	   var output = document.createElement("p");
	   output.innerText = input.value;
	   document.getElementByTagName("BODY")[0].appendChild(output);
	   input.value = "";
	}