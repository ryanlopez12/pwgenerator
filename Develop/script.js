
function writePassword() {
  var iChars = document.getElementById("chars").value;
  var lCase = document.getElementById("lowercase").checked;
  var uCase = document.getElementById("uppercase").checked;
  var nCase = document.getElementById("numeric").checked;
  var sCase = document.getElementById("specialchar").checked;
  
  if (iChars != "" || lCase != false || uCase != false || nCase != false || sCase != false ) {
    var endPassword = "";
    var pwLength = iChars;  
    var charSet = "";
    if (lCase == true) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uCase == true) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (nCase == true) {
      charSet += "0123456789";
    }
    if (sCase == true) {
      charSet += "!@#$%^&*()?<>{}";
    }
    for (var i = 0; i < pwLength; ++i) {
      endPassword += charSet.charAt(Math.random() * pwLength);
    }
  } else {

    alert("Please choose an option");
  }
  var shuffled = endPassword.split('').sort(function(){return 0.5-Math.random()}).join('');
  var endPw = document.getElementById("password");
  endPw.innerHTML = shuffled;
}


