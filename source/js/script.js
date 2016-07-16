var row = document.getElementById("category-row");
var b1 = document.getElementById("controls_prev");
var b2 = document.getElementById("controls_next");
var a = 0;

b1.addEventListener("click", function () {
	row.style.transform = "translateX(" + (a - 1 + 9) + "%)";
	a = row.style.transform.match("-?[0-9]+");
	if(a == 0){b1.style.visibility = "hidden"};
	if(a > -32){b2.style.visibility = "visible"}} , false);
b2.addEventListener("click", function () {
	row.style.transform = "translateX(" + (a - 8) + "%)";
	a = row.style.transform.match("-?[0-9]+");
	if(a < 0) {b1.style.visibility = "visible"};
	if(a == -32){b2.style.visibility = "hidden"}} , false);