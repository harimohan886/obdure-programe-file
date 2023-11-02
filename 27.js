//WAP to find if the number to be searched is present in the array and if yes, then display the number of times it appears.

let arr = [4, 54, 64, 65, 65, 4, 23, 4];
let search_number = 5;
let search_count = 0;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (search_number == arr[i]) {
        search_count++;
        found = true;
    }
}

if (found=true) {
    console.log(search_number, " is present in the array");
    console.log(search_number, " number occurs ", search_count, " times in the array");
} else {
    console.log("The number is not found in the array");
}
