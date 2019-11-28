function drawSquare() {
  clearDrawLeft();
  var canvas = document.getElementById("drawing");
  canvas.style.backgroundColor = document.getElementById("colorLeft").value;
  var userSize = document.getElementById("slider").value
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "lime";
  ctx.fillRect(10, 10, userSize, userSize);
}

function drawRightSide() {
  clearDrawRight();
  var canvas = document.getElementById("drawingSecond");
  canvas.style.backgroundColor = document.getElementById("colorRight").value;
  var ctx = canvas.getContext("2d");
  var userText = document.getElementById("textRight").value;
  ctx.fillStyle = "black";
  ctx.font = "20px Times";
  ctx.fillText(userText, 10, 80);
}

function clearDrawLeft() {
  var canvas = document.getElementById("drawing");
  canvas.style.backgroundColor = "white";
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearDrawRight() {
  var canvas = document.getElementById("drawingSecond");
  canvas.style.backgroundColor = "white";
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function grayscale() {
  displayImage();
  var canvas = document.getElementById("imageCanvas");
  canvas.style.filter = "grayscale(100%)";
}

function blurImage() {
  displayImage();
  var canvas = document.getElementById("imageCanvas");
  canvas.style.filter = "blur(5px)";
}

function displayImage() {
  var image = document.getElementById("img");
  var canvas = document.getElementById("imageCanvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);
}

function clearFilter() {
  var canvas = document.getElementById("imageCanvas");
  canvas.style.filter = "none";
}