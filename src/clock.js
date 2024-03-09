function startClock() {
     updateClock();
     setInterval(updateClock, 1000);
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    document.getElementById("digit1").innerHTML = hours[0];
    document.getElementById("digit2").innerHTML = hours[1];
    document.getElementById("digit3").innerHTML = minutes[0];
    document.getElementById("digit4").innerHTML = minutes[1];
    document.getElementById("digit5").innerHTML = seconds[0];
    document.getElementById("digit6").innerHTML = seconds[1];

    document.getElementById("digit1").className = "digit dark";
    document.getElementById("digit2").className = "digit dark";
    document.getElementById("digit3").className = "digit medium-dark";
    document.getElementById("digit4").className = "digit medium-dark";
    document.getElementById("digit5").className = "digit light";
    document.getElementById("digit6").className = "digit light";
  }

  function addLeadingZero(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString();
    }
  }
