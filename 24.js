let a = [6,525,525,545,234,54,234]

let first_max = -Infinity;
let second_max = -Infinity;

for(let i=0;i<a.length;i++){

    if (a[i]>first_max){
        second_max=first_max;
        first_max=a[i];

    }else if (a[i]>second_max && a[i]!=first_max){
        second_max=first_max;
    }
}


console.log("this first_max numbre ",first_max)
console.log("this is the second _number", second_max)