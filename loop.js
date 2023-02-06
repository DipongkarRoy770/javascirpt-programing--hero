// let number= 5;
// while(number<=22){
//   console.log(number)
//   number++
// }

// // const number1 = 0;
// for( let i= 0 ; i<=10 ; i++){
//   const elements =i
//   console.log(elements)
// }
const nums= [12,34,54,6,67,76,87,87,98,34,353,54,]
for( i = 0 ; i<nums.length ; i++){
  const element= nums[i]
  const bignumber= Math.max(element)
  console.log(bignumber ,i)
}