//WAP to find the reverse of a 4 digit number


let number = 5435;
let rev = 0;

if (number>999 && number <= 10000){


while (number > 0) {
    rev = rev * 10 + (number % 10);
    number = (number - (number % 10)) / 10;
}
console.log(rev)
}

else{
    
    console.log("this is not a foure digit number please enter for digit number")

}



