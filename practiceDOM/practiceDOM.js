var username = document.getElementById("username");
var password = document.getElementById("password");
var result = document.getElementById("result");

function check() {
  if ((username.value == "123") && (password.value == "123")) {
    result.innerHTML = "correct!";
  } else {
    result.innerHTML = "wrong password or username";
    password.value = "";
  }
}