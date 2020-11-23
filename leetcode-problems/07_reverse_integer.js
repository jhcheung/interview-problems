// Given a 32-bit signed integer, reverse digits of an integer.
// https://leetcode.com/problems/reverse-integer/
// O(log n) runtime, scales with number of digits in an integer, which is log(n)
// O(log n) storage for reverse(), scales with number of digits in an integer again.
// O(1) storage for reverseInPlace(), stays in num/result.
// took jimmy and ehtesh 2 hours for three different solutions

// https://leetcode.com/problems/reverse-integer/solution/
const reverseFromSolution = function(x) {
    let num = 0;

    while (x != 0) {
        let pop = x % 10;
        x = Math.trunc(x / 10);

        num = num * 10 + pop
    }
    if (num >= 2 ** 31 * 1 || num <= 2 ** 31 * -1) {
        return 0;
    }
    return num;
}

/**
 * @param {number} x
 * @return {number}
 */
const reverseInPlace = function(x) {
    const sign = x > 0 ? 1 : -1;
    if (sign < 0) {
        x = x * -1
    }

    let num = 0;
    let place = 1;
    let magnitude = Math.floor(Math.log10(x))

    while (magnitude >= 0) {
        let digit = Math.floor(x / (10 ** magnitude));
        x = x % (10 ** magnitude);
        num += digit * place;
        place = place * 10;
        magnitude -= 1;
        // console.log(x, digit, num);
    }
    // console.log("=====");

    if (num >= 2 ** 31 * 1 || num <= 2 ** 31 * -1) {
        return 0;
    }

    return num * sign;
};

const reverse = function(x) {
    const arrayOfNums = []

    const sign = x > 0 ? 1 : -1;
    if (sign < 0) {
        x = x * -1
    }

    while (x != 0) {
        arrayOfNums.push(x % 10)
        x = Math.floor(x / 10)
        // console.log(x, arrayOfNums)
    }

    let num = 0;
    let place = 1;
    let duration = arrayOfNums.length
    for (let i = 0; i < duration; i++) {
        let digit = arrayOfNums.pop()
        num += digit * place;
        place = place * 10
        // console.log(num, place, digit, arrayOfNums)
    }
    // console.log(num)

    if (num >= 2 ** 31 * 1 || num <= 2 ** 31 * -1) {
        return 0;
    }

    return num * sign;
};

console.assert(reverse(123) === 321);
console.assert(reverse(-123) === -321);
console.assert(reverse(120) === 21);
console.assert(reverse(0) === 0);
console.assert(reverse(2 ** 31 * -1) === 0);
console.assert(reverse(1534236469) === 0);

console.assert(reverseInPlace(123) === 321);
console.assert(reverseInPlace(-123) === -321);
console.assert(reverseInPlace(120) === 21);
console.assert(reverseInPlace(0) === 0);
console.assert(reverseInPlace(2 ** 31 * -1) === 0);
console.assert(reverseInPlace(1534236469) === 0);

console.assert(reverseFromSolution(123) === 321);
console.assert(reverseFromSolution(-123) === -321);
console.assert(reverseFromSolution(120) === 21);
console.assert(reverseFromSolution(0) === 0);
console.assert(reverseFromSolution(2 ** 31 * -1) === 0);
console.assert(reverseFromSolution(1534236469) === 0);