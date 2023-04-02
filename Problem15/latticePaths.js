/* The number of lattice paths of a nxn grid is isomorph to the binomial coefficient (2n n). 
Therefore the following formula: */

function latticePaths(num){
  let pathNum=1;
  for(let i=num+1; i<=2*num; i++){
       pathNum = pathNum*i;
      }
      for(let j=1; j<=num; j++){
           pathNum = pathNum/j;
          }
   return parseInt(pathNum);
   }
                      

latticePaths(4);
