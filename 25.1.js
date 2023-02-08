//let sum = 0;
// for ( let i= 0 ; i<=15 ; i++){
//     sum = sum +i;
//
// console.log(sum)

//reversc way: 

// let sum = 0 ;
// for ( let i = 10 ; i>=1 ; i--){
//   sum=sum+ i;
// }
// console.log(sum)
//funtion diye jodi call kori:

function sum (i){
  if(i==1)
  {
    return 1;
  }
  return i +sum  (i-1)
}
const element = sum(5);
console.log(element)