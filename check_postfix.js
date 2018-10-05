function Postfix_check() {
    
}


Postfix_check.prototype.top_stack = function(stack) {
        return (stack[stack.length - 1]);
    }
Postfix_check.prototype.is_empty = function(stack)
    {
        if(stack.length<=0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    Postfix_check.prototype.precedence = function(operator) {
        switch(operator){
            case "^":
                return 3;
            case "*":
            case "/":
                return 2;
            case "+":
            case "-":
                return 1;
            
         }
    return -1;
    }

    Postfix_check.prototype.infix_to_postfix = function(infix1) {
        // infix = infix.replace(/[{()}]/g, '');
        // infix = infix.replace(/[\[\]']+/g, '');
        //console.log('Here1');
        // infix1 = "2 3 +";
        console.log(infix1);
        var postfix1 = new Array();
        var stack = new Array();
        // infix1 = infix1.split(" ");
        for (var i = 0; i < infix1.length; i++) {
            
            if ($.isNumeric(infix1[i])) {
                postfix1.push(infix1[i]);
            }
            else if (infix1[i] == '(')
            {
                stack.push(infix1[i]);
            }
            else if ( infix1[i] == ')')
            {

               while(!this.is_empty(stack) && this.top_stack(stack) != '(')
                {
                    // console.log(postfix1.push(stack.pop()));
                    
                    postfix1.push(stack.pop());
                }
                stack.pop();
            //    while(top_stack(stack) == '(')
            //    {
            //        stack.pop();
            //    } 
            //      // console.log('Here2');
            //     if(!is_empty(stack) && top_stack(stack)!= '(')
            //     {
            //         // console.log('Here3');
            //         return false;
            //     }
            //     else
            //     {
            //         // console.log('Here4');
            //         stack.pop();
            //     }

            }
            else{
                // console.log('Here5');
                // console.log(precedence(top_stack(stack)));
                // console.log(precedence(infix1[i]));
                while(!Postfix_check.prototype.is_empty(stack) &&  Postfix_check.prototype.precedence(Postfix_check.prototype.top_stack(stack))>=Postfix_check.prototype.precedence(infix1[i])) {
                    postfix1.push(stack.pop());
                    // console.log(postfix1.push(stack.pop()));
                }
                stack.push(infix1[i]);
                // console.log(stack.push(infix1[i]));
                // console.log(postfix1);
                // console.log(stack);
                // console.log('Here6');
            }
            // console.log(postfix1);
            // console.log(stack);
        }
        console.log(stack);
        while (!Postfix_check.prototype.is_empty(stack)) {
            // console.log('Here7');
            postfix1.push(stack.pop());
            // postfix[postfix.length] = topStack(stack);
            // stack.pop()
        }
        // var returnVal = ' ';
        // console.log(postfix);
        // for (var i = 0; i < postfix.length; i++) {
        //     returnVal += postfix[i];
        // }
        // postfix1.pop();
        console.log(postfix1);
        console.log(stack);
        return postfix1;
    }