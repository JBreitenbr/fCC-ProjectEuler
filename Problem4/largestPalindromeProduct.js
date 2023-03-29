function palindrome(num) {
  let str=num.toString();
return str.split("").reverse().join("")==str;
}

function largestPalindromeProduct(n) {
  let arr=[];
  for(let i=Math.pow(10,n-1);i<Math.pow(10,n);i++){
  for(let j=i+1;
  j<Math.pow(10,n);j++){
    if(palindrome(i*j)){
      arr.push(i*j);
    }
  }
 }
 return Math.max(...arr);
}

largestPalindromeProduct(3);
