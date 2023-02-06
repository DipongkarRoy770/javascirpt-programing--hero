function woodCalculator (chair,table,bed){
  const perChairWood=3;
  const perTableWood = 5;
  const perTedWoood = 5;
  const chairWood =chair*perChairWood;
  const tableWood = table * perTableWood;
  const bedWood = bed * perTableWood;
  // console.log(chairWood,tableWood,bedWood)
  const totalWood = (chairWood+tableWood+bedWood);
  // console.log(totalWood)
  return totalWood;
}
const totalWood =woodCalculator(2,3,5);
console.log(totalWood)