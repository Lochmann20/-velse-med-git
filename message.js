function visBesked(message) {
  let first = "info:";
  return `${first}${message}`;
}

let beksed = "Kamilla underviser i morgen";
console.log(visBesked(besked));

let info = "Martin underviser i dag";
console.log(visBesked(info));

console.log(visBesked("Louise underviser først i næste uge"));
