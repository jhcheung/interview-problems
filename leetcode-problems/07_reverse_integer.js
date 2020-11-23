// Given a 32-bit signed integer, reverse digits of an integer.
// https://leetcode.com/problems/reverse-integer/
// O(log n) runtime, scales with number of digits in an integer, which is log(n)
// O(log n) storage, scales with number of digits in an integer again.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const arrayOfNums = []

    // if (x >= 2 ** 31 * 1 || x <= 2 ** 31 * -1) {
    //     return 0;
    // }

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
console.assert(reverse(1534236469) === 0)