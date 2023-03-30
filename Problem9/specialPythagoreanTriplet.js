function specialPythagoreanTriplet(num) {
 for(let a=1; a<800;a++){
     for(let b=a; b<500; b++){
         if(((Math.sqrt(a*a+b*b))%1==0)&&(a+b+Math.sqrt(a*a+b*b)==num)){
               return a*b*Math.sqrt(a*a+b*b);
         }
      }
   }
 }

specialPythagoreanTriplet(1000);
