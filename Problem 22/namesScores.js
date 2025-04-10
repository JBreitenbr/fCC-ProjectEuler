function wordVal(name){
  let alph="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let v=name.split("").map((item)=>alph.indexOf(item)+1);
  return v.reduce((a,b)=>a+b,0);
}

function namesScores(arr) {
  let sorted=arr.slice(0,arr.length).sort();
  let m=sorted.map((item)=>wordVal(item));
  let sVar=0;
  for(let i=0;i<arr.length;i++){
    sVar+=m[i]*(i+1);
  }
  return sVar;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);
