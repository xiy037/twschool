function check() {
var username = document.getElementById("username");
var password = document.getElementById("password");
var result = document.getElementById("result");
  if ((username.value === "123") && (password.value === "123")) {
    result.innerHTML = "correct!";
    result.style.color = "green";
  } else {
    result.innerHTML = "wrong password or username!";
    result.style.color = "red";
    password.value = "";
  }
}