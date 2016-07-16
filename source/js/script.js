var row = document.getElementById("category-row");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var a = 0;

b1.addEventListener("click", function () {
	row.style.transform = "translateX(" + (a -1 + 11) + "%)";
	a = row.style.transform.match("-?[0-9]+");} , false);
b2.addEventListener("click", function () {
	row.style.transform = "translateX(" + (a - 10) + "%)";
	a = row.style.transform.match("-?[0-9]+");} , false);