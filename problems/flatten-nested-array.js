function flattenArray(arr) {

    let result = [];

    for (let i of arr) {
        if (Array.isArray(i)) {
            result = result.concat(flattenArray(i));
        } else {
            result.push(i);
        }
    }

    return result;

}

console.log(flattenArray([1, [2, [3, 4]], 5]));

export default flattenArray;