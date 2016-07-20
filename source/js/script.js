var row = document.getElementById("category-row");
var b1 = document.getElementById("controls_prev");
var b2 = document.getElementById("controls_next");
var a = 0;

b1.addEventListener("click", function () {
	row.style.transform = "translateX(" + (a - 1 + 17) + "%)";
	a = row.style.transform.match("-?[0-9]+");
	if(a == 0){b1.style.visibility = "hidden"};
	if(a > -32){b2.style.visibility = "visible"}} , false);
b2.addEventListener("click", function () {
	row.style.transform = "translateX(" + (a - 16) + "%)";
	a = row.style.transform.match("-?[0-9]+");
	if(a < 0) {b1.style.visibility = "visible"};
	if(a == -32){b2.style.visibility = "hidden"}} , false);

var links = new Array();
for (var i = site.posts.length - 1; i >= 0; i--) {
	links[i] = site.posts[i].path;
}

function openLink() {
  // Chooses a random link:
  var i = Math.floor(Math.random() * links.length);
  // Directs the browser to the chosen target:
  parent.location = links[i];
  return false;
}