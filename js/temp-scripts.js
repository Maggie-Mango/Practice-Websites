function toCelcius(farenheit) {
  x = (5/9) * (farenheit - 32);
  return "The temperature is: " + x + " Celcius."
  }
function toFarenheit(celcius) {
  x = (celcius * 1.8) + 32
  return "The temperature is: " + x + " Farenheit."
  }

const farenheit = parseInt(prompt("Enter the current temperature in F"));
const result = alert(toCelcius(farenheit));

/*
const celcius = parseInt(prompt("Enter the current temperature in C"));
const result = alert(toFarenheit(celcius));
*/