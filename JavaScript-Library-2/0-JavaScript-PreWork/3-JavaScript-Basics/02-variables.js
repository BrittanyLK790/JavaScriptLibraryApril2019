/* Variables, think of them as a container. Cup analogies work really well with understanding variables. They store info. We can pour liquid into a cup and change it's value. We can pour two half cups into another cup. We can pour one cup into a bigger cup and then put it into an array of cups.
Variables are used to store values. They are containers for values. */

/* Declarations,
 they must be declared: (the name could be anything you want.*/
var cheesecake; //var x;(shown in example)

/* Initialized,
Then, variables must be initalized: */
cheesecake = 5; //x = 5;(shown in example)
/* Initialization is used for stating what the value of that variable is holding, as well as its type.(more later) */

/* Declarations and Initializations,
You can also do it all in one statement: */
var theNumberFive = 5;

/* Variables Demo */
var x = 1;
console.log(x); //1

/* Assignment,
It is common to assign a value to a variable. Then use that variable to stand for that think: consider the following: */
const feetInMile = 5260;
console.log(feetInMile); //5260

/* Naming,
We can name variables anything we want. A lot of creative writing in software. 
The variables should be sensibly named, to be understood by fellow developers */
var ageOfMyOldestFerret = 40;
var numberOfEggsInOneSitting = 50;

/* Camel Casing,
Variables names, in most cases, should be camel cased. This means that the first word is lower case and each consecutive word is upper case. It has humps like a camel. */
var numberOfGrammysIHaveWon = 0;
var mBirthYear = 1976;
var newNumber = 1 * numberOfGrammysIHaveWon;

/* Think it Through,
think through the answer for each one of the problems below: */
var age = 40;
var ageInAugust = age + 1;
console.log(ageInAugust); //41

var eleven = 11;
console.log(eleven * eleven); //110 //it was 121

var age = 20;
var nineteen = 19;
console.log(age - nineteen); //0 //age is undefined
//created an age variable of 20, equals 1 when ran.

/* A FEW DON'TS,
You can't start a variable with a number:*/
// var 2nite = "Tonight"
//console.log(2nite); //won't work, remove the brakets and it will show that even in js it's not liked.

/* Reserved Words,
There are expections for nameing variables. 
The following list is a group of reserved words in JavaScript,
and they should not be used as variable names.

-abstract
-boolean
-break
-byte
-case
-catch
-char
-class
-const
-continue
-debugger
-default
-delete
-do
-double 
*/