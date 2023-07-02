function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = timeString;
  }

  function addLeadingZero(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  }

  setInterval(updateClock, 1000); // Update every 1 second