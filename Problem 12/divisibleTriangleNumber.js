function tn(n) {
  return (n * (n + 1)) / 2;
  }
  
function cd(n) {
  let count = 0;
  let sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
        if (n / i === i) {
            count++;
        } 
    else {
        count += 2;
        }
      }
    }
   return count;
 }

function divisibleTriangleNumber(n) {

let fnd = false;
let i = 0;
while (!fnd) {
  let triangleNum = tn(i);
    if (cd(triangleNum) > n) {
        fnd = true;
        return triangleNum;
        break;
     } else {
        i++;
    }
  }
}

divisibleTriangleNumber(5);
