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



const response = prompt("What did you do for dinner tonight?");
alert(concat(response));

//response.substring(1,(response.length-1)) 