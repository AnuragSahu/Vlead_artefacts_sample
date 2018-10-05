function random_infix_generator() {
    this.no_of_operands = 7;
    this.operators = ['+', '-', '*', '/', '^'];

    

}

random_infix_generator.prototype.generator = function(){
    console.log(this.operators);
    $('#generate_random_infix').on('click', function () {

        var string = "";
        for (var i = 0; i < this.no_of_operands; i++) {
            var numb = Math.ceil(Math.random() * 100);
            string = string.concat(numb.toString(), " ");
            if (i != no_of_operands - 1) {
                var index = (Math.floor(Math.random() * 100) % 5);
                string = string.concat(this.operators[index], " ");
            }
        }
        document.getElementById('random_infix_expression').value = string;
        document.getElementById('infix_expression').value = string;
            
    });
}
         