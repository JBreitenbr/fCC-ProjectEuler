function isPrime(n){
  for(let i=2; i<n;i++){
    if(!(n%i)){
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(num) {

    let divArr=[];
    for(let i=2; i<num; i++){
        if(!(num%i)){
           if(isPrime(i)){
              divArr.push(i);
           }
        }
     }
     if(divArr.length){
       return Math.max(...divArr);
       }
     else return num;
}

largestPrimeFactor(13195);
