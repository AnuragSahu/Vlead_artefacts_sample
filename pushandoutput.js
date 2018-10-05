
var PsMaker = function () {

    var obj = {};
    var infix_to_postfix = function (divElem) {


        $(document).ready(function () {
            var arr = [];
            var elem_div = document.createElement("div");
            elem_div.id = "validate_infix";
            var canvas_div = document.createElement("div");
            canvas_div.id = "infix_to_postfix";
            divElem.appendChild(elem_div);
            divElem.appendChild(canvas_div);
            var element_generate  = new Elements();	console.log("New!");
            arr.push(element_generate.create_button("question1","","generate_random_infix","button","Q. 1"));
            arr.push(element_generate.create_button("question2","","generate_random_infix","button","Q. 2"));
            arr.push(element_generate.create_button("question3","","generate_random_infix","button","more ..."));
            arr.push(element_generate.create_element_with_class("text","questionid1","",""));
            // $('#validate_infix').append('<p id="questiontext1"> </p><input id ="random_infix_expression" style="width:20%;" disabled><br/>');
            arr.push(element_generate.create_element("input","infix_expression"));
            arr.push(element_generate.create_button("validate_button","","","button","Validate"));
            arr.push(element_generate.create_element_with_class("text","output","text-primary",""));
            arr.push(element_generate.create_element_with_class("text","questionid2","text-primary",""));
            $('#validate_infix').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.4.2/math.js"></script>');
			$('#validate_infix').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.4.2/math.min.js"></script>');
            $('#validate_infix').append(arr);
            $('#validate_infix').append('<button id="check_answer" class="btn btn-success">Check Answer</button>');
            $('#validate_infix').append('<button id="retry_button" class="btn btn-info"> Retry </button>');
            
            // console.log(sessionStorage.getItem("key"));
            
            var values_str = '';
            var pointer = 0;
            var infix = document.getElementById('infix_expression').value;
            	var exp_start_x = 100;
			var exp_start_y = 100;
            var gap = 20;
            string = "";
			var pointer=0;
			var box_start_x = 300;
			var box_start_y = 600;
			var	box_height = 40;
			var box_length = 150;
            var values = new Array();
            var usr_answer = '';
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
     
            $('#answer_button').on('click', function() {
     
            });
            var display_array = [];
            $('#validate_button').on('click', function () {
                infix = document.getElementById('infix_expression').value;
                var random = string;
                var return_value = validateInfix(infix);
                var infix_array = infix.split(" ");
                display_array = [];
                infix_array.forEach(function(element) {
                    if($.isNumeric(element)){
                        display_array.push(element);
                    }
                    else{
                        for(i=0;i<element.length;i++){
                            if(['(',')','+','-','*','^','/'].includes(element[i])){
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
                    
                
                })
                


                if (return_value != false) {
                    if($('[name="' + 'stack_elements' + '"]') != null){
                        $('[name="' + 'stack_elements' + '"]').remove();
                    }
                    if (math.eval(infix) != math.eval(random) || regex_compare(infix, random) == false ) {
                        document.getElementById('output').innerHTML = "You have changed the original expression. Please use the same given above.";
                    }
                    else {
                        document.getElementById('output').innerHTML = "This is a valid/balanced infix numerical expression";
                        var arr_but = new Array();
                        count = 0;
                        display_array.forEach(function(element) {
                            var tempo = element_generate.create_button(element+':'+count,"exercise_buttons_1:unselected","stack_elements","button",element);
                            tempo.style="border-radius: 50%;";
                            arr_but.push(tempo);
                            count += 1;
                            $('#infix_to_postfix').append(arr_but);
                        })
                    }
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
                    sessionStorage.setItem('infix',infix);
                    console.log(sessionStorage.getItem('infix'));
                    
                    // clearCanvas();
                //  draw_expression();
                }
                
            });
            
            var no_of_operands = 4;
            var operators = ['+', '-', '*', '/', '^'];
            $('[name="generate_random_infix"]').on('click', function () {

                string = "";
                for (var i = 0; i < no_of_operands; i++) {
                    var numb = Math.ceil(Math.random() * 100);
                    string = string.concat(numb.toString(), " ");
                    if (i != no_of_operands - 1) {
                        var index = (Math.floor(Math.random() * 100) % 5);
                        string = string.concat(operators[index], " ");
                    }
                }
                document.getElementById('questionid1').innerText = "Validate the given infix expression : " + string;

                document.getElementById('infix_expression').value = string;
                    
            });
            
            
           $('#push_button').on('click', function () {
                if(pointer>=infix.length)
                    return;
                values.push(infix[pointer]);
                pointer++;

            });
            $('#undo_button').on('click', function () {
                values.pop();
                pointer--;
            });
            $('#ignore_button').on('click', function() {
                if(pointer>=infix.length)
                    return;
                pointer++;
            }); 
            $('#retry_button').on('click',function () {
                values = new Array();
                pointer = 0;
                values_str = '';
                var all_elem = $('[name="' + 'stack_elements' + '"]');
                all_elem.each(function(element) {
                    var classname_elem = all_elem[element].className;
                    if(classname_elem.split(':').pop() == 'selected') {
                        all_elem[element].className = classname_elem.split(':').shift() + ':' +'unselected';
                        console.log(all_elem[element]);
                    }

                });
            });
            $('#infix_to_postfix').on('click', 'button',function() {
                var class_elem = $(this).attr('class');
                console.log(class_elem);
                
                if(class_elem.split(':').pop() == 'unselected'){
                    $(this).removeClass();
                    $(this).addClass(class_elem.split(':').shift() +':'+ 'selected');
                }
                else if(class_elem.split(':').pop() == 'selected') {
                    $(this).removeClass();
                    $(this).addClass(class_elem.split(':').shift() +':'+ 'unselected');
                }
            });
            
            function generate_last_level() {
                $("button[class^='exercise_buttons_1']").attr("disabled", true);
                console.log($("button[class^='exercise_buttons_1']"));
                if(!$("button[class^='exercise_buttons_1']").is(":disabled")) {

                }
                if(!$("button[class^='exercise_buttons_2']").is(":disabled")) {
                    var count = 0;var arr_but = new Array();
                    display_array.forEach(function(element) {
                        arr_but.push(element_generate.create_button(element+'::'+count,"exercise_buttons_2:unselected","stack_elements","button",element));
                        count += 1;
                    });
                    $('#infix_to_postfix').append(arr_but);
                }
            }


            $('#check_answer').on('click', function () {

                
                values_str = '';
                // console.log($("button[class^='exercise_buttons_1']").is(":disabled"));
                if(!$("button[class^='exercise_buttons_1']").is(":disabled")) {
                    var infix_str = infix.join('');
                    var check_values = infix_str.replace(/[0-9)]/g, '');
                    // var all_elem = $('[name="' + 'stack_elements' + '"]');
                    var all_elem = $("button[class^='exercise_buttons_1']");
                    all_elem.each(function(element) {
                        var classname_elem = all_elem[element].className;
                        if(classname_elem.split(':').pop() == 'selected') {
                            values_str = values_str.concat(all_elem[element].innerText);
                        }

                    });
                    if(check_values != values_str ) {
                        console.log(check_values);
                        console.log('Wrong!');
                        
                    }
                    else
                    {
                        console.log("Yea!");
                        generate_last_level();
                    }                
                }
                else if(!$("button[class^='exercise_buttons_2']").is(":disabled")){
                    var all_elem = $("button[class^='exercise_buttons_2']");
                    var is_correct = 1;
                    all_elem.each(function(element) {
                        var classname_elem = all_elem[element].className;
                        if(classname_elem.split(':').pop() == 'selected') {
                            // values_str = values_str.concat(all_elem[element].innerText);
                            
                            
                            if(['(',')','+','-','*','^','/'].includes(all_elem[element].innerText)){
                                is_correct = -1;console.log('asdasdasd');
                                console.log(all_elem[element].innerText);
                                
                            }
                            else {
                                var as = all_elem[element].className;console.log(as);
                                console.log(all_elem[element].innerText);
                                if(classname_elem.split(':').pop() == 'unselected') {
                                    is_correct = 0;
                                }       
                            }
                            
                        }

                    });
                    if(is_correct == 1){
                        console.log("Yea!");
                    }
                    else{
                        console.log(is_correct);
                        console.log("Wrong!!!!");
                        
                        
                    }

                }

            });
        });
    };

    obj.infix_to_postfix = infix_to_postfix;
    return obj;
};