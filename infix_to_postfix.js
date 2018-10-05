

var PsMaker = function () {

    var obj = {};
    var infix_to_postfix_conversion = function (divElem) {


        $(document).ready(function () {
            var asddiv = document.createElement("div");
            asddiv.id = "infix_to_postfix";

            var header = document.createElement("div");
            header.id = "header";
            var footer = document.createElement("div");
            footer.id = "footer";
            var main = document.createElement("div");
            main.id = "main";

            divElem.appendChild(asddiv);
            divElem.appendChild(header);
            divElem.appendChild(main);
            divElem.appendChild(footer);
            var arr = [],temp;
            var arr_for_footer = [];
            var arr_for_header = [];
            var element_generate = new Elements();
            console.log("New");
            //console.log(sessionStorage.getItem('infix'));
            if(sessionStorage.getItem('infix')==null){
                sessionStorage.setItem('infix','(((7 / 15) + 27) - 17) ');
            }
            var infix = sessionStorage.getItem('infix').split(',');
            // infix = infix.join('');
            arr.push(element_generate.create_element_with_class("text", "Exercise", "","Exercise"));
            temp = element_generate.create_element("text", "question");
            temp.innerHTML="Convert the following expression to postfix: " + infix.join(' ') ;
            arr_for_header.push(temp);
            temp = element_generate.create_element("input", "pushtostack");
            temp.placeholder = "Type";
            arr.push(temp);
            arr.push(element_generate.create_element_with_class("text","instruction","","<strong> Instruction</strong> <br/>1. Push the ‘(‘ and operators onto stack and output all numbers. <br/> 2. If the scanned element is ‘)’, pop and output from stack till an ‘(‘ is encountered. <br/> 3. Repeat steps 1 and 2, then pop and output the stack till it is empty."))
            arr.push(element_generate.create_button("push_tostack_button", "btn btn-danger", "", "button", "v"));
            temp = element_generate.create_element("text","push_to_stack_text");
            temp.innerText="Push to Stack";
            arr.push(temp);
            temp = element_generate.create_element("input", "typetooutput");
            temp.placeholder = "Type";
            arr.push(temp);
            arr.push(element_generate.create_button("type_tooutput_button", "btn btn-danger", "", "button", "v"));
            temp = element_generate.create_element("text","to_output");
            temp.innerText="Type to output";
            arr.push(temp);
            
            arr.push(element_generate.create_button("pop_button", "btn btn-danger", "", "button", "Pop"));
            // arr.push(element_generate.create_element("text", "popped_elements"));
            arr.push(element_generate.create_radio_button("input", "tooutput", "radio_button", "", "To Output"));
            temp = element_generate.create_element("text","tooutputtext");
            temp.innerHTML="To Output"
            arr.push(temp);
            arr.push(element_generate.create_radio_button("input", "toignore", "radio_button", "", "To Ignore"));
            temp = element_generate.create_element("text","toignoretext");
            temp.innerHTML="To Ignore"
            arr.push(temp);
            var canvas_test = element_generate.create_element("canvas", "canvas_for_conversion");
            canvas_test.width = "500";
			canvas_test.height = "600";
            canvas_test.innerHTML = "Your browser does not support canvas.";
            canvas_test.style = "margin-top:100px;";
            arr.push(canvas_test);
            arr.push(element_generate.create_element("text", "output"));
            arr.push(element_generate.create_element("text", "result"));
            
            arr_for_footer.push(element_generate.create_button("restart_button", "btn btn-info", "", "reset", "Restart"));

			arr_for_footer.push(element_generate.create_button("check_button", "btn btn-success", "", "button", "Check Answer"));

            // $('#infix_to_postfix').append('<input id="infix_expression" style="width:20%;" type="tel" placeholder="Enter infix expression">');
            // $('#infix_to_postfix').append('<button id="enter_button">Enter</button>');
            // $('#infix_to_postfix').append('<p> Perform the infix to postfix expression </p>');
            // $('#infix_to_postfix').append('<button id="push_tostack_button" class="btn btn-info">Push To Stack</button>');
            // $('#infix_to_postfix').append('<button id="push_topostfix_button">Output To Postfix</button>');
            // $('#infix_to_postfix').append('<button id="pop_fromstack_andpush_button">Pop From Stack And Output to postfix</button>');
            // $('#infix_to_postfix').append('<button id="pop_frompostfix_andignore_button">Pop From Stack And Ignore</button>');
            // $('#infix_to_postfix').append('<button id="check_answer">Check Answer</button>');
            // $('#infix_to_postfix').append('<button id="retry_button"> Retry </button><br/ >')
            // $('#infix_to_postfix').append('<canvas id="canvas_for_conversion" width="1000px" height="1000px">Your browser doesnt support canvas</canvas>');
            $('#infix_to_postfix').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.4.2/math.js"></script>');
            $('#infix_to_postfix').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.4.2/math.min.js"></script>');
            //$("#main").append(arr);
            $("#main").append(arr);
            $("#footer").append(arr_for_footer);
            $("#header").append(arr_for_header);
            var canvas = document.getElementById("canvas_for_conversion");
            var ctx = canvas.getContext("2d");
            console.log(sessionStorage.getItem('infix'));
            //  var infix = new Array();
            var values1 = new Array();
            var values2 = new Array();
            var pointer = 0;
            var exp_start_x = 100;
            var exp_start_y = 100;
            // var popped_elements =  new Array();
            // var gap = 20;
            // var pointer=0;
            var box_start_x = 0;
            var box_start_y = 600;
            var box_height = 40;
            var box_length = 500;

            function clearCanvas() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            // function draw_expression() {

            //     ctx.font = "25px Arial";
            //     ctx.fillStyle = "blue";
            //     ctx.fillText(values1, exp_start_x, exp_start_y);
            //     ctx.fillText(values2, exp_start_x + 400, exp_start_y);

            // }

            function draw_box() {


                clearCanvas();
                ctx.beginPath();
                for (var i = 0; i < values1.length; i++) {

                    ctx.fillStyle = "rgba(0, 172, 255, 1.0)";
                    ctx.fillRect(box_start_x, box_start_y - box_height * i, box_length, box_height);
                    ctx.stroke();
                    ctx.strokeStyle = "white";
                    ctx.rect(box_start_x, box_start_y - box_height * i, box_length, box_height);
                    ctx.stroke();
                }
                ctx.closePath();


            }

            function writeNumbers() {


                //draw_expression();
                draw_box();
                // draw_expression();
                //Fill array with numbers
                // console.log(values);
                for (var i = 0; i < values1.length; i++) {

                    ctx.font = "40px Bold";
                    // ctx.font = font_size;
                    // var txt = values[i].join(' ');
                    var txt = values1[i].toString();
                    var txtWidth = ctx.measureText(txt).width;

                    //Coordinates of numbers

                    var txtX = box_start_x + box_length / 2 - txtWidth / 2;
                    var txtY = box_start_y - box_height * i + (box_height) / 2 + 8;
                    ctx.fillStyle = "white";
                    ctx.fillText(txt, txtX, txtY);

                }

            }
            // $('#enter_button').on('click', function () {
            //     var infix1 = document.getElementById('infix_expression').value;
            //     // console.log(infix1);
            //     var infix_array = infix1.split(" ");
            //     // console.log(infix_array);
            //     var display_array = [];
            //     infix_array.forEach(function (element) {
            //         // console.log(element.length);
            //         if ($.isNumeric(element)) {
            //             display_array.push(element);
            //             // console.log(element);
            //         } else {
            //             for (i = 0; i < element.length; i++) {
            //                 // console.log(element[i]);
            //                 if (['(', ')', '+', '-', '*', '^', '/'].includes(element[i])) {
            //                     // console.log('yes');
            //                     display_array.push(element[i]);
            //                 } else {
            //                     var num_string = ""
            //                     while ((!(['(', ')', '+', '-', '*', '^', '/'].includes(element[i]))) && i < element.length) {
            //                         num_string = num_string.concat(element[i]);
            //                         i++;
            //                     }
            //                     i--;
            //                     display_array.push(num_string);
            //                 }
            //             }
            //         }

            //         // console.log(display_array);
            //     });
            //     infix = display_array;
            // });
            $('#push_tostack_button').on('click', function () {
                // values1.push(infix[pointer]);
                values1.push(document.getElementById('pushtostack').value)
                pointer++;
                writeNumbers();
            });
            $('#type_tooutput_button').on('click', function () {
                // values2.push(infix[pointer]);
                values2.push(document.getElementById('typetooutput').value);
                // pointer++;
                document.getElementById('output').innerHTML="Output: " + values2.join(' ');
                writeNumbers();
            });

            $('#pop_fromstack_andpush_button').on('click', function () {
                values2.push(values1.pop());
                writeNumbers();
            });
            $('#pop_frompostfix_andignore_button').on('click', function () {
                values1.pop();
                writeNumbers();
            });
            $('#pop_button').on('click', function () {
                popped_elements = new Array();
                popped_elements.push(values1.pop());
                writeNumbers();
                // document.getElementById('popped_elements') = 
            });
            $('#tooutput').on('click',function (){
                values2.push(popped_elements);
                popped_elements = new Array();
                document.getElementById('output').innerHTML="Output: " + values2.join(' ');
                writeNumbers();
                console.log("test");
                

            });
            $('#toignore').on('click',function (){
                popped_elements = new Array();
                writeNumbers();

            });
            
            $('#restart_button').on('click', function () {
                values1 = new Array();
                values2 = new Array();
                pointer = 0;
                document.getElementById('output').innerHTML="";
                document.getElementById('result').innerHTML = "";
                clearCanvas();
            });
            $('#check_answer').on('click', function () {
                var infix_instance = new Postfix_check();
                console.log(infix);
                var postfix = infix_instance.infix_to_postfix(infix).join('');console.log(postfix);
                
                var values_str = values2.join('');
                if (postfix != values_str) {
                    console.log(postfix);
                    console.log(values_str)
                    document.getElementById('result').innerHTML = "Wrong";

                } else {
                    document.getElementById('result').innerHTML = "Correct";
                }
            });

        });
    };

    obj.infix_to_postfix_conversion = infix_to_postfix_conversion;
    return obj;
};