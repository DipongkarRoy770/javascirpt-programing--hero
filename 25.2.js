//let factorial = 1;
// for (i = 1 ; i<10 ; i++){
//   factorial = factorial*i
//   console.log(factorial)
// }
//reverse way funtion diye jodi kaj kori:
function factorial (i){
  console.log(i)
  if(i==1){
    return 1
  }
  return i * factorial(i-1)
}
const result = factorial(10)
console.log(result)