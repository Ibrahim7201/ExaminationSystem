//Questions & Choices Contructors
function Question(q, correct, content) {
  //encryption
  var encryptedQ = CryptoJS.AES.encrypt(q, "Secret Passphrase");
  var encryptedC = CryptoJS.AES.encrypt(String(correct), "Secret Passphrase");
  //properties
  this.Question = encryptedQ;
  this.correctChoiceIndex = encryptedC;
  var content = [];
  this.Ch = content;
  ArrayOfQuestions.push(this);
}
Question.prototype.addChoices = function () {
  for (var i = 0; i < 4; i++) {
    this.Ch.push(arguments[i]);
  }
};
function Choices(id, value) {
  //id
  var encryptedID = CryptoJS.AES.encrypt(String(id), "Secret Passphrase");
  this.iD = encryptedID;
  //value
  var encryptedVal = CryptoJS.AES.encrypt(value, "Secret Passphrase");
  this.value = encryptedVal;
}

//Questions Array
var ArrayOfQuestions = [];
// //Creating Questions and answers // //
var c1 = new Choices(1, "Egyptian");
var c2 = new Choices(2, "American");
var c3 = new Choices(3, "German");
var c4 = new Choices(4, "Saudian");
var c5 = new Choices(5, "French");
var c6 = new Choices(6, "English");
var c7 = new Choices(7, "Indian");
var c8 = new Choices(8, "Italian");

var q1 = new Question(`Mohamed Salah's Nationality is?`, 0);
q1.addChoices(c1, c2, c3, c4);
var q2 = new Question(`Obama's Nationality is?`, 2);
q2.addChoices(c1, c5, c2, c3);
var q3 = new Question(`Jim Carry's Nationality is?`, 1);
q3.addChoices(c3, c2, c1, c5);
var q4 = new Question(`Muller's Nationality is?`, 3);
q4.addChoices(c2, c5, c4, c3);
var q5 = new Question(`Ben Salman's Nationality is?`, 2);
q5.addChoices(c1, c5, c4, c3);
var q6 = new Question(`David Beckham's Nationality is?`, 1);
q6.addChoices(c2, c6, c5, c3);
var q7 = new Question(`ShaaroKhan's Nationality is?`, 0);
q7.addChoices(c7, c2, c1, c3);
var q8 = new Question(`Pizza is most famous in?`, 1);
q8.addChoices(c5, c8, c2, c5);
var q9 = new Question(`Adel Emam's Nationality is?`, 2);
q9.addChoices(c6, c2, c1, c4);
var q10 = new Question(
  `Eiffel tower's is constructed by the ________ people.`,
  0
);
q10.addChoices(c5, c6, c4, c3);

