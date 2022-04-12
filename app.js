/* variable with an age*/
let myAge = 15;
/* my early age */
let earlyYears = 2;
earlyYears *= 10.5;
/* lateryears */
let laterYears = myAge - 2;
/* number of dog years accounted for by later years*/
laterYears *= 4;
console.log(earlyYears); 
console.log(laterYears);
/*my age in dog years*/
let myAgeInDodYears = myAge + laterYears;
/*this code prints my name in lowercase*/
const myName = 'Ernest';
console.log(myName.toLowerCase());
/* in this line, im going to use interpolation to display name, dog age and age in sentence*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDodYears} years old in dog years.`)