function multiplesOf3and5(number) {
  let sVar=0;
  for(let i=1; i<number; i++){
    if(!(i%3)||!(i%5)){
      sVar+=i;
    }
  }
  return sVar;
}

multiplesOf3and5(1000);
