if(window.location.href == 'http://localhost:8000/'){
var resourceCatalog = {
	"id": 'Postfix',
	"type": 'interactive',
	"reqs-satisfied": 'This requirement provides an interface to evaluate postfix',
	"url": ['http://localhost:8000/postfix_eval.js', 'http://localhost:8000/code-2.js'],
	"creator": 'EvMaker',
	"api": 'postfix_eval',
	"args": 'reference to dom element'
};


var createElements = function () {
	var obj = JSON.stringify(resourceCatalog.creator);
	console.log(obj);
	var str1 = JSON.parse(obj);
	var obj1 = JSON.stringify(resourceCatalog.api);
	var str2 = JSON.parse(obj1);
	var res = str1 + '(' + ')' + '.' + str2;
	res = String(res);
	console.log(window.location.href);
	// var resourceElem = document.getElementById("test");
	var resourceElem = document.getElementById("test");
	console.log(document.getElementById("test"));
	console.log(document.getElementsByTagName("body"));
	var url1 = resourceCatalog.url[0];
	var url2 = resourceCatalog.url[1];
	var url3 = resourceCatalog.url[2];
	var script = document.createElement("script");

	script.type = "text/javascript";
	if (script.readyState) {
		script.onreadystatechange = function () {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				eval(res)(resourceElem);
			}
		}
	}
	else {
		script.onload = function () {
			eval(res)(resourceElem);
		}
	}
	script.src = url1;
	document.getElementsByTagName("head")[0].appendChild(script);
	var visualizeScript = document.createElement("script");
	visualizeScript.setAttribute('src', url2);
	document.head.appendChild(visualizeScript);
	// var visualizeScript2 = document.createElement("script");
	// visualizeScript2.setAttribute('src', url3);
	// document.head.appendChild(visualizeScript2);




};
createElements();
}
else if(window.location.href == 'http://localhost:8000/infix_to_postfix.html'){
	var resourceCatalog = {
		"id": 'Postfix',
		"type": 'interactive',
		"reqs-satisfied": 'This requirement provides an interface to evaluate postfix',
		"url": ['http://localhost:8000/pushandoutput.js'],
		"creator": 'PsMaker',
		"api": 'infix_to_postfix',
		"args": 'reference to dom element'
	};
	
	
	var createElements = function () {
		var obj = JSON.stringify(resourceCatalog.creator);
		console.log(obj);
		var str1 = JSON.parse(obj);
		var obj1 = JSON.stringify(resourceCatalog.api);
		var str2 = JSON.parse(obj1);
		var res = str1 + '(' + ')' + '.' + str2;
		res = String(res);
		console.log(window.location.href);
		var resourceElem = document.getElementById("createElements");
		console.log(resourceElem);
		var url1 = resourceCatalog.url[0];
		var url2 = resourceCatalog.url[1];
	
		var script = document.createElement("script");
	
		script.type = "text/javascript";
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					eval(res)(resourceElem);
				}
			}
		}
		else {
			script.onload = function () {
				eval(res)(resourceElem);
			}
		}
		script.src = url1;
		document.getElementsByTagName("head")[0].appendChild(script);
		var visualizeScript = document.createElement("script");
		visualizeScript.setAttribute('src', url2);
		document.head.appendChild(visualizeScript);
		
	};
	createElements();
}
else if(window.location.href == 'http://localhost:8000/link_3.html'){
	var resourceCatalog = {
		"id": 'Postfix',
		"type": 'interactive',
		"reqs-satisfied": 'This requirement provides an interface to evaluate postfix',
		"url": ['http://localhost:8000/infix_to_postfix.js'],
		"creator": 'PsMaker',
		"api": 'infix_to_postfix_conversion',
		"args": 'reference to dom element'
	};
	
	
	var createElements = function () {
		var obj = JSON.stringify(resourceCatalog.creator);
		console.log(obj);
		var str1 = JSON.parse(obj);
		var obj1 = JSON.stringify(resourceCatalog.api);
		var str2 = JSON.parse(obj1);
		var res = str1 + '(' + ')' + '.' + str2;
		res = String(res);
		console.log(window.location.href);
		var resourceElem = document.getElementById("infix_to_postfix");
		console.log(resourceElem);
		
		var url1 = resourceCatalog.url[0];
		// var url2 = resourceCatalog.url[1];
	
		var script = document.createElement("script");
	
		script.type = "text/javascript";
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					eval(res)(resourceElem);
				}
			}
		}
		else {
			script.onload = function () {
				eval(res)(resourceElem);
			}
		}
		script.src = url1;
		document.getElementsByTagName("head")[0].appendChild(script);
		// var visualizeScript = document.createElement("script");
		// visualizeScript.setAttribute('src', url2);
		// document.head.appendChild(visualizeScript);
		
	};
	createElements();
}