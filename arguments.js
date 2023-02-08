// function add(num1,num2){
//   console.log(num1,num2);
//   console.log(arguments[2])
// }
const add= [23,34,43,54,654,2,32,432]
for ( i = 0 ; i<add.length ; i++){
  const element = add[i]
  console.log(element)
  if(element>900){
    console.log('big number')
  }
  else{
    console.log('small number ')
  }
}
