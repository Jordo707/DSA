/*

The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

*/

const tribonacci = n => {
    // return base cases
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;

    // initialize first three numbers of the sequence
    let a = 0, b = 1, c = 1;

    // declare variable to hold next value
    let next;

    // from the third index to the nth index
    for (let i = 3; i <= n; i++) {
        next = a + b + c;
        a = b;
        b = c;
        c = next;
    }

    return c;

}

// test cases
console.log(tribonacci(4)) // expect 4
console.log(tribonacci(25)) // expect 1389537
