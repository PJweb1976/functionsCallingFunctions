/*
//test
let person = {
    name: 'Peggy',
    age: 45,
    
};
console.log (person);
//end test

// lesson functions calling functions
const scream = function(){
    console.log("Aaaaaaa!");
};
//Calling scream outside of a function
scream();

// Here we call scream inside of a function
 const makeNoise = function() {
     scream();
 };
 makeNoise();
*/
//const add = function(numberA, numberB) {
   // return numberA + numberB;
//};
//The add function returns to this line, which is outside of a function
//const eight = add(3,5);
//console.log(eight);

//const doCalculation = function() {
    // the add function returns to this line, which is inside of a function
   // const six = add(2,4);
    //console.log(six);
//};
//doCalculation();

// Debugging with console.log
// extra console.log(number); om te checken wat ie doet
//const makePositive = function(number) {
  //  console.log("Entering makePositive..");
    //console.log(number);
    //    return Math.abs(number);
   // };
// wat ook kan:
//const makePositive2 = function(number) {
    //console.log("Entering makePositive..");
   // console.log("Input: ",number);
    //const result = Math.abs(number);
   // console.log("Output: ", result);
   // return result;
   // };
   /*
const makeBigger = function(number) {
    console.log("Entering makeBigger..");
    //console.log(number);
    if (number < 10) {
        return 10 + number;
    }
    return number;
};
const square = function(number) {
    console.log("entering square..");
    //console.log(number);
    return number * number;
};
// where all the other stuff is happening
const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation..");
    //console.log(number);
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));
*/


// functions calling functions: exercise

const isAdult = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};
console.log (isAdult);

const greeting = function(age) {
    if (isAdult(age)){
        return "Hello there";
    }else {
        return "Hey kiddo"
    }
};
console.log(greeting(16));
console.log(greeting(45));
// andere optie:
const isAdultShort = age => age >= 18;

const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

console.log(greetShort(65)); // "Hello there"
console.log(greetShort(10)); // "Hey kiddo"


// VAT calculations: exercise1
const calculatingPrice = function(basePrice, VATPercentage) {
   return basePrice * (VATPercentage/100);
};
const calculatingPriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculatingPrice(basePrice, VATPercentage);
    return basePrice + VAT;
}

console.log(calculatingPrice(1000, 21));
console.log(calculatingPrice(10, 9));
console.log(calculatingPriceIncludingVAT(1000,21)); 
console.log(calculatingPriceIncludingVAT(10,9));

// VAT calculations: exercise2
const calculatingBasePriceAndVATAmount = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100+VATPercentage)/100); 
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};
console.log(calculatingBasePriceAndVATAmount(121,21));
console.log(calculatingBasePriceAndVATAmount(10.90,9));

