const products=[
  {id: 1, names:'xiami phone' , price: 4599},
  {id: 2, names:'xiami laptop' , price: 4599},
  {id: 3, names:'vivo phone' , price: 4599},
  {id: 4, names:'walton laptop' , price: 4599},
  {id: 5, names:'xiami loptop' , price: 4599},
  {id: 6, names:'syamphoni phone' , price: 4599},
  {id: 7, names:'sumsung pro5 phone' , price: 4599},
  {id: 8, names:'oppo max-pro phone' , price: 4599},
  {id: 9, names:'ausus laptob' , price: 4599},
]
// console.log(products)
// for (const product of products){
//   console.log(product)
// }
//funtion diye kaj koriL:
function mactedProduct (products ,search){
  const macted= [];
  for(const product of products){
    if(product.names.tolowecase().includs(search.tolowecase())){
      macted.push(product)
    }
  }
  return macted;
}
const result =  mactedProduct(products,'phone');
console.log(result)