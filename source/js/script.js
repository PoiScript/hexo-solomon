var row = document.getElementById("category-row");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var translateX = 0;

b1.addEventListener("click", function () {row.style.transform = "translateX(10%)";} , false);
b2.addEventListener("click", function () {row.style.transform = "translate(0, 0)";} , false);