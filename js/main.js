function Construct_Products(title, phrase, description) {
    this.title = title;
    this.phrase = phrase;
    this.description = description;

    this.get_title = function () {
        return this.title;
    };
    this.get_phrase = function () {
        return this.phrase
    };
    this.get_description = function () {
        return this.description;
    };

    this.set_title = function (arg_title) {
        this.title = arg_title;
    };
    this.set_phrase = function (arg_phrase) {
        this.phrase = arg_phrase;
    };
    this.set_decription = function (arg_description) {
        this.description = arg_description;
    };


}

function Construct_Formulary() {

        this.card_div = document.getElementById('card_div');
        this.card = document.createElement('div');
        this.card_body = document.createElement('div');;
        this.h5 = document.createElement('h5');
        this.h6 = document.createElement('h6');
        this.p = document.createElement('p');

    this.get_values = function () {
        var input_title = document.getElementById("title").value;
        var input_phrase = document.getElementById("phrase").value;
        var input_description = document.getElementById("description").value;
        this.populate_obj_product(input_title, input_phrase, input_description);
        this.create_card();
        this.add_card();
        this.delete_inputs_values();
    };
    this.populate_obj_product = function(arg_title, arg_phrase, arg_description){
        obj_product.set_title(arg_title);
        obj_product.set_phrase(arg_phrase);
        obj_product.set_decription(arg_description);
    };
    this.create_card = function () {
        this.card.setAttribute('class', 'card width bg-dark m-5 card-size');
        this.card_body.setAttribute('class', 'card-body text-white text-center');
        var title = document.createTextNode(obj_product.title);
        this.h5.appendChild(title);
        var phrase = document.createTextNode(obj_product.phrase);
        this.h6.appendChild(phrase);
        var description = document.createTextNode(obj_product.description);
        this.p.appendChild(description);
    };

    this.add_card = function (card) {
        this.card_div.appendChild(this.card);
        this.card.appendChild(this.card_body);
        this.card_body.appendChild(this.h6);
        this.card_body.appendChild(this.h5);
        this.card_body.appendChild(this.p);

    };
    this.delete_inputs_values = function(){
        document.getElementById("title").value = "";
        document.getElementById("phrase").value = "";
        document.getElementById("description").value = "";
    }
}
var obj_formulary = new Construct_Formulary();
var obj_product = new Construct_Products();


