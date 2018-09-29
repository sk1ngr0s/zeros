module.exports = function getZerosCount(number) {
  // your implementation
  let numNulls=0
  while(number!==0){
    numNulls+=Math.floor(number/5)
    number=Math.floor(number/5)
  }
  return numNulls;
}
