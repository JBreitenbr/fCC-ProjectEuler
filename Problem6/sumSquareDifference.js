function squareSum1(num){
  let s1=0;
  for(let i=1; i<=num; i++){ s1+=i*i;}
  return s1;
}

function squareSum2(num){
  let s=0.5*(num+1)*num;
  return s*s;
}

function sumSquareDifference(n) {

  return squareSum2(n)-squareSum1(n);
}

sumSquareDifference(100);
