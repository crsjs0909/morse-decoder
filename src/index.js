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
    return new MorseInputStreamReader(expr).readAll();
}

class MorseInputStreamReader {
    constructor(src) {
        this.src = src;
        this.ptr = 0;
        this.malformedChar = "?";
    }

    hasNext() {
        return this.ptr < this.src.length;
    }

    next() {
        if (this.ptr+10 > this.src.length) {
            return this.malformedChar;
        }
        let encChar = this.src.substr(this.ptr, 10);
        this.ptr += 10;

        if (encChar === "**********") {
            return " ";
        }
        let morseSB = "";
        for (let i = 0; i < 10; i += 2) {
            let unit = encChar.substr(i, 2);
            if (unit === "10") {
                morseSB += ".";
            }
            if (unit === "11") {
                morseSB += "-";
            }
            if (unit === "00") {
                //nop
            }
        }

        let char = MORSE_TABLE[morseSB];
        return char===undefined?this.malformedChar:char;
    }

    readAll(){
        let buf = "";
        while (this.hasNext()){
            buf+=this.next();
        }
        return buf;
    }

}

module.exports = {
    decode
}