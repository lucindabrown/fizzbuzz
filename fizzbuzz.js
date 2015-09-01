var fizzAnswer = function (){
	var resultString = '';
	var resultObjects = '';
	for(var i = 1; i<=100; i++){
		
		if(i%3!=0 && i%5!=0){
		resultString += i + "\n";
	}
		else if(i%3==0){
		resultString += "fizz ";
		if(i%5==0){
		resultString += "buzz";
		}
		resultString += "\n";
		}
		else {
			resultString += "buzz \n";
		}
	}
	return resultString;
}();
console.log(fizzAnswer);


$(document).ready(function () {
            $("#answerList").text(fizzAnswer);
        });
//$( "#answerList" ).append(fizzAnswer);


