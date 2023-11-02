let arr = [24, 52, 54, 5, 6346, 56552, 2353, 5,  -2344, -64, -345, -2, -52];

let positiveCount = 0;
let negativeCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
 if (arr[i]>0){
    positiveCount++;
}else{
    negativeCount++;
}
    
     if (arr[i]%2==0){
    evenCount++;
     }else{
     oddCount++;}
}


console.log("Number of positive elements:", positiveCount);
console.log("Number of negative elements:", negativeCount);
console.log("Number of even elements:", evenCount);
console.log("Number of odd elements:", oddCount);
