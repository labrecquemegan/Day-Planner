// I want to have a daily date on the page
$("#currentDay").text(moment().format("MMM Do YY"));

// I want the colors to change with the time
var currentTime = moment()
currentTime = currentTime.startOf("hour")
// makes start time 9am
var beforeTime = moment().startOf('day').add(9, "hours")

// Time blocks
// 9 AM 
var time1 = beforeTime.add(0, "h")
// var time1 = beforeTime;
time1 = time1.format('hh:mm A')
// Populates time formula into html
$(".block1").text(time1)
// 10 AM
var time2 = beforeTime.add(1, "h")
time2 = time2.format('hh:mm A')
// Populates time formula into html
$(".block2").text(time2)
// 11 AM
var time3 = beforeTime.add(1, "h")
time3 = time3.format('hh:mm A')
// Populates time formula into html
$(".block3").text(time3)
// 12 PM
var time4 = beforeTime.add(1, "h")
time4 = time4.format('hh:mm A')
// Populates time formula into html
$(".block4").text(time4)
// 1 PM
var time5 = beforeTime.add(1, "h")
time5 = time5.format('hh:mm A')
// Populates time formula into html
$(".block5").text(time5)
// 2 PM
var time6 = beforeTime.add(1, "h")
time6 = time6.format('hh:mm A')
// Populates time formula into html
$(".block6").text(time6)
// 3 PM
var time7 = beforeTime.add(1, "h")
time7 = time7.format('hh:mm A')
// Populates time formula into html
$(".block7").text(time7)
// 4 PM
var time8 = beforeTime.add(1, "h")
time8 = time8.format('hh:mm A')
// Populates time formula into html
$(".block8").text(time8)
// 5 PM
var time9 = beforeTime.add(1, "h")
time9 = time9.format('hh:mm A')
// Populates time formula into html
$(".block9").text(time9)

function testTime() {
  // will allow for the color based on past, present, future
  // Add block1 9AM
  time1 = moment().startOf('day').add(9, "hours")
  // Adjusts current time to the hour
  currentTime = currentTime.startOf("hour")
  if (currentTime.isAfter(time1)) {
      $(".form9").addClass("past")
  }
  else if (currentTime.isBefore(time1)) {
      $(".form9").addClass("future")
  }
  else if (currentTime.isSame(time1)) {
      $(".form9").addClass("present")
  };
  // Add block2 10AM
  time2 = moment().startOf('day').add(10, "hours")
  if (currentTime.isAfter(time2)) {
      $(".form10").addClass("past")
  }
  else if (currentTime.isBefore(time2)) {
      $(".form10").addClass("future")
  }
  else if (currentTime.isSame(time2)) {
      $(".form10").addClass("present")
  };
  // block3 11AM
  time3 = moment().startOf('day').add(11, "hours");
  if (currentTime.isAfter(time3)) {
      $(".form11").addClass("past")
  }
  else if (currentTime.isBefore(time3)) {
      $(".form11").addClass("future")
  }
  else if (currentTime.isSame(time3)) {
      $(".form11").addClass("present")
  };
  // block4 12PM
  time4 = moment().startOf('day').add(12, "hours");
  if (currentTime.isAfter(time4)) {
      $(".form12").addClass("past")
  }
  else if (currentTime.isBefore(time4)) {
      $(".form12").addClass("future")
  }
  else if (currentTime.isSame(time4)) {
      $(".form12").addClass("present")
  };
  // block5 1PM
  time5 = moment().startOf('day').add(13, "hours")
  if (currentTime.isAfter(time5)) {
      $(".form1").addClass("past")
  }
  else if (currentTime.isBefore(time5)) {
      $(".form1").addClass("future")
  }
  else if (currentTime.isSame(time5)) {
      $(".form1").addClass("present")
  };
  // block6 2PM
  time6 = moment().startOf('day').add(14, "hours")
  if (currentTime.isAfter(time6)) {
      $(".form2").addClass("past")
  }
  else if (currentTime.isBefore(time6)) {
      $(".form2").addClass("future")
  }
  else if (currentTime.isSame(time6)) {
      $(".form2").addClass("present")
  };
  // block7 3pm
  time7 = moment().startOf('day').add(15, "hours")
  if (currentTime.isAfter(time7)) {
      $(".form3").addClass("past")
  }
  else if (currentTime.isBefore(time7)) {
      $(".form3").addClass("future")
  }
  else if (currentTime.isSame(time7)) {
      $(".form3").addClass("present")
  };
  // block8 4pm
  time8 = moment().startOf('day').add(16, "hours")
  if (currentTime.isAfter(time8)) {
      $(".form4").addClass("past")
  }
  else if (currentTime.isBefore(time8)) {
      $(".form4").addClass("future")
  }
  else if (currentTime.isSame(time8)) {
      $(".form4").addClass("present")
  };
  // block9 5pm
  time9 = moment().startOf('day').add(17, "hours")
  if (currentTime.isAfter(time9)) {
      $(".form5").addClass("past")
  }
  else if (currentTime.isBefore(time9)) {
      $(".form5").addClass("future")
  }
  else if (currentTime.isSame(time9)) {
      $(".form5").addClass("present")
  }
}

  
function save() {
  console.log("save")
  // need local storage
}

// I want to save changes to local storage
const buttonsave = document.querySelectorAll(
    ".saveBtn"
  )
  // creates loop to look at every save button in the array
  for (i=0; i < buttonsave.length; i++) {
    console.log(buttonsave[i])
    buttonsave[i].addEventListener("click", save)

  }



  console.log(buttonsave)
  
  // function save() {
  //   console.log("save")
  //   window.save()
  // }
  

// Alert Message: "I just saved to local storage"

