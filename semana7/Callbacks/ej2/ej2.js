/*
2. Cree dos archivos de texto con el siguiente contenido.
    
    Lea ambos archivos y compare cuales palabras se repiten en ambos. Muestre el mensaje escondido al final del programa.
    

```
One
Red
I
Test
Blue
Three
Like
Dog
Sea
Green
Luigi
Drawing
Books
Pizza
```

```
Hello
Tea
Light
I
Game
Pillow
Otter
Like
Yellow
Paper
Music
Pizza
Sun
Night
```
*/

const fs = require("fs");

// Function to read files and compare
function findCommonWords(file1, file2, callback) {
    fs.readFile(file1, "utf8", function(err, data1) {
        if (err) return console.log(err);

        fs.readFile(file2, "utf8", function(err, data2) {
            if (err) return console.log(err);

            let words1 = data1.split("\n");
            let words2 = data2.split("\n");

            let common = [];

            for (let i = 0; i < words1.length; i++) {
                if (words2.includes(words1[i])) {
                    common.push(words1[i]);
                }
            }

            callback(common);
        });
    });
}

// Callback function
function showMessage(words) {
    console.log("Hidden message:");
    console.log(words.join(" "));
}

findCommonWords("file1.txt", "file2.txt", showMessage);