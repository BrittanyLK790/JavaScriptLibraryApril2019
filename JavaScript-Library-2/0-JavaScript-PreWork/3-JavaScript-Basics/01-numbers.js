/* */
 
/* Numbers versus Ints,
If you are coming from another language like C# or Java, you might heard numbers reffered to as ints or integers. In JavaScript, we refer to them as NUMBERS. */

/* Printing Numbers,
Rememer F8 or fn + f8 will run the JavaScript code. */
console.log(1);
console.log(1 + 1);
console.log(1.1);
console.log(1.1 * 1.1);
/* Not just printing numbers, but executing some math operations. */

/* Basic Operations */
console.log(5 + 5); 
console.log(6 - 6);
console.log(7 * 7);
console.log(8 / 8);

/* Modulus Operators */
console.log(10 % 5); //Result = 0
console.log(10 % 4); //Result = 2
console.log(10 % 9); //Result = 1
/* Its not division, multipulcation, subtraction, or addition. Division is the closest thing, as the result of these operations is the remainder:
Some simple math:
10 / 5 = 2 with a remainder of 0.
10 / 4 = 2 with a remainder of 2.
10 / 9 = 1 with a remainder of 1.
Hence, the modulus operator yields a remainder. */

/* Shorthand Operators */
/* What would y equal at the end of the operation? */
var y = 5;
y = y + 1; 
/* Works like this: */
var y = 5;
y = 5 + 1; //6
y = y + 1; //7
/* y will change over time, more later.
Shorthand Operators look like this: */
var x = 5;
x += 1; // Same as saying x = x + 1
console.log(x); //6

/* Practice  */
var z = 10;
console.log(z);
z+=1;
console.log(z);

var a = 20;
a-=1;

var b = 20;
b*=2;

var c = 50;
c/=2;

/* Operator -- Example -- Equivalent */
/*    +=    -- a += b  -- a = a + b  */
/*    -=    -- a -= b  -- a = a - b  */
/*    *=    -- a *= b  -- a = a * b  */
/*    /=    -- a /= b  -- a = a / b  */
/*    %=    -- a %= b  -- a = a % b  */

/* Age Problem,
In your head, figure out the age when we log it. then run code. */
var age = 40;
age += 1;
age -= 20;
age *= 20;
console.log(age); //420