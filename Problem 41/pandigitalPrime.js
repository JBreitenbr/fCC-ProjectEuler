function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
  const currentNum = nums[i];
  const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
  const remainingNumsPermuted = permute(remainingNums);
  for (let j = 0; j < remainingNumsPermuted.length; j++) {
  const permutedArray =                           [currentNum].concat(remainingNumsPermuted[j]);
  result.push(permutedArray);
    }
  }
  let stri=result.map((item)=>item.join(""));
  return stri;
  }
 function isPrime(n){
     for(let i=2; i<Math.floor(Math.sqrt(n))+1;i++){
         if(!(n%i)){
               return false;
                   }
                     }
                       return true;
                       }
 
function pandigitalPrime(n) {
  let arr=Array.from(Array(n+1).keys()).slice(1,n+1);
  let lst=permute(arr);
  let rArr=[];
  for(let i=0;i<lst.length;i++){
    if(isPrime(Number(lst[i]))){
      rArr.push(Number(lst[i]));
    }
  }
  console.log(rArr);
  return Math.max(...rArr);
}

pandigitalPrime(7);
