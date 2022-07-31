var loadFile = function(event) {
	var photo = document.getElementById('tresult');
	photo.src = URL.createObjectURL(event.target.files[0]);
};