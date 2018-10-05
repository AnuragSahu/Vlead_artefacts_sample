
$(document).ready( function () {
	// $('#evaluate_postfix').append('<input id = "postfix_expression" type ="tel" placeholder="Enter postfix expression">');
	// $('#evaluate_postfix').append('<p id="eval_postfix">The evaluated postfix expression is displayed here</p>');
// var expression = require('expr-tree')
    eval_postfix = function(postfix) {
        var resultStack = [];
        postfix = postfix.split(" ");
        for(var i = 0; i < postfix.length; i++) {
            if($.isNumeric(postfix[i])) {
                resultStack.push(postfix[i]);
                // console.log(postfix[i]);
            } else {
                var a = resultStack.pop();
                var b = resultStack.pop();
                if(postfix[i] === "+") {
                    resultStack.push(parseFloat(a) + parseFloat(b));
                } else if(postfix[i] === "-") {
                    resultStack.push(parseFloat(b) - parseFloat(a));
                } else if(postfix[i] === "*") {
                    resultStack.push(parseFloat(a) * parseFloat(b));
                } else if(postfix[i] === "/") {
                    resultStack.push(parseFloat(b) / parseFloat(a));
                } else if(postfix[i] === "^") {
                    resultStack.push(Math.pow(parseFloat(b), parseFloat(a)));
                }
            }
        }
        if(resultStack.length > 1) {
            return "error";
        } else {
            return resultStack.pop();
        }
    }


// setInterval( function (){
// document.getElementById('eval_postfix').innerHTML = eval_postfix(document.getElementById('postfix_expression').value);
// }, 3000);
});