function isPrime(n){
  for(let i=2; i<Math.floor(Math.sqrt(n))+1;i++){
    if(!(n%i)){
      return false;
    }
  }
  return true;
}

function nthPrime(num){
  let pArr=[1,1];
  for(let i=2; i<105000; i++){
   if(isPrime(i)){pArr.push(i);}
  }
  return pArr[num+1];
}
