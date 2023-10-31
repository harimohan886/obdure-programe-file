let num = 10;
let count=0;

for(i=1;i<=7;i++){

    if (num%i===0){
        count++;
    }
}
if (count==2){
    console.log("this is the prime number")
}else{
    console.log("this is not a prime number")
}