// Convert a non-negative integer num to its English words representation.

const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands = ["", "Thousand", "Million", "Billion"];

const belowTwentyGerman = ["", "Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", "Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn", "Sechzehn", "Siebzehn", "Achtzehn", "Neunzehn"];
const tensGerman = ["", "", "Zwanzig", "Dreißig", "Vierzig", "Fünfzig", "Sechzig", "Siebzig", "Achtzig", "Neunzig"];
const thousandsGerman = ["", "Tausend", "Million", "Milliarde"];

const intToWord = (num) => {
    if (num === 0) return "Zero";

    let result = '';

    const helper = (n) => {
        if (n === 0) return '';
        else if (n < 20) return belowTwenty[n] + ' ';
        else if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
        else return belowTwenty[Math.floor(n / 100)] + ' Hundred ' + helper(n % 100);
    }

    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + ' ' + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
}

const intToWordGerman = (num) => {
    if (num === 0) return "Null";

    let result = '';

    const helper = (n) => {
        if (n === 0) return '';
        else if (n < 20) return belowTwentyGerman[n] + ' ';
        else if (n < 100) return (n % 10 === 0 ? tensGerman[Math.floor(n / 10)] : belowTwentyGerman[n % 10] + 'und' + tensGerman[Math.floor(n / 10)]) + ' ';
        else return belowTwentyGerman[Math.floor(n / 100)] + 'hundert ' + helper(n % 100);
    }

    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousandsGerman[i] + ' ' + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();
}

// Test Cases
console.log(intToWord(12)) // Expect "Twelve"
console.log(intToWord(111)) // Expect "One Hundred Eleven"
console.log(intToWord(1234567)) // Expect "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

console.log(intToWordGerman(12)) // Expect "Zwölf"
console.log(intToWordGerman(111)) // Expect "Einhundert Elf"
console.log(intToWordGerman(1234567)) // Expect "Eins Million Zwei Hundert Dreiundvierzig Tausend Fünfhundert Siebenundsechzig"
