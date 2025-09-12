// Factorial of a number using recursion

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


// module.exports = factorial;
export default factorial;
