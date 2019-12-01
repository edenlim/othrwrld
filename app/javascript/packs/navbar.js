var text = document.getElementById("brand");
var color = ["0 0 20px #ff005b","0 0 20px #5bff00","0 0 20px #005bff"]

var random = Math.floor(Math.random() * Math.floor(3))

var randomColor = color[random]

text.style.textShadow = randomColor;