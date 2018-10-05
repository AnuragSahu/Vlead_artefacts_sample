var EvMaker = function () {

	var obj = {};
	var postfix_eval = function (divElem) {

		// console.log(divElem);
		$(document).ready(function () {
			var div_for_header = document.createElement("div");
			div_for_header.id = "header";
			var div_for_main = document.createElement("div");
			div_for_main.id = "main"; 
			var create_element = document.createElement("div");
			create_element.id = "create_element";
			var canvas_element = document.createElement("div");
			canvas_element.id = "canvas_element";
			var div_for_footer = document.createElement("div");
			div_for_footer.id = "footer";
			divElem.appendChild(div_for_header);
			div_for_main.appendChild(create_element);
			div_for_main.appendChild(canvas_element);
			divElem.appendChild(div_for_main);
			divElem.appendChild(div_for_footer);
			
			var arr = [],
				arr1 = [],temp = [],
				temp1 = [], temp2;
			var element_generate = new Elements();
			// temp
			temp1.push(element_generate.create_element_with_class("text", "Exercise", "","Exercise"));
			temp1.push(element_generate.create_button("Q1","question_button", "question_button",  "button", "Q.1"));
			temp1.push(element_generate.create_button("Q2","question_button", "question_button",  "button", "Q.2"));
			temp1.push(element_generate.create_button("more","question_button", "question_button",  "button", "more.."));
			temp1.push(element_generate.create_element_with_class("text","instruction","","<strong> Instruction</strong> <br/>1. Push the number onto stack as given in the question.<br/> 2. Pop two numbers and operate on them.<br/> 3. Push the result back onto stack and continue till you have completely evaluated the expression. "))
			temp2 = element_generate.create_element("input", "numbers");
			temp2.type = "tel";
			temp2.placeholder = "Enter a number to push";
			temp2.max = "999999";
			arr.push(temp2);

			
			arr.push(element_generate.create_element_with_class("text", "questionid", "", ""));
			
			$('#header').append(temp1);

			
	
			arr.push(element_generate.create_button("add_button", "btn btn-default", "operators", "button", "+"));
			arr.push(element_generate.create_button("subtract_button", "btn btn-default", "operators", "button", "-"));

			arr.push(element_generate.create_button("multiply_button", "btn btn-default", "operators", "button", "*"));


			arr.push(element_generate.create_button("divide_button", "btn btn-default", "operators", "button", "/"));

			arr.push(element_generate.create_button("exponent_button", "btn btn-default", "operators", "button", "^"));

			temp.push(element_generate.create_button("restart_button", "footer", "footer", "reset", "Restart"));

			temp.push(element_generate.create_button("check_button", "footer", "footer", "button", "Check"));
			temp.push(element_generate.create_image("result","","","50","50"))
			$('#footer').append(temp);
			

			// console.log("here");

			sessionStorage.setItem("key", "value");
			// console.log(sessionStorage.getItem("key"));
			var canvas_test = element_generate.create_element("canvas", "stackArray");
			canvas_test.width = "500";
			canvas_test.height = "600";
			canvas_test.innerHTML = "Your browser does not support canvas.";
			canvas_test.style = "margin-top:100px;";
			arr1.push(canvas_test);
			arr1.push(element_generate.create_button("pop_button", "", "", "button", "Pop"));
			// var canvas_test_1 = element_generate.create_element("canvas","expArray");			
			// canvas_test_1.width = "500";canvas_test_1.height="100";canvas_test_1.innerHTML="Your browser does not support canvas.";canvas_test_1.style="margin-bottom:450px;margin-left:-100px";
			// arr1.push(canvas_test_1);
			arr.push(element_generate.create_button("push_button", "", "", "button", ""));
			// var asd1 = document.getElementById("canvas_element");
			// console.log(divElem.id);
			var idd = divElem.id;
			$('#footer').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.4.2/math.js"></script>');
			$('#footer').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.4.2/math.min.js"></script>');
			$("#create_element").append(arr);
			$("#canvas_element").append(arr1);

			// $('#' + idd).append(arr);
			// $('#' + idd).append(arr1);
			var canvas = document.getElementById("stackArray");
			var canvas_1 = document.getElementById("expArray");
			var ctx = canvas.getContext("2d");
			// var ctx_1 = canvas_1.getContext("2d");
			var expression;
			// var postfix_expr;
			var pointer = 0;
			var box_start_x = 0;
			var box_start_y = 600;
			var box_height = 75;
			var box_length = 500;

			//Position of the indices of the array
			// indexPosx = arrayStartx;
			// indexPosy = arrayStarty + arrayHeight + 40;
			// number_of_boxes = 0;
			//Function to clear canvas
			function clearCanvas() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				// ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
			}

			function clearCanvas1() {
				// ctx.clearRect(0, 0, canvas.width, canvas.height);
				// ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
			}

			function draw_expression() {

				clearCanvas1();
				// ctx_1.font = "25px Arial";
				var exp = expression.split(" ");
				var txt = exp.join('  ');
				var exp = new Array();
				var txt2 = exp.join('  ');
				//Coordinates of number_of_boxes
				var txtWidth = ctx_1.measureText(txt).width;
				// console.log(expression);
				var txtX = exp_start_x - 10;
				var txtY = exp_start_y - 50;
				// var sub_string1 = txt.substr(0,pointer);
				// var sub_string2 = txt.substr(pointer,1);
				if (expression[pointer] != null)
					var sub_string3 = txt.substr((2 + expression[pointer].length) * pointer);
				else
					var sub_string3 = " ";
				// ctx.fillStyle = "red";
				// ctx.fillRect(txtX + 30 * pointer, txtY, box_length/16,box_height/6);
				// ctx_1.fillStyle = "blue";
				// ctx_1.fillText(sub_string3, txtX, txtY);
				// console.log(sub_string1);
				// console.log(sub_string2);
				// console.log(sub_string3);
				// ctx.fillText(sub_string1, txtX-200, txtY);
				// ctx.fillStyle = "red";
				// ctx.fillText(sub_string2, txtX, txtY);
				// ctx.fillStyle = "blue";
				// ctx.fillText(sub_string3, txtX+200, txtY);

			}
			// //Drawing the base of the array
			function draw_box() {


				clearCanvas();
				ctx.beginPath();
				for (var i = 0; i < values.length; i++) {
					// ctx.fillStyle = "#1565c0";
					ctx.fillStyle = "rgba(0, 172, 255, 1.0)";
					ctx.fillRect(box_start_x, box_start_y - box_height * (i + 1), box_length, box_height);
					ctx.stroke();
					ctx.strokeStyle = "white";
					ctx.rect(box_start_x, box_start_y - box_height * (i + 1), box_length, box_height);
					ctx.stroke();
				}
				ctx.closePath();


			}

			function double_pop() {
				var operand1 = parseFloat(values[values.length - 1]);
				values.pop();
				writeNumbers();

				var operand2 = parseFloat(values[values.length - 1]);
				values.pop();
				writeNumbers();
				if (!(values.length > 0)) {
					$('[name="operators"]').prop('disabled', true);
					// $('#enable_operators_button').prop('disabled',true);
				}
				return [operand1, operand2];
			}
			//Function to write the values entered by the user into the array
			function writeNumbers() {


				//draw_expression();
				draw_box();
				//  draw_expression();
				//Fill array with numbers
				for (var i = 0; i < values.length; i++) {
					console.log(values.length);
					ctx.font = "40px Bold";
					
					var txt = values[i].toString();
					var txtWidth = ctx.measureText(txt).width;
					
					//Coordinates of numbers
					
					var txtX = box_start_x + box_length / 2 - txtWidth / 2;
					var txtY = box_start_y - box_height * (i + 1) + (box_height) / 2 + 8;
					
					ctx.fillStyle = "white";
					ctx.fillText(txt, txtX, txtY);
					
				}

			}


			$('.question_button').on('click', function () {
				// postfix_expr = "22 5 36 * + 1 +";
				no_of_operands = 4;
				operators = ['+', '-', '*', '/', '^'];
				

				var string = "";
				for (var i = 0; i < no_of_operands; i++) {
					var numb = Math.ceil(Math.random() * 10);
					string = string.concat(numb.toString(), " ");
					if (i != no_of_operands - 1) {
						var index = (Math.floor(Math.random() * 100) % 5);
						string = string.concat(operators[index], " ");
					}
				}
					
				var exp = new Postfix_check();
				postfix_expr = exp.infix_to_postfix(string.split(' ')).join(' ').slice(0, -1);
				// console.log(postfix_expr);
				// console.log(string);
				document.getElementById('questionid').innerText = "Evaluate the following postfix expression : " + postfix_expr;
			});
			$('#push_button').on('click', function () {

				var value = document.getElementById('numbers').value;
				if (!(values.length > 1)) {
					$("[name='operators]").prop('disabled', true);
					// $('#enable_operators_button').prop('disabled',true);
				}
				if ($.isNumeric(value)) {


					if (value != null) {

						values.push(value);
						// expression.push(value);
					} else {
						pointer--;
					}
					if ((values.length > 1)) {
						$("[name='operators']").prop('disabled', false);
						// $('#enable_operators_button').prop('disabled',false);
					}
					// console.log(value);
					//number_of_boxes = number_of_boxes + 1;

					writeNumbers();
				} else {
					document.getElementById('numbers').value = "";
					document.getElementById('numbers').placeholder = "Operators are not yet pushed";
				}
			});
			// $('#show_answer').on('click',function() {
			// 	ctx.fillStyle = "blue";
			// 	ctx.fillText((eval_postfix(document.getElementById('question_postfix').value)), 100, 200);
			// })
			$('#pop_button').on('click', function () {

				values.pop();
				writeNumbers();
				if (!(values.length > 1)) {
					$("[name='operators']").prop('disabled', true);
					// $('#enable_operators_button').prop('disabled',true);
				}

			});


			$('#check_button').on('click', function () {
				var txtX = 100;
				var txtY = 200;
				//   console.log(eval_postfix(document.getElementById('question_postfix').value));
				console.log(eval_postfix(postfix_expr));
				if (eval_postfix(postfix_expr) == values[0] && values.length == 1) {
					document.getElementById('result').src = "./correct1.png"
					console.log("correct")
					// ctx.fillStyle = "blue";
					// ctx.fillText("Correct!", txtX, txtY);
				} else {
					document.getElementById('result').src = "./retry.png"
					
					console.log(values[0])
					console.log("wrong")
					// ctx.fillStyle = "blue";
					// ctx.fillText("Wrong!", txtX, txtY);
				}

			});
			$('#add_button').on('click', function () {
				var operands = double_pop();
				// expression.push('+');
				values.push(parseFloat((parseFloat(operands[1]) + parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#subtract_button').on('click', function () {
				var operands = double_pop();
				// expression.push('-');
				values.push(parseFloat((parseFloat(operands[1]) - parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#multiply_button').on('click', function () {
				var operands = double_pop();
				// expression.push('x');
				values.push(parseFloat((parseFloat(operands[1]) * parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#divide_button').on('click', function () {
				var operands = double_pop();
				// expression.push('/');
				values.push(parseFloat((parseFloat(operands[1]) / parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#exponent_button').on('click', function () {
				var operands = double_pop();
				// expression.push('^');
				values.push(parseFloat((Math.pow(parseFloat(operands[1]), parseFloat(operands[0])).toFixed(3))));
				// console.log('values');
				writeNumbers();
			});
			$('#restart_button').on('click', function () {
				values.length = 0;
				// expression.length = 0;
				clearCanvas();



			});
			var values = new Array();
			// var expression = new Array();
		});
	};
	obj.postfix_eval = postfix_eval;
	return obj;

};