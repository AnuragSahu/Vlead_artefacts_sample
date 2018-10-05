function Elements() {
//   this.name = name;
}

Elements.prototype.create_element = function(tag,id) {
    var elemc = document.createElement(tag);
    elemc.id=id;
    return elemc;

}

Elements.prototype.create_element_with_class = function(tag,id,classname,text) {
    var elemc = document.createElement(tag);
    elemc.id=id;
    elemc.className = classname;
    // elemc.type=type;
    elemc.innerHTML = text;
    return elemc;
    // $("<input>", 
    // 	{ type:'text', 
    // 	placeholder:'Keywords', 
    // 	name:'keyword', 
    // 	style:'width:65%' }
    // )
}
Elements.prototype.create_button = function(id,className,name,type,text){
    var elem = document.createElement("button");
    elem.id=id;
    elem.className = className;
    elem.name = name;
    elem.type=type;
    elem.innerText = text;
    return elem;

}
Elements.prototype.create_image = function(id,src,alt,height,width){
    var elem = document.createElement("img");
    elem.id=id;
    elem.src = src;
    elem.alt = alt;
    elem.height = height;
    elem.width = width;
    return elem;

}

Elements.prototype.create_radio_button = function(tag,id,className,value,text){
    var elem = document.createElement(tag);
    elem.id=id;
    elem.className = className;
    elem.type="radio";
    elem.value=value;
    elem.innerHTML = text;
    return elem;

}
