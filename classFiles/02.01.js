/*
Challenge 1:
Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.
  The function should console.log a random number between 0 and 1.  Once you've completed
   the challenge with a for-loop, see if you can make this work with a for-of loop.  If 
   you can solve that problem, see if you can solve this with a for-each loop.  Note that 
   for-of and for-each loops require slightly different conditions to work than a for 
   loop requires.
*/

for (let x = 0; x < 10; x++){
    randNumber(); //console.log(x); //drop-console.log
}

function randNumber(){
    console.log(Math.random()); //return Math.random();
}

//console.log(randNumber());

//mini-challenge
//make a function that takes 2 parameters: favFood and  favDessert. your function 
//should return a sentence with those 2 params inside.
let foodFav = 'favFood', 'favDessert'

function foodFav()
console.log()


function foodsentence(favFood, favDessert){
    return `I would like ${favFood} with some ${favDessert} cheesecake.`;
}

console.log(foodsentence('cheese cake', 'muffin'));


//demonstrate
function first(inputFunction){
    inputFunction();
}

function second(){
    console.log('functions, woot!');
}

first(second);


//Challenge 2:
//Let's compose functions!  Your first function should take a function as input and return that function
//with a function call.  Your second function should take a string as input and return that string with 
//extra stuff added to that string.  Console.log the results of your function calls.  Additional information
//is below to help clarify what you're doing (the below is just an example):
//first function: input-secondFunc output-secondFunc('coding is great!')
//second function: input-'coding is great!' output-'coding is great!  pie is, too!'

function first(){
    return('coding is great!');
    
}

function second(){
    return('coding is great! pie is, too!');
}

console.log(first, second);
//

function firstFunc(funcParam){
    return funcParam('coding is great!');
}

function secondFunc(str){
    return str + ' pie is too!';
}

console.log(firstFunc(secondFunc));

//
//challenge 3: make 2 functions.
//first function takes a function as input, and calls that input function with a number value.
//second function takes a number as input, and concatenates that number with a string.
// the second function should return the concatenation. the first function should return the call










function firstFunc(num){
    return input(firstFunc(4));
}

function secondFunc(str){
    return str + (secondFunc);
}

console.log((str));


function func1(input){ //"input" refers to "func2" from line 100
    return input(Math.floor(Math.random()*10)); //"input(7) is the same as"return num +
}

function func2(num){ //"func2" only runs because of "func1"
    return num +'woot';
}

console.log(func1(func2));