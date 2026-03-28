//Toma un string y conviertelo en una lista de palabras, separandolas por espacios en blanco. No puedes usar la función split.
const example = "This is a string!";
const result = [];

let currentWord = "";

for (let i = 0; i < example.length; i++) {
    const char = example[i];

    if (char === " ") {
        result.push(currentWord);
        currentWord = "";
    } else {
        currentWord += char;
    }
}

result.push(currentWord);
console.log(result);