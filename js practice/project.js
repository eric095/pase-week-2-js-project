var r = confirm("Are you sure you want to send money");
if (r == true) {
  x = "payment sent";
} else {
  x = "payment canceled!";
}
alert(x);

var customerName = prompt("please enter your name");
if ((customerName = null)) {
  document.getElementById("welcome").innerHTML =
    "Hello" + customerName + "!How are you today?";
}
