const phones=[
  {moble:'vivo' ,price: 12000 ,color:'red',camera: 12},
  {moble:'vivo' ,price: 22000 ,color:'red',camera: 12},
  {moble:'vivo' ,price: 342000 ,color:'red',camera: 12},
  {moble:'vivo' ,price: 32000 ,color:'red',camera: 12},
  {moble:'vivo' ,price: 32000 ,color:'red',camera: 12},
  {moble:'vivo' ,price: 52000 ,color:'red',camera: 12},
  {moble:'vivo' ,price: 82000 ,color:'red',camera: 12}
] 
function cheapeatphone(phones){
  // let cheapest = phones[0]
 for (let i = 0 ; i <phones.length ; i++){
  const phone =phones[i];
   console.log(phone);
  if(phones.price < cheapest.price){
    cheapest = phones;
  }
 }
 return cheapest ;
}
const selfPhone = cheapeatphone(phones);
console.log(selfPhone)