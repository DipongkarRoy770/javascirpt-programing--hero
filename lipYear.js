//const year = 4085;
function lipYear(year){
  const remainder = year/4;
  return remainder;
  if(remainder === 0 ){
    //console.log('is your lipYear ')
    return true;
  }
  else{
    return false;
    //console.log('not a lipYear')
  }
}
const time =lipYear(4040);
console.log(time)