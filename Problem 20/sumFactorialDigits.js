function factorial(num) {
    let result = [1];
    for(let i = 1; i <= num; i++){
        let carry = 0
        for(let j = result.length - 1; j >= 0; j--){
            let current = result[j] * i;

            if(current >= 10){
                result[j] = (current+carry)%10;
                carry =  Math.floor((current + carry)/10);
                if(result[j-1] == undefined){
                    if(carry >= 10){
                        let str = "" + carry
                        let temp = carry
                        for(let k = 0; k < str.length; k++){
                            result.unshift(temp%10)
                            temp = Math.floor(temp/10)
                    }
                    }
                    else{
                        result.unshift(carry)

                    }
                }
            }
            else{
                if(current + carry >= 10){
                    result[j] = (current+carry)%10
                    carry = Math.floor((current + carry)/10);
                }
                else{
                    result[j] = current + carry
                    carry = 0;
                }
            }
        }
    }
    return result;
}

function sumFactorialDigits(n) {
  return factorial(n).reduce((a,b)=>a+b,0);
}
