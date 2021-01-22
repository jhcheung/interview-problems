// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// https://leetcode.com/problems/palindrome-number/

// very similar to https://github.com/jhcheung/interview-problems/blob/master/leetcode-problems/07_reverse_integer.js
// took jimmy and ehtesh 1h10m for three different solutions

import * as assert from "assert";

function isPalindromeArray(x) {
    if (x < 0) return false;
    
    let copy = x;
    const digits = [];

    while (copy > 0){
        const digit = copy % 10; 
        digits.push(digit);
        copy = Math.trunc(copy / 10);
    }
    // console.log(x, digits, copy);

    let pow = digits.length - 1;
    let reversed = 0;

    for (let i of digits) {
        // console.log(i);
        reversed += i * (10 ** (pow));
        pow -= 1;
    }
    // console.log(x, digits, reversed);
    return x == reversed;
};

function isPalindromeInPlace(x) {
    if (x < 0) return false;
    
    let copy = x;
    let pow = Math.trunc(Math.log10(x));
    let reversed = 0;

    while (copy > 0){
        const digit = copy % 10; 
        copy = Math.trunc(copy / 10);
        reversed += digit * (10 ** pow);
        pow -= 1;
    }
    // console.log(x, pow, reversed);

    return x == reversed;
}

function isPalindromeCompareDigits(x) {
    if (x < 0) return false;

    let copy = x;
    let pow = Math.trunc(Math.log10(x));
    let originalPow = pow;
    
    while (copy > 0) {
        const right = copy % 10;
        const left = Math.trunc(copy / (10 ** pow));
        // console.log(x, left, copy, right);
        if (left !== right)
            return false;

        copy = copy - (left * 10 ** pow); // 12321 -> 2321
        copy = Math.trunc(copy / 10); // 2321 -> 232
        pow -= 2;
    }

    return copy == 0 || pow <= 2;
    // lol this is so complicated
}

function isPalindromeString(x) {
    if (x < 0) return false;

    const s = String(x);

    for (let i=0; i<s.length/2; i++){
        if (s[i] !== s[s.length - 1 - i])
            return false;
    }
    return true;

}

// assert(isPalindromeArray(121) === true);
// assert(isPalindromeArray(-121) === false);
// assert(isPalindromeArray(10) === false);
// assert(isPalindromeArray(-101) === false);
// assert(isPalindromeArray(0) === true);
// assert(isPalindromeArray(1) === true);

// assert(isPalindromeInPlace(121) === true);
// assert(isPalindromeInPlace(-121) === false);
// assert(isPalindromeInPlace(10) === false);
// assert(isPalindromeInPlace(-101) === false);
// assert(isPalindromeInPlace(0) === true);
// assert(isPalindromeInPlace(1) === true);

// assert(isPalindromeCompareDigits(12321) === true);
// assert(isPalindromeCompareDigits(12322) === false);
// assert(isPalindromeCompareDigits(121) === true);
// assert(isPalindromeCompareDigits(-121) === false);
// assert(isPalindromeCompareDigits(10) === false);
// assert(isPalindromeCompareDigits(-101) === false);
// assert(isPalindromeCompareDigits(0) === true);
// assert(isPalindromeCompareDigits(1) === true);
// assert(isPalindromeCompareDigits(1000021) === false);
// assert(isPalindromeCompareDigits(1000001) === true);
// assert(isPalindromeCompareDigits(1000030001) === false);

assert(isPalindromeString(12321) === true);
assert(isPalindromeString(12322) === false);
assert(isPalindromeString(121) === true);
assert(isPalindromeString(-121) === false);
assert(isPalindromeString(10) === false);
assert(isPalindromeString(-101) === false);
assert(isPalindromeString(0) === true);
assert(isPalindromeString(1) === true);
assert(isPalindromeString(1000021) === false);
assert(isPalindromeString(1000001) === true);
assert(isPalindromeString(1000030001) === false);
