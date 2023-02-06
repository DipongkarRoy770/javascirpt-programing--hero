//Kilometer:
//1 Km = 1000 M
function KilometerInces(miter){
  const miters = miter * 0.0000254 ;
  return miters;
}
const length = KilometerInces(4)
console.log(length)