module.exports = function toReadable (number) {
    const readable = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }

    if (number <= 20 && number !== 0) {
        return readable[number];
    }

    if (number === 0) {
        return 'zero';
    }

    number = number.toString();

    if (number.length === 2) {
        return (readable[number[0] + 0] + ' ' + readable[number[1]]).trim();
    }

    if (number.length === 3) {
        const start = readable[number[0]] + ' ' + readable[100] + ' ';
        if (number[1] === '1') {
            return start + readable[number[1] + number[2]];
        } else if (number [1] === '0') {
            return (start + readable[number[2]]).trim();
        }
        return (start + readable[number[1] + 0] + ' ' + readable[(number[2])]).trim();
    }
}
