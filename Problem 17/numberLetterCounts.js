const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; 

// Function to convert a number to its word representation 
function numberToWords(num) { 
  if (num < 10) { return ones[num]; } 
  else if (num < 20) { return teens[num - 10]; } 
  else if (num < 100) { return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + ones[num % 10] : ''); } 
  else if (num < 1000) { return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' and ' + numberToWords(num % 100) : ''); } 
  else if (num < 1000000) { return numberToWords(Math.floor(num / 1000)) + ' thousand' + (num % 1000 !== 0 ? ' and ' + numberToWords(num % 1000) : ''); } 
  else { return 'Number out of range'; } } 
let numbersArray = []; 
function generateNumbersList(n) { 
  for (let i = 1; i <= n; i++) 
    { numbersArray.push(i); } 
  return numbersArray; } 

// Function to convert a list of numbers to their word representations 
function numbersListToWords(numbers) { 
  generateNumbersList(1000); 
  return numbers.map(number => numberToWords(number));
} 
let numbersToWordsArray = numbersListToWords(numbersArray);

function numberLetterCounts(limit) { 
  numbersListToWords(numbersArray); 
  let numberOfCharacters = []; 
  let regex = /[a-z]/g; 
  // Get number of characters for each word representation of the numbers and store them in a new array. 
  for (let i = 0; i < numbersToWordsArray.length; i++) { 
    let result = numbersToWordsArray[i].match(regex).length; numberOfCharacters.push(result); 
  } 
  let sum = 0; 
  // Sum up the total number of characters. 
  for (let i = 0; i < limit; i++) { 
    sum += numberOfCharacters[i];
  } 
return sum;
 } 
