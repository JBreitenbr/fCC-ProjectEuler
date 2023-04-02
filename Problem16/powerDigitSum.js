function checkSum(val){
    let stri=val.toString();
    let l=stri.length;
    let cVar=0;
    for(let i=0; i<l;i++){
         cVar+=stri[i]*1;
        }
    return cVar;
    }

function powerDigitSum(num){
    let pInt = BigInt(Math.pow(2,num));
    return checkSum(pInt);
    }


powerDigitSum(15);
