function sunCount(year){
  let sCnt=0;
  for(let i=0;i<12;i++){
    let dt = new Date(year,i,1);
    if(dt.getDay()==0){
      sCnt+=1;
    };
  }
  return sCnt;
}
function countingSundays(firstYear, lastYear) {
   let cArr=[];
   for(let y=firstYear;y<=lastYear;y++){
     cArr.push(sunCount(y));
   }
   let sSum=cArr.reduce((a,b)=>a+b,0);
   return sSum;
}

countingSundays(1943, 1946);