//Getting Answer
var g;
function print(e) {
  g = e.value;
  chosenAnswer();
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////Timers//////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//Setting Exam time:
var examTime = 1.5; //Minutes
// //ProgressBar and time
var progress = setInterval(function () {
  var progress = document.getElementsByClassName("pr")[0];
  var width = 1;
  progress.style.width =
    Number(progress.style.width.replace("%", "")) + width + "%";
  if (Number(progress.style.width.split("%")[0]) <= 35) {
    progress.style.backgroundColor = "green";
  } else if (
    Number(progress.style.width.split("%")[0]) > 35 &&
    Number(progress.style.width.split("%")[0]) <= 75
  ) {
    progress.style.backgroundColor = "orange";
  } else {
    progress.style.backgroundColor = "red";
    var msg = document.getElementsByClassName("msg")[0];
    // msg.style.display = "flex";
    msg.style.transform = "translateY(18rem)";
  }
}, ((examTime * 60) / 100) * 1000);

// //Timer Function
var noww = new Date().getTime();
var countDownDate = addMinutes(noww, examTime);
var timerInterval = setInterval(function () {
  var t = document.getElementsByClassName("timer")[0];
  noww = new Date().getTime();
  var diff = countDownDate - noww;
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  t.textContent = minutes + "m " + seconds + "s ";
  if (minutes < 1) {
    t.style.color = "red";
  }
  if (diff < 0) {
    t.innerHTML = "FINISHED";
    clearInterval(timerInterval);
    EndingMsg();
  }
}, 1000);

// // Ending Exam after time
var end = setTimeout(function () {
  clearTimeout(progress);
  EndingMsg();
}, 1000 * examTime * 60);

function GradesMsg() {
  var alert = document.getElementsByClassName("pop_up")[0];
  var hide = document.getElementsByClassName("container")[0];
  clearTimeout(progress);
  alert.style.display = "grid";
  hide.style.display = "none";
}
function EndingMsg() {
  var alert = document.getElementsByClassName("pop_up")[0];
  var hide = document.getElementsByClassName("container")[0];
  hide.style.display = "none";
  alert.style.display = "grid";
  var x = document.getElementsByClassName("far")[0];
  x.style.color = "orange";
  alert.style.borderColor = "orange";
  var c = document.getElementsByClassName("content")[0];
  c.innerHTML = "Sorry, Time has finished!";
  var msg = document.getElementsByClassName("msg")[0];
  // msg.style.display = "flex";
  msg.style.display = "none";
}
function Grads() {
  Grading();
  setcookie("result", Results(), "10/10/2022");
  location.replace("final.html");
}

////////////////////////////////////////////////////////////////////////
/////////////////////////////Buttons////////////////////////////////////
////////////////////////////////////////////////////////////////////////
var grades = {};
var chosen = {};
// //Choosen answers
function chosenAnswer() {
  var chosenContent = document.getElementById(g).parentNode.textContent;
  Object.defineProperty(chosen, qn, {
    value: chosenContent,
    writable: true,
    configurable: true,
    enumerable: true,
  });
}
// //Results
function Results() {
  return `${(Object.keys(grades).length * 100) / ArrayOfQuestions.length}%`;
}
// //Grading
function Grading() {
  for (var property in chosen) {
    TrueFalse(property);
  }
}
// //Getting your grades on every question
function TrueFalse(QuestionNumber) {
  var chosenContent = chosen[QuestionNumber];
  //Answer Index
  var rAnIndexEnc = ArrayOfQuestions[QuestionNumber - 1].correctChoiceIndex;
  var rAnIndexDec = CryptoJS.AES.decrypt(rAnIndexEnc, "Secret Passphrase");
  var rAnIndex = rAnIndexDec.toString(CryptoJS.enc.Utf8);
  //Answer Itself
  var rAnswerEnc = ArrayOfQuestions[QuestionNumber - 1].Ch[rAnIndex].value;
  var rAnswerDec = CryptoJS.AES.decrypt(rAnswerEnc, "Secret Passphrase");
  var rAnswer = rAnswerDec.toString(CryptoJS.enc.Utf8);
  // var ran = "";
  if (chosenContent === rAnswer) {
    Object.defineProperty(grades, QuestionNumber, {
      value: "correct",
      writable: false,
      configurable: true,
      enumerable: true,
    });
  }
}

// //Reaching Question Number
var qn = 1;
function QustionNum() {
  var x = document.getElementsByClassName("q")[0].textContent;
  for (var i = 0; i < ArrayOfQuestions.length; i++) {
    var qEn = CryptoJS.AES.decrypt(
      ArrayOfQuestions[i].Question,
      "Secret Passphrase"
    );
    var qSt = qEn.toString(CryptoJS.enc.Utf8);
    if (x === qSt) {
      qn = i + 1;
    }
  }
  return qn;
}
// //Filling The Question each time
function Qustioning(qNum) {
  var x = document.getElementsByClassName("q")[0];
  var decryptedQ = CryptoJS.AES.decrypt(
    ArrayOfQuestions[qNum - 1].Question,
    "Secret Passphrase"
  );
  x.innerHTML = decryptedQ.toString(CryptoJS.enc.Utf8);
  //Answer Filling
  var cc1 = document.getElementsByClassName("c1")[0]; //First Choice
  cc1.innerHTML = `<input value="choice1" type="radio" name="answers" id="choice1"
      onchange="print(this)">`;
  var decryptedC1 = CryptoJS.AES.decrypt(
    ArrayOfQuestions[qNum - 1].Ch[0].value,
    "Secret Passphrase"
  );
  var cx1 = document.createTextNode(decryptedC1.toString(CryptoJS.enc.Utf8));
  cc1.prepend(cx1);

  var cc2 = document.getElementsByClassName("c2")[0]; //Second Choice
  cc2.innerHTML = `<input value="choice2" type="radio" name="answers" id="choice2"
          onchange="print(this)">`;
  var decryptedC2 = CryptoJS.AES.decrypt(
    ArrayOfQuestions[qNum - 1].Ch[1].value,
    "Secret Passphrase"
  );
  var cx2 = document.createTextNode(decryptedC2.toString(CryptoJS.enc.Utf8));
  cc2.prepend(cx2);

  var cc3 = document.getElementsByClassName("c3")[0]; //Third Choice
  cc3.innerHTML = `<input value="choice3" type="radio" name="answers" id="choice3"
              onchange="print(this)">`;
  var decryptedC3 = CryptoJS.AES.decrypt(
    ArrayOfQuestions[qNum - 1].Ch[2].value,
    "Secret Passphrase"
  );
  var cx3 = document.createTextNode(decryptedC3.toString(CryptoJS.enc.Utf8));
  cc3.prepend(cx3);

  var cc4 = document.getElementsByClassName("c4")[0]; //Fourth Choice
  cc4.innerHTML = `<input value="choice4" type="radio" name="answers" id="choice4"
                  onchange="print(this)">`;
  var decryptedC4 = CryptoJS.AES.decrypt(
    ArrayOfQuestions[qNum - 1].Ch[3].value,
    "Secret Passphrase"
  );
  var cx4 = document.createTextNode(decryptedC4.toString(CryptoJS.enc.Utf8));
  cc4.prepend(cx4);
}
// //Labeling Chosen each time
function Labeling() {
  if (chosen.hasOwnProperty(qn)) {
    var ch;
    for (var property in chosen) {
      if (Number(property == qn)) {
        ch = chosen[property];
      }
    }
    var t = document.getElementsByClassName("list")[0].children;
    for (var i in t) {
      if (t[i].textContent === ch) {
        var x = t[i].innerHTML;
        var output = [x.slice(0, -1), " checked", x.slice(-1)].join("");
        t[i].innerHTML = output;
      }
    }
  }
}
// //Next Question
function Next() {
  QustionNum();
  var n = document.getElementsByClassName("num")[0];
  n.innerHTML = qn;
  if (qn < ArrayOfQuestions.length) {
    qn++;
    Qustioning(qn);
    n.innerHTML = qn;
  }

  checkMarked();
  Labeling();
}
// //Previous Question
function Back() {
  QustionNum();
  var n = document.getElementsByClassName("num")[0];
  n.innerHTML = qn;
  if (qn > 1) {
    qn--;
    Qustioning(qn);
    n.innerHTML = qn;
  }
  checkMarked();
  Labeling();
}

// //Marking Questions
var markedd = [];
function Mark() {
  if (markedd.includes(qn) == false) {
    var x = document.getElementsByClassName("marked")[0];
    var y = document.createElement("li");
    var sRight = document.createElement("span");
    var sLeft = document.createElement("span");
    sLeft.style.fontStyle = "italic";
    sRight.innerText = "X";
    sLeft.innerText = `Question ${qn}`;
    y.style.display = "flex";
    y.style.justifyContent = "space-between";
    y.style.alignItems = "center";
    y.appendChild(sLeft);
    y.appendChild(sRight);
    sRight.setAttribute("class", "rightspan");
    var qnhere;
    qnhere = qn;
    y.setAttribute("onclick", `Marked(${qnhere})`);
    x.appendChild(y);
    markedd.push(qn);
    //Disabling Button
    var xx = document.getElementsByClassName("mark")[0];
    xx.style.backgroundColor = "grey";
    xx.removeAttribute("onclick");
    sRight.addEventListener("click", deletingMarked);
  }
}
// //Event on marked qustions
function Marked(input) {
  Qustioning(input);
  var z = document.getElementsByClassName("num")[0];
  z.innerHTML = `${input}`;
  qn = input;
  Labeling();
  checkMarked();
}
// //Checking if question marked or not
function checkMarked() {
  if (markedd.includes(qn) == true) {
    var xx = document.getElementsByClassName("mark")[0];
    xx.style.backgroundColor = "grey";
    xx.removeAttribute("onclick");
  } else if (markedd.includes(qn) == false) {
    var xx = document.getElementsByClassName("mark")[0];
    xx.style.backgroundColor = "#ffb830";

    xx.setAttribute("onclick", "Mark(event)");
  }
}
// //Deleting marked questions
function deletingMarked(event) {
  event.stopPropagation();
  //Deleting from Marked Array
  var indexOfMarked = markedd.indexOf(qn);
  markedd.splice(indexOfMarked, 1);
  //Deleting Li element itself
  this.closest("li").remove();
  checkMarked();
}

////////////////////////////////////////////////////////////////////////
///////////////////////////Helpful Functions////////////////////////////
////////////////////////////////////////////////////////////////////////

// //Getting cookie
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
// // Setting cookie
function setcookie(key, value, expdate) {
  var date = new Date(expdate);
  document.cookie = `${key}=${value}; expires=${date}`;
}
// //Adding Minutes
function addMinutes(date, minutes) {
  return new Date(date + minutes * 60000);
}

// //Randoming Questions at very start.
(function () {
  random(ArrayOfQuestions);
  //Question Filling
  Qustioning(1);
})();

// //Shuffling Questions randomly
function random(array) {
  var currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
