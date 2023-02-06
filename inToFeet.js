function inToFeet(inch){
  const feet = inch/12;
  return feet;
}
const dadaFeet = inToFeet(144)
console.log(dadaFeet);
const nanFeet = inToFeet(256).toFixed(2)
console.log(nanFeet)
const dipongkar = inToFeet (564);
console.log(dipongkar)