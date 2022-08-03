const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {

let strNew = '';
let arr = []; arrLetter=[]; arrNew = []; arrRez = [];
let codeA = ['10','11'];
let codeB = ['.','-'];
var ref = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':' '
  };

    for (i=0; i<str.length;i=i+10){
    arr.push(str.substr(i,10));
    }


    for (i=0; i<arr[0].length;i=i+2){
    arrLetter.push(arr[0].substr(i,2));
    }

    for (i=0; i<arr.length;i++){
    arr[i] = arr[i].substr(arr[i].indexOf('1'));
    }

    for (i=0; i<arr.length;i++){
        for (j=0; j<arr[i].length;j=j+2){
            if (arr[i].substr(j,2) == '10') {
                strNew += '.';
            } else if (arr[i].substr(j,2) == '11') {
                    strNew += '-';
                    }   else  strNew += ' ';
        }
    arrNew.push(strNew);
    strNew='';
    }

    arrRez = arrNew.map(item => ref[item]);
    return arrRez.join('');
}

module.exports = {
    decode
}