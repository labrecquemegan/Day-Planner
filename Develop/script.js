// I want to have a daily date on the page
$("#currentDay").text(moment().format("MMM Do YY"));

// I want the colors to change with the time


// I want to save changes to local storage
const buttonsave = document.querySelector(
    ".button-save"
  )
  
  function Save() {
    window.Save()
  }
  
  buttonsave.addEventListener("click", Save)

// Alert Message: "I just saved to local storage"

