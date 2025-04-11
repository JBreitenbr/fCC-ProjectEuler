function isPrime(n) {
    if(n < 2) return false;
    for(let d = 2; d <= n**.5; d++){
        if(n % d === 0) return false;
        }
    return true;
  }
                        
 function canBeWritten(n) {
     for(let a = 1; a <= Math.floor((n/2)**.5); a++){
         if(isPrime(n-2*a**2)) return true;
         }
    return false;
  }
                                            
  function goldbachsOtherConjecture(){
      let num = 5;
      while(canBeWritten(num)){
         do {num += 2;
          } while(isPrime(num));
      }
      return num;
   }

   goldbachsOtherConjecture();
