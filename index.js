let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for(let i = 0; i < input.length; i++){
  // console.log(i);
for(let v = 0; v < vowels.length; v++) {
    // console.log(v);
    if(input[i] === vowels[v]) {
      resultArray.push(vowels[v].toUpperCase());
  }
}
    if(input[i] === "e" || input[i] === "u" ){
      resultArray.push(input[i].toUpperCase());
  }
}
console.log(resultArray.join(''));
