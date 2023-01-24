function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "eagleadmin" && password === "adminsm417") {
    var success = document.getElementById("success");
    success.innerHTML = "Successful Login";
    setTimeout(() => {
        window.location.href = "success.html";
    },2000);
  } else {
    var error = document.getElementById("error");
    error.innerHTML = "Invalid username or password. Please try again.";
  }
}
