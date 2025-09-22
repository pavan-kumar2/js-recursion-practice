function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}

const person = {
    name: 'Ganesh',
    age: 10,
    professional: "software developer"
}

console.log(deepClone(person))



export default deepClone;