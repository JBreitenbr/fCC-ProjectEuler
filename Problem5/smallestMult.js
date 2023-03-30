
function gcd(a,b) {
  return (b==0)?a:gcd(b,a%b);
  }

function scm(a,b){
   return (a*b)/gcd(a,b);
   }

function scm_more(arr) {
    return arr.reduce(scm);
    }

function smallestMult(num){
     let hArr=[];
     for(let i=1;i<=num;i++)
        {
          hArr.push(i);
         }
     return scm_more(hArr);
     }

smallestMult(20);
