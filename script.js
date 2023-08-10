
let initialValues = [1, "hello", true, 3.14, false, null];

let otherValues = [42, "world"];

initialValues.push(...otherValues);

let numericValues = initialValues.filter(value => typeof value === "number");

numericValues = numericValues.map(value => value + 2);

let numericIndex = 0;
for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "number") {
        initialValues[i] = numericValues[numericIndex];
        numericIndex++;
    }
}

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "string") {
        initialValues[i] += " happy coding";
    }
}

for (let i = 0; i < initialValues.length; i++) {
    if (typeof initialValues[i] === "boolean") {
        initialValues[i] = !initialValues[i];
    }
}

console.log("Rezultat final:", initialValues);
