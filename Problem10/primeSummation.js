function isPrime(n){
  for(let i=2; i<Math.floor(Math.sqrt(n))+1;i++){
    if(!(n%i)){
      return false;
    }
  }
  return true;
}

function primeSummation(num){
let pArr=[1,1];
for(let i=2; i<num; i++){
  if(isPrime(i)){pArr.push(i) ;
 }
}
  
let slArr=pArr.slice(2,num).filter((item)=>item<num);


return slArr.reduce((total,item) => total + item);
}
