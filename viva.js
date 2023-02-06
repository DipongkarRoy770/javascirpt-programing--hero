// let sum=0; 
// for( let i = 0; i<=3;i++){ 

//   sum = sum + i;
//   console.log(sum) 
// }
let str= 'dipongkar'
// for (i= 0 ; i<str.length ; i++){
//   console.log(i)
//   const element = str[i];
//   console.log(element)
// }
//reversed way:
// for (let i=str.length-1 ; i>=0 ;i--)
// {
//   const element = str[i];
//   console.log(element)
// }
//degree:
function redianToDegree(redian){
  const pi=3.1416;
  const degree = redian* (180/pi).toFixed(3)
  //console.log(degree)
  return degree;
}
const reversed= redianToDegree(10);
console.log(reversed)

