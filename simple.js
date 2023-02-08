// let sum= 0;
// for(let i  = 0 ; i<=14 ; i++){
 
//    sum= sum +i
//   console.log(sum)
// }
//reverase way:
let sum = 0 ;
for(let i = 20 ; i>1 ; i--){
    sum = sum+ i
  console.log(sum)
}
//valo vabe case sentitive kaj korte hbe.
function add (i){

  console.log(i);
  if (i== 1){
    return 1
  }
  return i+ add (i-1)
}
const result = add(6)
console.log(result)