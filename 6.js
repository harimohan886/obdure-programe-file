//WAP to find the reverse of a 4 digit number and compare it to the original number.
let number = 3333;
let rev = 0;

if (number>999 && number <= 10000){
 let original_number = number;

while (number > 0) {
    rev = rev * 10 + (number % 10);
    number = (number - (number % 10)) / 10;
   
}
console.log(rev)


if (original_number === rev) {
    console.log("The original number and reverse number are the same ");
} else {
   console.log("The original and reverse number are not the same.");
}

}

else{
    
    console.log("this is not a foure digit number please enter for digit number")

}

