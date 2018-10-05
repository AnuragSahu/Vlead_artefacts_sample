
var PsMaker = function () {

    var obj = {};
    var infix_to_postfix = function (divElem) {


        $(document).ready(function () {
            var elem_div = document.createElement("div");
            elem_div.id = "validate_infix";
            var canvas_div = document.createElement("div");
            canvas_div.id = "infix_to_postfix";
            divElem.appendChild(elem_div);
            divElem.appendChild(canvas_div);
            $('#validate_infix').append('<button id="generate_random_infix" class="btn btn-default">Generate Random Expression</button> ');
            $('#validate_infix').append('<p id="question"> The random infix expression is shown below. Please put parenthesis at appropriate places following the BODMAS rule and insert the final expression into the text-box shown below to verify your answer</p><input id ="random_infix_expression" style="width:20%;" disabled><br/>');
            $('#validate_infix').append('<input id="infix_expression" style="width:20%;" type="tel" placeholder="Enter balanced infix expression">');
            // $('#validate_infix').append('<button id="generate_random_infix">Generate Random Expression</button> ');
            $('#validate_infix').append('<button id="validate_button" class="btn btn-warning">Validate</button>');
            $('#validate_infix').append('<p id = "output">Checks wheteher expression is infix and balanced or not.</p>');
            // $('#validate_infix').append('<button id = "eval_infix">Evaluate Infix</button>')
            $('#validate_infix').append('<p> Push the elements that has to be pushed for infix to postfix expression </p>');
            $('#validate_infix').append('<button id="push_button" class="btn btn-danger">Push</button>');
            $('#validate_infix').append('<button id="undo_button" class="btn btn-danger">Undo</button>');
            $('#validate_infix').append('<button id="ignore_button" class="btn btn-danger">Ignore</button>');
            $('#validate_infix').append('<button id="check_answer" class="btn btn-success">Check Answer</button>');
            $('#validate_infix').append('<button id="retry_button" class="btn btn-info"> Retry </button>');
            $('#validate_infix').append('<button id="answer_button" class="btn btn-info"> Show Answer </button><br/ >');
            $('#validate_infix').append('<canvas id="canvas_for_push" width="1000" height="1000">Your browser doesnt support canvas</canvas>');
            console.log(sessionStorage.getItem("key"));
            
            // console.log('Here!!');
            // var ps = new PerfectScrollbar('.container');
            var canvas = document.getElementById("canvas_for_push");
            console.log(document.getElementById("canvas_for_push"));
			var ctx = canvas.getContext("2d");	
            
            var pointer = 0;
            var infix = document.getElementById('infix_expression').value;
            	var exp_start_x = 100;
			var exp_start_y = 100;
			var gap = 20;
			var pointer=0;
			var box_start_x = 300;
			var box_start_y = 600;
			var	box_height = 40;
			var box_length = 150;
			var values = new Array();
            function validateInfix(infix) {
                var balance = 0;
                // remove white spaces to simplify regex
                infix = infix.replace(/\s/g, '');

                // if it has empty parenthesis then is not valid
                if (/\(\)/.test(infix)) {
                    return false;
                }

                // valid values: integers and identifiers
                var value = '(\\d+|[a-zA-Z_]\\w*)';
                // the unary '+' and '-'
                var unaryOper = '[\\+\\-]?';
                // the arithmetic operators
                var arithOper = '[\\+\\-\\*\\/]';
                // the comparison operators
                var compOper = '(\\<\\=?|\\>\\=?|\\=\\=|\\!\\=)';

                // if it has more than one comparison operator then is not valid
                if (infix.match(new RegExp(compOper).length > 1)) {
                    return false;
                }
                try {
                    var b = eval(infix);
                }
                catch (err) {
                    return false;
                }
                var regex = new RegExp(unaryOper + value + '((' + arithOper + '|' + compOper + ')' + unaryOper + value + ')*');
                var balance_stack = new Array();
                for (var i = 0; i < infix.length; i++) {

                    if (!($.isNumeric(infix[i]))) {
                        if (infix[i] != ')')
                            balance_stack.push(infix[i]);
                        else {
                            if (balance_stack[balance_stack.length - 1] == '(')
                                return false;
                            balance_stack.pop();
                            balance_stack.pop();
                        }
                    }

                }
                if (balance_stack.length > 0)
                    return false;
                infix = infix.replace(/[\(\)]/g, '');
                console.log(infix);
                console.log(regex.test(infix));

                return regex.test(infix);
            }
            function regex_compare(array1, array2) {
                array1 = array1.replace(/[^0-9+*/^-]/g, '');
                array2 = array2.replace(/[^0-9+*/^-]/g, '');
                if (array1 == array2)
                    return true;
                else
                    return false;
            }
            function clearCanvas() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			}
            function draw_expression() {
			     
			        ctx.font = "25px Arial";
                    ctx.fillStyle = "blue";
					ctx.fillText(infix.join('  '), exp_start_x, exp_start_y);
				
			}
			function draw_box() {
	
	
					clearCanvas();
					ctx.beginPath();
					for(var i=0;i<values.length;i++)
					{
						
						ctx.fillStyle = "blue";
						ctx.fillRect(box_start_x, box_start_y - box_height * i, box_length, box_height);
						ctx.stroke();
						ctx.strokeStyle="white";
						ctx.rect(box_start_x, box_start_y - box_height * i, box_length, box_height);
						ctx.stroke();
					}
					ctx.closePath();
	
	
			}
            function writeNumbers() {
	
				
				//draw_expression();
				draw_box();
				 draw_expression();
                //Fill array with numbers
                // console.log(values);
				for(var i=0; i<values.length; i++) {
	
					ctx.font = "25px Arial";
					// ctx.font = font_size;
                    // var txt = values[i].join(' ');
                    var txt = values[i].toString(); 
					var txtWidth = ctx.measureText(txt).width;
	
					//Coordinates of numbers
	
					var txtX = box_start_x + box_length/2-txtWidth/2;
					var txtY = box_start_y - box_height*i + (box_height)/2 + 8;
					ctx.fillStyle = "white";
					ctx.fillText(txt, txtX, txtY);
	
				}
	
            }
            $('#answer_button').on('click', function() {
                ctx.font = "25px Arial";
                ctx.fillStyle = "blue";
                var infix_str = infix.join('');
                var check_values = infix_str.replace(/[0-9)]/g, '');
                console.log(check_values);
				ctx.fillText(check_values, 100, 200);
            });
            $('#validate_button').on('click', function () {
                infix = document.getElementById('infix_expression').value;
                var random = document.getElementById('random_infix_expression').value
                var return_value = validateInfix(infix);
                // infix = infix.split(" ");
                var infix_array = infix.split(" ");
                // console.log(infix_array);
                var display_array = [];
                infix_array.forEach(function(element) {
                    // console.log(element.length);
                    if($.isNumeric(element)){
                        display_array.push(element);
                        // console.log(element);
                    }
                    else{
                        for(i=0;i<element.length;i++){
                            // console.log(element[i]);
                            if(['(',')','+','-','*','^','/'].includes(element[i])){
                                // console.log('yes');
                                display_array.push(element[i]);
                            }
                            else{
                                var num_string = ""
                                while(   (!(['(',')','+','-','*','^','/'].includes(element[i])))   && i < element.length  ){
                                    num_string = num_string.concat(element[i]);
                                    i++;
                                }
                                i--;
                                display_array.push(num_string);
                            }
                        }    
                    }
                    
                    console.log(display_array);
                })
                
                if (return_value != false) {
                    document.getElementById('output').innerHTML = "This is a valid/balanced infix numerical expression";
                }
                else {
                    document.getElementById('output').innerHTML = " This is not a valid/balanced infix numerical expression";
                }
                if (math.eval(infix) != math.eval(random) || regex_compare(infix, random) == false ) {
                    document.getElementById('output').innerHTML = "You have changed the original expression. Please use the same given above.";
                    
                }
                else if(return_value!=false)
                {
                    
                    infix = display_array;
                    clearCanvas();
                 draw_expression();
                }
                
            });
            
            var no_of_operands = 4;
            var operators = ['+', '-', '*', '/', '^'];
            $('#generate_random_infix').on('click', function () {

                var string = "";
                for (var i = 0; i < no_of_operands; i++) {
                    var numb = Math.ceil(Math.random() * 100);
                    string = string.concat(numb.toString(), " ");
                    if (i != no_of_operands - 1) {
                        var index = (Math.floor(Math.random() * 100) % 5);
                        string = string.concat(operators[index], " ");
                    }
                }
                document.getElementById('random_infix_expression').value = string;
                document.getElementById('infix_expression').value = string;
                    
            });
            
            
           $('#push_button').on('click', function () {
                if(pointer>=infix.length)
                    return;
                console.log(pointer);
                values.push(infix[pointer]);
                pointer++;
                console.log(values);
				writeNumbers();
            });
            $('#undo_button').on('click', function () {
                values.pop();
                pointer--;
                writeNumbers();
            });
            $('#ignore_button').on('click', function() {
                if(pointer>=infix.length)
                    return;
                console.log(pointer);
                // console.log(values);
                pointer++;
                writeNumbers();
            }); 
            $('#retry_button').on('click',function () {
                values = new Array();
                pointer = 0;
                clearCanvas();
            });
            $('#check_answer').on('click', function () {
                var infix_str = infix.join('');
                var check_values = infix_str.replace(/[0-9)]/g, '');
                var values_str = values.join('');
                if(check_values != values_str ) {
                    console.log(check_values);
                    console.log(values);
                    ctx.fillStyle = "blue";
                    ctx.fillText("Wrong!", box_start_x+300,box_start_y - 200);
                    
                }
                else
                {
                    console.log("Yea!");
                    ctx.fillStyle = "blue";
                    ctx.fillText("Correct!", box_start_x+300,box_start_y - 200 );
                }                
            });
        });
    };

    obj.infix_to_postfix = infix_to_postfix;
    return obj;
};