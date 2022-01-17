(function () {
  var b = document.getElementsByClassName("up")[0];
  var c = document.getElementsByClassName("content")[0];
  c.innerHTML = `You are <span style="color:red; font-weight:bold;">${getCookie(
    "firstname"
  )} ${getCookie(
    "lastname"
  )}</span>, and you got <span style="color:green; font-weight:bold;">${getCookie(
    "result"
  )}</span>`;
})();

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
