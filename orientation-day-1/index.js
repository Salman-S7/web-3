/*
    Assignment 1

    solve this 
        Give me an input string that outputs 
    a SHA - 256 hash that starts with 00000 .How will you do it ?
*/

const crypto = require('crypto');


for (let index = 0; index < 100000000; index++) {
    const hashedString = crypto.createHash("sha256").update(index.toString()).digest("hex");
    if (hashedString.startsWith("0000")) {
        console.log(index);
        console.log(hashedString);
        break;
    }
    
}
