/* Functions */
function getCookie(key) {
  var val = "";
  var x = document.cookie;
  var y = x.split(";");
  for (var i in y) {
    var test = y[i].split("=");
    if (test[0].trim() === key) {
      return test[1];
    }
  }
}
/* Validations */
function vmail(inputtxt) {
  var m = document.getElementsByClassName("mail")[0];
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var innum = m.value;
  var res = mailformat.test(innum);
  var x = document.getElementsByClassName("lmail")[0];
  if (res == false) {
    x.innerHTML =
      '<i class="fas fa-times-circle"></i> Please enter only valid E-mail Address.';
    x.style.color = "red";
    c3 = 0;
  } else if (res == true) {
    x.innerHTML =
      "<i class='fas fa-check-circle'></i>Great! That's a valid E-mail Address.";
    x.style.color = "green";
    c3 = 1;
  }
}
function vpw(inputtxt) {
  var p = document.getElementsByClassName("pw")[0];
  var rnm = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  var innum = p.value;
  var res = rnm.test(innum);
  var x = document.getElementsByClassName("lpw")[0];
  if (res == false) {
    x.innerHTML =
      '<i class="fas fa-times-circle"></i>Enter 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.';
    x.style.color = "red";
    c4 = 0;
  } else if (res == true) {
    x.innerHTML = '<i class="fas fa-check-circle"></i>Great Password.';
    x.style.color = "green";
    c4 = 1;
  }
}
/* Siging In */
function Signin() {
  var ml = document.getElementsByClassName("mail")[0];
  var pw = document.getElementsByClassName("pw")[0];
  var c1 = getCookie("mail");
  var c2 = getCookie("password");
  if (c1.toLowerCase() !== ml.value.toLowerCase() || c2 !== pw.value) {
    var alert = document.getElementsByClassName("pop_up")[0];
    alert.style.display = "grid";
    var hide = document.getElementsByClassName("container")[0];
    hide.style.opacity = "0.1";
  } else {
    window.location.replace("../exam/index.html");
  }
}
function Cls() {
  var alert = document.getElementsByClassName("pop_up")[0];
  alert.style.display = "none";
  var hide = document.getElementsByClassName("container")[0];
  hide.style.opacity = "1";
}
