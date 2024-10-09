// function to clear screen
function clearDisplay() {
  document.getElementById('display').value = "";
}
// function to append the clicked button value to the display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}
// funcntion to perform calculation and display the result
function calculate() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
  
}
