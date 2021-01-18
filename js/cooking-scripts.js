function toCup(ml) {
  return ml/236.5882
}

function toMl(cup) {
  return cup * 236.5882
}

function toGrams(oz) {
  return oz*28.34952
}

function toOz(gram) {
  return gram/28.34952
}

function toGrams(lb) {
  return lb*453.59237
}

function toLbs(gram) {
  return gram/453.59237
}

const ml = parseInt(prompt("Enter amount to convert"));
const result = alert(toCup(ml));