function catRowMov () {
	var row = document.getElementById("category-row");
	var x = window.getComputedStyle(el, null);
	var y = getPropertyValue("transform");
	row.style.transform = "translate(0, 0)";
}