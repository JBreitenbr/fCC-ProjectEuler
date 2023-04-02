/* n → n/2 (n is even)
n → 3n + 1 (n is odd) */

function collatzL(n){
let arr=[];
while(n!=1){
  n=n%2?(3*n+1):0.5*n;
  arr.push(n);
}
return arr.length;
}

function longestCollatzSeq(num){
let maxi=1;
let ind=1;
for(let i=2; i<num+1; i++){
  if(collatzL(i)>maxi){
    maxi=collatzL(i);
    ind=i;
  }
}
  return ind;
}

//console.log(longestCollatzSeq(1000000));
  
