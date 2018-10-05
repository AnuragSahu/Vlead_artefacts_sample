var EvMaker = function () {

	var obj = {};
		var postfix_eval = function(divElem)
		{


		$(document).ready(function() {
			// function create_element(tag,id){
			// 	var elemc = document.createElement(tag);
			// 	elemc.id=id;
			// 	return elemc;
			// }
			// function create_element_with_class(tag,id,classname,text){
			// 	var elemc = document.createElement(tag);
			// 	elemc.id=id;
			// 	elemc.className = classname;
			// 	// elemc.type=type;
			// 	elemc.innerHTML = text;
			// 	return elemc;
			// 	// $("<input>",
			// 	// 	{ type:'text',
			// 	// 	placeholder:'Keywords',
			// 	// 	name:'keyword',
			// 	// 	style:'width:65%' }
			// 	// )
			// }
			// function create_button(id,className,name,type,text){
			// 	var elem = document.createElement("button");
			// 	elem.id=id;
			// 	elem.className = className;
			// 	elem.name = name;
			// 	elem.type=type;
			// 	elem.innerHTML = text;
			// 	return elem;
			// }

			// $('#createElements').html('');
			// var arr = [],temp;
			// temp = create_element("input","numbers");temp.type="tel";temp.placeholder = "Enter a number to push";temp.max = "999999";
			// arr.push(temp);

			// arr.push(create_button("Enter_button","btn btn-warning","","button","<--- Enter"));

			// arr.push(create_button("push_button","btn btn-danger","","button","Push"));

			// arr.push(create_button("pop_button","btn btn-danger","","button","Pop"));

			// arr.push(create_button("enable_operators_button","btn btn-default","s","button","Enable Operators"));

			// arr.push(create_button("restart_button","btn btn-info","","reset","Restart"));

			// arr.push(create_button("add_button","btn btn-default","operators","button","+"));

			// arr.push(create_button("subtract_button","btn btn-default","operators","button","-"));

			// arr.push(create_button("multiply_button","btn btn-default","operators","button","*"));

			// arr.push(create_button("divide_button","btn btn-default","operators","button","/"));

			// arr.push(create_button("exponent_button","btn btn-default","operators","button","^"));


			// var canvas_test = create_element("canvas","stackArray");

			var element_generate  = new Elements();

			arr.push(element_generate.create_button("generate_random_postfix_button","btn btn-default","s","button","Generate random postfix"));
            // arr.push(create_button("generate_random_postfix_button","btn btn-default","s","button","Generate random postfix" ));
			temp1 = element_generate.create_element("input","question_postfix");
			temp1.type="tel";
            arr.push(temp1);
            temp2 = element_generate.create_element("input","numbers");temp2.type="tel";temp2.placeholder = "Enter a number to push";temp2.max = "999999";
			arr.push(temp2);

			// arr.push(create_button("Enter_button","btn btn-warning","","button","<--- Enter"));

			arr.push(element_generate.create_button("push_button","btn btn-danger","","button","Push"));

			arr.push(element_generate.create_button("pop_button","btn btn-danger","","button","Pop"));

			arr.push(element_generate.create_button("enable_operators_button","btn btn-default","s","button","Enable Operators"));

			arr.push(element_generate.create_button("restart_button","btn btn-info","","reset","Restart"));

            arr.push(element_generate.create_button("check_answer","btn btn-success","","button","Check Answer"));

            arr.push(element_generate.create_button("add_button","btn btn-default","operators","button","+"));

			arr.push(element_generate.create_button("subtract_button","btn btn-default","operators","button","-"));

			arr.push(element_generate.create_button("multiply_button","btn btn-default","operators","button","*"));

			arr.push(element_generate.create_button("divide_button","btn btn-default","operators","button","/"));

			arr.push(element_generate.create_button("exponent_button","btn btn-default","operators","button","^"));


			var canvas_test = element_generate.create_element("canvas","stackArray");



			canvas_test.width = "1000";canvas_test.height="1000";canvas_test.innerHTML="Your browser does not support canvas.";
			arr.push(canvas_test);
			console.log(arr);
			$('#createElements').append(arr);
			var canvas = document.getElementById("stackArray");
			var ctx = canvas.getContext("2d");
			//Font of numbers to be inserted
			//Dimensions of array rectangle
			//arrayLength = 550;
			//arrayHeight = 550;

			//Number of array blocks
			//arrayNo = 10;
			//Starting position of array coordinates
			var exp_start_x = 100;
			var exp_start_y = 100;
			var gap = 20;
			var pointer=0;
			var box_start_x = 300;
			var box_start_y = 600;
			var	box_height = 40;
			var box_length = 150;

			//Position of the indices of the array
			// indexPosx = arrayStartx;
			// indexPosy = arrayStarty + arrayHeight + 40;
			// number_of_boxes = 0;
			//Function to clear canvas
			function clearCanvas() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			}
			function draw_expression() {


					ctx.font = "25px Arial";

					var txt = expression.join('  ');
					var exp = new Array();
					var txt2 = exp.join('  ');
					//Coordinates of number_of_boxes
					var txtWidth = ctx.measureText(txt).width;
					console.log(expression);
					var txtX = exp_start_x ;
					var txtY = exp_start_y;

					// var sub_string1 = txt.substr(0,pointer);
					// var sub_string2 = txt.substr(pointer,1);
					if(expression[pointer]!=null)
					var sub_string3 = txt.substr((2+expression[pointer].length)*pointer);
					else
					var sub_string3= " ";
					// ctx.fillStyle = "red";
					// ctx.fillRect(txtX + 30 * pointer, txtY, box_length/16,box_height/6);
					ctx.fillStyle = "blue";
					ctx.fillText(sub_string3, txtX, txtY);
					// console.log(sub_string1);
					// console.log(sub_string2);
					// console.log(sub_string3);
					// ctx.fillText(sub_string1, txtX-200, txtY);
					// ctx.fillStyle = "red";
					// ctx.fillText(sub_string2, txtX, txtY);
					// ctx.fillStyle = "blue";
					// ctx.fillText(sub_string3, txtX+200, txtY);

			}
			//Drawing the base of the array
			function draw_box() {


					clearCanvas();
					ctx.beginPath();
					for(var i=0;i<values.length;i++)
					{
						// ctx.fillStyle = "#1565c0";
						ctx.fillStyle = "red";
						ctx.fillRect(box_start_x, box_start_y - box_height * i, box_length, box_height);
						ctx.stroke();
						ctx.strokeStyle="blue";
						ctx.rect(box_start_x, box_start_y - box_height * i, box_length, box_height);
						ctx.stroke();
					}
					ctx.closePath();


			}
			function double_pop()
			{
				var operand1=parseInt(values[values.length-1]);
				values.pop();
				writeNumbers();

				var operand2=parseInt(values[values.length-1]);
					values.pop();
				writeNumbers();
				if(!(values.length > 0)){
					$('[name="operators"]').prop('disabled',true);
					$('#enable_operators_button').prop('disabled',true);
				}
				return [operand1,operand2];
			}
			//Function to write the values entered by the user into the array
			function writeNumbers() {


				//draw_expression();
				draw_box();
				 draw_expression();
				//Fill array with numbers
				for(var i=0; i<values.length; i++) {

					ctx.font = "25px Arial";
					// ctx.font = font_size;
					var txt = values[i].toString();
					var txtWidth = ctx.measureText(txt).width;

					//Coordinates of numbers

					var txtX = box_start_x + box_length/2-txtWidth/2;
					var txtY = box_start_y - box_height*i + (box_height)/2 + 8;
					ctx.fillStyle = "white";
					ctx.fillText(txt, txtX, txtY);

				}

			}

			$('#Enter_button').on('click', function () {
				var exp_var= document.getElementById('numbers').value;

				// if(!(expression.length > 1)){
				// 	$('.operations').prop('disabled',true);
				// }
				// var head_pointer = 0;
				if(exp_var != '')
				{
					//values.push(value);
					expression.push(exp_var);
				}

				// if((expression.length > 1)){
				// 	$('.operations').prop('disabled',false);
				// }
				// console.log(value);
				//number_of_boxes = number_of_boxes + 1;
				draw_expression();
				// writeNumbers();
			});
			$('#push_button').on('click', function () {

				var value = expression[pointer++];
				if(!(values.length > 1)){
					$("[name='operators]").prop('disabled',true);
					$('#enable_operators_button').prop('disabled',true);
				}
				if(value != null)
				{

					values.push(value);
					// expression.push(value);
				}
				else
				{
					pointer--;
				}
				if((values.length > 1)){
					$("[name='operators']").prop('disabled',false);
					$('#enable_operators_button').prop('disabled',false);
				}
				console.log(value);
				//number_of_boxes = number_of_boxes + 1;

				writeNumbers();
			});
			$('#pop_button').on('click',function () {

				values.pop();
				writeNumbers();
				if(!(values.length > 1)){
					$("[name='operators']").prop('disabled',true);
					$('#enable_operators_button').prop('disabled',true);
				}

			});
			$('#enable_operators_button').on('click',function () {
				var operators = document.getElementsByName("operators");
				if(operators[0].style.display == "none"){
					for (var i = 0; i < operators.length; i++)
					{
						operators[i].style.display = "block";
					}
				}
				else{
					for (var i = 0; i < operators.length; i++)
					{
						operators[i].style.display = "none";
					}
				}
			});


			$('#add_button').on('click',function() {
				var operands = double_pop();
				// expression.push('+');
				values.push(parseFloat((parseFloat(operands[1])+parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#subtract_button').on('click',function () {
				var operands = double_pop();
				// expression.push('-');
				values.push(parseFloat((parseFloat(operands[1])-parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#multiply_button').on('click',function () {
				var operands = double_pop();
				// expression.push('x');
				values.push(parseFloat((parseFloat(operands[1])*parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#divide_button').on('click',function () {
				var operands = double_pop();
				// expression.push('/');
				values.push(parseFloat((parseFloat(operands[1])/parseFloat(operands[0])).toFixed(3)));
				writeNumbers();
			});
			$('#exponent_button').on('click',function ()	{
				var operands = double_pop();
				// expression.push('^');
				values.push(parseFloat((Math.pow(parseFloat(operands[1]),parseFloat(operands[0])).toFixed(3))));
				console.log('values');
				writeNumbers();
			});
			$('#restart_button').on('click', function() {
				values.length = 0;
				expression.length = 0;
				clearCanvas();



			});
			var values = new Array();
			var expression = new Array();
	});
	};
		obj.postfix_eval = postfix_eval;
		return obj;

	};

