function capitalize(response) {
  return response[0].toUpperCase() + response.charAt(response.length - 1).toUpperCase()
}

function firstAndLast(response) {
  response = capitalize(response)
  return response[1] + response[0]
  }

function concat(response) {
  concatResponse = firstAndLast(response)
  return response + concatResponse
  }

function fourth(response) {
  newResponse = concat(response)
  x = response.length / 2
  y = Math.floor(x)
  z = response[y]
  return z + newResponse
}

const response = prompt("What did you do for dinner tonight?");
alert(fourth(response));

//response.substring(1,(response.length-1)) 