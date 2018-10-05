$(document).ready(function () {
	// $('#infix_to_postfix').append('<input id="infix_expression" type="tel" placeholder="Enter infix expression">');
	$('#infix_to_postfix').append('<button id ="convert_to_postfix">Convert to Postfix</button>');
	$('#infix_to_postfix').append('<p id ="postfix_expression">The postfix expression after conversion appears here</p>');
	$('#infix_to_postfix').append('<canvas id="canvas_for_conversion" width="100%" height="100%">Your browser doesnt support canvas</canvas>');
	var canvas = document.getElementById("canvas_for_conversion");
	var ctx = canvas.getContext("2d");

	function draw_canvas(infix) {

	}
	// function push_stack(stackArr, ele) {
	// 	stackArr[stackArr.length] = ele;
	// }

	// function pop_stack(stackArr) {
	// 	var _temp = stackArr[stackArr.length - 1];
	// 	delete stackArr[stackArr.length - 1];
	// 	stackArr.length--;
	// 	return (_temp);
	// }

	// function isOperand(who) {
	// 	return (!isOperator(who) ? true : false);
	// }

	// function isOperator(who) {p
	// 	return ((who == "+" || who == "-" || who == "*" || who == "/" || who == "(" || who == ")") ? true : false);
	// }

	function topStack(stackArr) {
		return (stackArr[stackArr.length - 1]);
	}


	function prcd(char1, char2) {
		var char1_index, char2_index;
		var _def_prcd = "-+*/^";
		for (var i = 0; i < _def_prcd.length; i++) {
			if (char1 == _def_prcd.charAt(i)) char1_index = i;
			if (char2 == _def_prcd.charAt(i)) char2_index = i;
		}
		if (((char1_index == 0) || (char1_index == 1)) && (char2_index > 1)) 
			return false;
		else 
			return true;
	}

	function InfixToPostfix(infixStr) {
		infixStr = infixStr.replace(/[{()}]/g, '');
		infixStr = infixStr.replace(/[\[\]']+/g, '');
		var postfixStr = [];
		var stackArr = [];

		infixStr = infixStr.split(" ");
		for (var i = 0; i < infixStr.length; i++) {
			// if (isOperand(infixStr[i])) {
			if ($.isNumeric(infixStr[i])) {
				postfixStr.push(infixStr[i]);
			}
			else {
				if (prcd(topStack(stackArr), infixStr[i])) {
					postfixStr.push(topStack(stackArr));
					stackArr.pop();
					stackArr.push(infixStr[i]);
					
				}
				if (infixStr[i] == ")") {
					stackArr.pop();
					while(topStack(stackArr)=='(')
					{
						stackArr.pop();
					}
				}
				else {
					stackArr.push(infixStr[i]);
				}
			}
			console.log(postfixStr);
			console.log(stackArr);
		}
		while (stackArr.length > 0) {
			postfixStr[postfixStr.length] = topStack(stackArr);
			stackArr.pop()
		}
		var returnVal = ' ';
		console.log(postfixStr);
		for (var i = 0; i < postfixStr.length; i++) {
			returnVal += postfixStr[i];
		}
		return returnVal;
	}

	$('#convert_to_postfix').on('click', function () {
		var infix = document.getElementById('infix_expression').value;
		var postfix = InfixToPostfix(infix);
		document.getElementById('postfix_expression').innerHTML = postfix;
	});
});