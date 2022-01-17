//Checks Variables
var c1;
var c2;
var c3;
var c4;
var c5;

/* Functions */

//Validations
function vfname(inputtxt) {
  var fn = document.getElementsByClassName("fnm")[0];
  var rnm = /^([a-z]+ ?){1,2}$/i;
  var innum = fn.value;
  var res = rnm.test(innum);
  var x = document.getElementsByClassName("lfnm")[0];
  if (res == false) {
    x.innerHTML =
      '<i class="fas fa-times-circle"></i> Please enter only valid Name (Maximum 2 words).';
    x.style.color = "red";
    fn.style.borderColor = "red";
    c1 = 0;
  } else if (res == true) {
    x.innerHTML =
      "<i class='fas fa-check-circle'></i>Great! That's a valid Name.";
    x.style.color = "green";
    fn.style.borderColor = "green";

    c1 = 1;
  }
}
function vlname(inputtxt) {
  var ln = document.getElementsByClassName("lnm")[0];
  var rnm = /^([a-z]+ ?){1,2}$/i;
  var innum = ln.value;
  var res = rnm.test(innum);
  var x = document.getElementsByClassName("llnm")[0];
  if (res == false) {
    x.innerHTML =
      '<i class="fas fa-times-circle"></i> Please enter only valid Name (Maximum 2 words).';
    x.style.color = "red";
    ln.style.borderColor = "red";
    c2 = 0;
  } else if (res == true) {
    x.innerHTML =
      "<i class='fas fa-check-circle'></i>Great! That's a valid Name.";
    x.style.color = "green";
    ln.style.borderColor = "green";

    c2 = 1;
  }
}
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
    m.style.borderColor = "red";
    c3 = 0;
  } else if (res == true) {
    x.innerHTML =
      "<i class='fas fa-check-circle'></i>Great! That's a valid E-mail Address.";
    x.style.color = "green";
    m.style.borderColor = "green";

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
    p.style.borderColor = "red";
    c4 = 0;
  } else if (res == true) {
    x.innerHTML = '<i class="fas fa-check-circle"></i>Great Password.';
    x.style.color = "green";
    p.style.borderColor = "green";

    c4 = 1;
  }
}
function vrpw(inputtxt) {
  var rp = document.getElementsByClassName("rpw")[0];
  var p = document.getElementsByClassName("pw")[0];
  var rnm = p.value;
  var innum = rp.value;
  var x = document.getElementsByClassName("lrpw")[0];

  if (rnm !== innum) {
    x.innerHTML =
      '<i class="fas fa-times-circle"></i>Still not identical to your password';
    x.style.color = "red";
    rp.style.borderColor = "red";

    c5 = 0;
  } else if (rnm == innum) {
    x.innerHTML = "<i class='fas fa-check-circle'></i>Wow! That's identical.";
    x.style.color = "green";
    rp.style.borderColor = "green";

    c5 = 1;
  }
}

//Clearing
function Check1() {
  var x = document.getElementsByClassName("lfnm")[0];
  var fn = document.getElementsByClassName("fnm")[0];
  if (
    x.innerHTML !==
      `<i class="fas fa-times-circle"></i> Please enter only valid Name (Maximum 2 words).` &&
    x.innerHTML !==
      `<i class="fas fa-check-circle"></i>Great! That's a valid Name.`
  ) {
    x.innerHTML = `* Required Field`;
    x.style.color = "red";
    fn.style.borderColor = "red";

    c1 = 0;
  }
}
function Check2() {
  var x = document.getElementsByClassName("llnm")[0];
  var ln = document.getElementsByClassName("lnm")[0];

  if (
    x.innerHTML !==
      `<i class="fas fa-times-circle"></i> Please enter only valid Name (Maximum 2 words).` &&
    x.innerHTML !==
      `<i class="fas fa-check-circle"></i>Great! That's a valid Name.`
  ) {
    x.innerHTML = `* Required Field`;
    x.style.color = "red";
    ln.style.borderColor = "red";
    c2 = 0;
  }
}
function Check3() {
  var x = document.getElementsByClassName("lmail")[0];
  var m = document.getElementsByClassName("mail")[0];

  if (
    x.innerHTML !==
      `<i class="fas fa-times-circle"></i> Please enter only valid E-mail Address.` &&
    x.innerHTML !==
      `<i class="fas fa-check-circle"></i>Great! That's a valid E-mail Address.`
  ) {
    x.innerHTML = `* Required Field`;
    x.style.color = "red";
    m.style.borderColor = "red";
    c3 = 0;
  }
}
function Check4() {
  var x = document.getElementsByClassName("lpw")[0];
  var p = document.getElementsByClassName("pw")[0];

  if (
    x.innerHTML !==
      `<i class="fas fa-times-circle"></i>Enter 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.` &&
    x.innerHTML !== `<i class="fas fa-check-circle"></i>Great Password.`
  ) {
    x.innerHTML = `* Required Field`;
    x.style.color = "red";
    p.style.borderColor = "red";
    c4 = 0;
  }
}
function Check5() {
  var x = document.getElementsByClassName("lrpw")[0];
  var t = document.getElementsByClassName("rpw")[0];

  if (
    x.innerHTML !==
      `<i class="fas fa-times-circle"></i>Still not identical to your password` &&
    x.innerHTML !== `<i class="fas fa-check-circle"></i>Wow! That's identical.`
  ) {
    x.innerHTML = `* Required Field`;
    x.style.color = "red";
    c5 = 0;
    t.style.borderColor = "red";
  } else {
  }
}

//Registering
function Register() {
  if (c1 !== 1 || c2 !== 1 || c3 !== 1 || c4 !== 1 || c5 !== 1) {
    var alert = document.getElementsByClassName("pop_up")[0];
    alert.style.display = "grid";
    var hide = document.getElementsByClassName("container")[0];
    hide.style.opacity = "0.1";
  } else {
    var fn = document.getElementsByClassName("fnm")[0];
    var ln = document.getElementsByClassName("lnm")[0];
    var m = document.getElementsByClassName("mail")[0];
    var p = document.getElementsByClassName("pw")[0];

    setcookie("firstname", fn.value, "10/10/2022");
    setcookie("lastname", ln.value, "10/10/2022");
    setcookie("mail", m.value, "10/10/2022");
    setcookie("password", p.value, "10/10/2022");

    window.location.replace("signin/index.html");
  }
}
function Cls() {
  var alert = document.getElementsByClassName("pop_up")[0];
  alert.style.display = "none";
  var hide = document.getElementsByClassName("container")[0];
  hide.style.opacity = "1";
}

function setcookie(key, value, expdate) {
  var date = new Date(expdate);
  document.cookie = `${key}=${value}; expires=${date}`;
}
