var loadFile = function() {
	var photo = document.getElementById('tresult');
	photo.src = URL.createObjectURL(event.target.files[0]);
};

var tilth = document.getElementById("tiltv");
tilth.oninput = function() {
  document.getElementById("pattern").style.marginLeft = this.value + "px";
}

var tiltv = document.getElementById("tilth");
tiltv.oninput = function() {
  document.getElementById("pattern").style.marginTop = this.value + "px";
}

var rot = document.getElementById("rot");
rot.oninput = function() {
  document.getElementById("pattern").style.transform = "rotate(" + this.value + "deg)";
}