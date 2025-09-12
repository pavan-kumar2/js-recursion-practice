// sum of natural numbers

function sumOfNaturalNumbers(n) {

    if (n === 0) return 0;

    return n + sumOfNaturalNumbers(n - 1);
}

console.log(sumOfNaturalNumbers(5));

export default sumOfNaturalNumbers;