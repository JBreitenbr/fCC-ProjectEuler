function largeSum(arr) {
    let result = BigInt(0); 
      for (let num of arr) {
          result += BigInt(num);
            }
    let res=result.toString().slice(0,10);
    return Number(res);
 }


// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
