//find the sum of the digits of a 4 digit number



let number = 4444;
let sum = 0;
let remainder;

if (number>999 && number<10000){

while (number > 0) {
    remainder = number % 10; 
    sum = sum + remainder;   
    number = (number / 10) >> 0; // by using bitwise oprator
}
console.log("the sum of these number is ",  sum )

}
else(
    console.log(number,"this is not a four digit number please enter four digit number")
)



