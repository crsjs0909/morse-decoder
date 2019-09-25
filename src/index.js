const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result="";
    let codeTable=[];
    for (let k of Object.getOwnPropertyNames(MORSE_TABLE)) {
        codeTable[k.replace(/\./g, "10").replace(/-/g, "11").padStart(10, "0")]=MORSE_TABLE[k];
    }
    codeTable["**********"]=" ";
    for (let i = 0; i < expr.length; i+=10) {
        let encChar=expr.substr(i, 10);
        let decChar=codeTable[encChar];
        result+=decChar===undefined?"?":decChar;
    }
    return result;
}

module.exports = {
    decode
}