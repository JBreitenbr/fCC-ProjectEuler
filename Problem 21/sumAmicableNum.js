function factors(num){
  let cl=Math.ceil(Math.sqrt(num));
  let arr=Array.from(Array(cl).keys());
  let p1=arr.filter((item)=>num%item==0);
  let p2=p1.map((item)=>num/item).reverse();
  let facs=[...p1,...p2];
  return facs.slice(0,facs.length-1);
}

function isAmicable(num){
  let facs1=factors(num);
  let s1=facs1.reduce((a,b)=>a+b,0);
  let facs2=factors(s1);
  let s2=facs2.reduce((a,b)=>a+b,0);
  return s2==num && s1!=num;
}

function sumAmicableNum(n) {
  let aSum=0;
  for(let i=1;i<n;i++){
    if(isAmicable(i)){
      aSum+=i;
    }
  }
  return aSum;
}

sumAmicableNum(1000);
