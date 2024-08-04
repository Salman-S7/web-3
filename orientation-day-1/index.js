/*
    Assignment 1

    solve this 
        Give me an input string that outputs 
    a SHA - 256 hash that starts with 00000 .How will you do it ?
*/

const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    let input = 888485;
    while (true) {
        let inputString = input.toString();
        const hashedString = crypto.createHash('sha256').update(inputString).digest('hex');
        if (hashedString.startsWith(prefix)) {
            return { input: inputString, hash: hashedString };
        }
        input++;
    }
}

console.log(findHashWithPrefix("0000").hash, findHashWithPrefix("0000").input)
