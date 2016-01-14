window.onload=function(){
var radios = document.forms["form1"].elements["myRadio"];
for(var i = 0, max = radios.length; i < max; i++){
radios[i].onclick = function(){
	if(this.value = "black"){
		document.body.style.backgroundColor = "#000000";
	}
	if(this.value = "cherry"){
		document.body.style.backgroundColor = "#ab1340";
	}
	if(this.value = "white"){
		document.body.style.backgroundColor = "#ffffff";
	}
	};
}
};