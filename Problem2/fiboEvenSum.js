function fibo(n) {
    if (n < 2){
        return 1;
    }else{
        return fibo(n-2) + fibo(n-1);
    }
}

function fiboEvenSum(n) {
let sVar=0;
  for(let i=1; i < 33; i++){
      if(fibo(i)<=n && !(fibo(i)%2))
          sVar+=fibo(i);
            }
              return sVar;
}
