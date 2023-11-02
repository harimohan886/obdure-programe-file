//WAP accepts only the unique elements in an array.

let arr = [3,54,443,54,453,543,4345,3,4552]
let match;

for(let i=0;i<arr.length;i++){

    match=false;








    
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]&& i!=j){
            match=true;
           
           } 
        } if(!match){
            console.log(arr[i])
    }


}