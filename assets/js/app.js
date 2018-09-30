//task 1
let currentDigit = 1

while (currentDigit <= 40) {
currentDigit++
let remainder = (currentDigit % 4)
if (remainder == 0 || remainder == -0)
console.log(currentDigit)
}

//task 2
let f0 = 0;
let f1 = 1;
let fn = 0;

while (f0 < 100) {
console.log(f1)
fn = f0+f1;
f0 = f1
f1 = fn
}

//task 3
let som = [2, 4, 8, 9, 12, 13]; //Array with given digits

let result = 0;

for(let i = 0; i < som.length; i++) {
    result = result+som[i]
    console.log(result)
}