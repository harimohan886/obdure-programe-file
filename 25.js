//WAP that interchanges the odd and even elements of an array

let arr = [1,2,3,4,5,6,7,8,9,10];

let temp;

for(let i=0;i < arr.length-1;i+=2){

    temp=arr[i];
    arr[i]=arr[i+1]
    arr[i+1]=temp

}
for(let i=0;i<arr.length;i++){

    console.log(arr[i])
}
  