//WAP to enter numbers until the user wants. At the end it should display the count of positive, negative and zeros entered.
const arr = [423,53,6543,634,643,23,42,4243,-52,-6,-42,-52,-55,0,0
]
let count1=0
let count2=0;
let count3=0

for(let i =0; i<arr.length;i++){

    if(arr[i]>0){
        count1++;
    }else if(arr[i]<0){
        count2++;
    }else if ( arr[i]==0){
        count3++;

    }

}
console.log("positive number",+count1)
console.log("negative number",+count2)
console.log("number of zero",+count3)