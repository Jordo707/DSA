/*

You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

The first ten characters consist of the phone number of passengers.
The next character denotes the gender of the person.
The following two characters are used to indicate the age of the person.
The last two characters determine the seat allotted to that person.
Return the number of passengers who are strictly more than 60 years old.

*/

const countSeniors = details => {
    let seniorCount = 0;

    details.forEach(detail => {
        // Extract age from the string
        const age = parseInt(detail.substring(11, 13), 10);

        // Check if the age is greater than 60
        if (age > 60) {
            seniorCount++;
        }
    });

    return seniorCount;
}

// Test Cases
console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"])); // 2
console.log(countSeniors(["1313579440F2036","2921522980M5644"])); // 0
