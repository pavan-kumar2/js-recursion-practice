function reverseString(str) {
    if (str <= 1) return str;

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"))

export default reverseString;