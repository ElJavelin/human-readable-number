module.exports = function toReadable (number) {
    const simpleNumber = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
      };
    const firstDecadeOfComposNumbe = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      };   
    const hundredNames = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
      };

    if (number >= 0 && number <= 9)
        return simpleNumber[number]
    else if (number >= 10 && number <= 99) {
        if (number >= 10 && number <= 19)
            return firstDecadeOfComposNumbe[number]
        else {
            if (number % 10 === 0)
                return hundredNames[parseInt(number.toString()[0])]
            else 
                return `${hundredNames[parseInt(number.toString()[0])]} ${simpleNumber[parseInt(number.toString()[1])]}`
        }
    }
    else if (number >= 100 && number <= 999) {
        if (number % 100 === 0)
            return `${simpleNumber[parseInt(number.toString()[0])]} hundred`
        else 
            return `${simpleNumber[parseInt(number.toString()[0])]} hundred ${toReadable(parseInt(number.toString().substring(1)))}`
    }
}
