
for (let amst = 1;amst<=500;amst++){
    let sum = 0;
    let temp = amst;
while(temp>0){

    let remainder = temp % 10;
    sum = sum + remainder**3;
    temp = (temp/10) >> 0;
}

if( amst == sum ){
    console.log("this is a amstrong number",+sum)
}
}
