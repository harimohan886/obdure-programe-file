//WAP to generate all combinations of 1, 2 and 3.

for (let i =1;i<=3;i++){
    for(let j=1;j<=3;j++){
        for(let k=1;k<=3;k++){
         if(i!=j && j!=k && k!=i){
            console.log(i,j,k)}
        }
    }
}