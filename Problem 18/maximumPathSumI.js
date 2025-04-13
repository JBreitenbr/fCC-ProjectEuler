function maximumPathSumI(triangle) {
  for(let i=1;i<triangle.length;i++){
    for(let j=0;j<i+1;j++){
      if(j==0){
        triangle[i][0]+=triangle[i-1][0];
      }
      else if(j==i){
        triangle[i][j]+=triangle[i-1][j-1];
      }
      else {
        triangle[i][j]+=Math.max(triangle[i-1][j-1],triangle[i-1][j]);
      }
    }
  }
  return Math.max(...triangle[triangle.length-1]);
}
