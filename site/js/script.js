// *** For hiding the menu on small screen when clicked on the body
$(function () { // Same as document.addEventListener("DOMContentLoaded...")

	// Same as document.querySelector("#navbarToggle")
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#mainNav").collapse('hide');
		}
	});
});
