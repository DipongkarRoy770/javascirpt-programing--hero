for(i = 1 ;i<=10; i++ ){
  console.log(i)
  const number = Math.random(i)*10;
  const num2 = Math.random(number).toFixed(2)
  const number1 = Math.round(number)
  console.log(number1 ,num2)
}