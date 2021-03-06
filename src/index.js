module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero'
    }

    const fromOneToNineteen = [
        'one', 'two', 'three',
        'four', 'five', 'six',
        'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen',
        'nineteen'
    ]

    if (number > 0 && number <= 19) {
        return fromOneToNineteen[number - 1]
    }

    const fromTwentyToNinety = [
        'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ]

    if (number > 19 && number < 100) {
        const numToStr = number.toString().split('')
        if (numToStr[1] == 0) {
            return fromTwentyToNinety[numToStr[0] - 2]
        } else {
            console.log(numToStr)
            return fromTwentyToNinety[numToStr[0] - 2] + ' ' + fromOneToNineteen[numToStr[1] - 1]
        }
    }

    if (number > 90 && number <= 1000) {
        const numToStr = number.toString().split('')
        if (numToStr[1] == 0 && numToStr[2] == 0) {
            return fromOneToNineteen[numToStr[0] - 1] + ' hundred'
        }
        if (numToStr[1] + numToStr[2] <= 19) {
            return fromOneToNineteen[numToStr[0] - 1] + ' hundred' + ' ' + fromOneToNineteen[numToStr[1] + numToStr[2] - 1]
        }
        if (numToStr[2] == 0) {
            return fromOneToNineteen[numToStr[0] - 1] + ' hundred' + ' ' + fromTwentyToNinety[numToStr[1] - 2]
        }
        if (numToStr[1] + numToStr[2] > 19) {
            return fromOneToNineteen[numToStr[0] - 1] + ' hundred' + ' ' + fromTwentyToNinety[numToStr[1] - 2] + ' ' + fromOneToNineteen[numToStr[2] - 1]
        }
    }
}







