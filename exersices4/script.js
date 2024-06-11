/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

// function tellFortune () {
//     var name = "Alice";
//     var location="Jordan";
//     var number = 3;
//     var job = "software engineer"; 
//     document.write("You will be a "+job+" in "+location+",and married to "+name+" with "+number+" kids ")
// }
// tellFortune();


/////////////////////////////////////////////////////////////
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// function calculateDogAge(x){
//     age=7*x 
// document.write("Your doggie is"+age+"years old in dog years!")
// return x
// }

// calculateDogAge(2);
///////////////////////////////////////////////////////////////////

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(){
    age=30
    amount=3

}



// function calculateSupply(age, amount){
//     var max_age = 100
//     var years_left = max_age - age
//     var days_left = years_left * 365
//     var total_amount_needed = days_left * amount
    
//     document.write("You will need "+ total_amount_needed + " cups of tea to last you until the ripe old age of "+ max_age)
// }
// calculateSupply(30, 3)



////////////////////////////////////////////////////////////////////////////////////////
// Write a function called greet that:
// takes 1 argument: name.
// and it will return hello + name


// function greet(name){

//     document.write("hello "+ name)
// }
// greet("Adam");
//////////////////////////////////////////
// what is the error:
// function double(cat) {
//   return 2 * x;
// }>>>>>>>>>>>>>>>>>>>>> the error is cat parametar
// function double(7) {
//     return 2 * 7;
//   }>>>>>>>>>>>>>>>>>>>>>>>>>>>> the error is 7 parametar
// function double('7') {
//     return 2 * 'x';
//   }>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>the error is 7 parametar and return 'x'
// fix these functions:

// function double1(x) {
//     return 2 * x ;                  /////// ) and func
//   }
  
//   function double2(x) {
//   return 2 * x;                               ////////// functiondouble2 and ) and {
//   }
  
//   function  double3(x) {
//     return 2 * x;             ////////////// (3) and }
//   }


// function cube (x){
//     var num=x*x*x
//     document.write(x+"cube "+ num)
// }
// cube(4)

///////////////////////////////////////////////////
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/


// function multiply(x ,y){
//     document.write(x*y)
// }
// multiply(4,3)
/////////////////////////////////////////////////////////////////
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// function canIGetADrivingLicense(age){
// if(age>=20)
//     {
//         document.write("yes you can")

//     }
//     else
//     {
//         document.write("please come back after " +(20-age) +" years to get one" )

//     }
// }
// canIGetADrivingLicense(17)


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/


// function sameLength(x,y){
//     if(x.length==y.length)
//         {document.write(true)}
//     else{document.write(false)}
// }
// sameLength("tree","clue")


//////////////////////////////////////////////////
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
 
// function largerNubmer(x,y){
//     if(x>y)
//         {
//             document.write(x)
//         }
//         else{
//             document.write(y)
//         }
// }
// largerNubmer(5,3)

//////////////////////////////////////////////////
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
// function smallerNubmer(x,y,z){
//     if(x<y && x<z)
//         {
//             document.write(x)
//         }
//         else if (y<x && y<z)
//             {
//                 document.write(y)

//             }
//             else
//             {
//                 document.write(z)

//             }
// }
// smallerNubmer(5,99,34)


////////////////////////////////////
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
// function shorterString(a,b,c,d,e){
//     let strings = [a,b,c,d,f];
//     let shortest = a ;

//     for(i of strings){
//         if(i.length < shortest.length){
//             shortest = i ;
//         }        
//     }
//     document.write(shortest );
// }
// shorterString("air","tr","car","github","by")


////////////////////////////////////////
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// function longerString(a,b,c,d,e){
//     let strings = [a,b,c,d,f];
//     let shortest = a ;

//     for(i of strings){
//         if(i.length > shortest.length){
//             shortest = i ;
//         }        
//     }
//     document.write(shortest );
// }
// longerString("air","tr","car","github","by")

////////////////////////////////////////////////
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// function isEven(x){
//     if(x%2==0)
//         {
//             document.write(true );
//         }
//         else{document.write(false );}

// }
// isEven(2)




/////////////////////////////////////////
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// function isodd(x){
//     if(x%2==1)
//         {
//             document.write(true );
//         }
//         else{document.write(false );}

// }
// isodd(4)

/////////////////////////////////////
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// function positive(x){
//     if(x<0)
//         {
//             // Math.abs(x)
//             document.write(Math.abs(x) );
//         }
//         else{document.write(x );}

// }
// positive(-5)
////////////////////////////////////////////
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// function fullName(firstname,lastname)
// {
//     document.write(firstname+"  "+lastname );
// }
// fullName("ali","momani")


/////////////////////////////////////////////

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

// function average(a,b,c,d,e){
//     let avg=(a+b+c+d+e)/5
//     document.write(avg)
// }
// average(5,7,9,3,5)

///////////////////////////////////////////////
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

// function randomnumber(){
//     document.write(Math.random());
// }
// randomnumber()

///////////////////////////////////////////////////////
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
// function getRandomArbitrary(a, b) {
//     document.write(Math.random() * b +a);
//   }
//   getRandomArbitrary(3,100)

//////////////////////////////////
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// function scoreInUniversty(avg){
// if (avg>=95 && avg<100)
//     {
//         document.write("A")
//     }
//     else if (avg>=85 && avg<95)
//         {
//             wdocument.write("B")
//         }
//         else if (avg>=70 && avg<85)
//             {
//                 document.write("c")
//             }
//             else if (avg>=50 && avg<70)
//                 {
//                     document.write("d")
//                 }
//                 else if (avg>=0 && avg<50)
//                     {
//                         document.write("f")
//                     }
//                    }
//                    scoreInUniversty(3)



///////////////////////////////////
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// function counter (){
// var x=0
// x++
// document.write(x)
// }
// counter()
///////////////////////////////////////////////
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

// function counter() {
//     let c = 0;
//     let counter_Function = function() {
//         return c++;
//     };

//     counter_Function.reset = function() {
//         c = 0;
//     };

//     return counter_Function;
// }

// let c = counter();
// console.log(c()); 
// console.log(c()); 
// c.reset();
// document.write(c());