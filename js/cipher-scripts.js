function firstAndLast(response) {
  firstLetter = response.charAt(response.length - 1)
  lastLetter = response.charAt(0)
  middle = response.substring(1,(response.length-1))
  return firstLetter + middle + lastLetter
  }

const response = prompt("What did you do for dinner tonight?");
alert(firstAndLast(response));