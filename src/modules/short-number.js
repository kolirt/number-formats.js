module.exports = function (number, names = ['', 'K', 'M', 'B', 'T']) {
    if (!Array.isArray(names) || names.length !== 5) {
        names = ['', 'K', 'M', 'B', 'T']
    }
    let negative = false
    if (number < 0) {
        negative = true
        number = number * -1
    }
    let T = 1000000000000
    let B = 1000000000
    let M = 1000000
    let K = 1000

    if (T <= number) {
        let result = prepareCompactNumber(number, T)
        return (negative ? '-' : '') + String(result) + (typeof names[4] === 'string' ? names[4] : 'T')
    } else if (B <= number && number <= T - 1) {
        let result = prepareCompactNumber(number, B)
        return (negative ? '-' : '') + String(result) + (typeof names[3] === 'string' ? names[3] : 'B')
    } else if (M <= number && number <= B - 1) {
        let result = prepareCompactNumber(number, M)
        return (negative ? '-' : '') + String(result) + (typeof names[2] === 'string' ? names[2] : 'M')
    } else if (K <= number && number <= M - 1) {
        let result = prepareCompactNumber(number, K)
        return (negative ? '-' : '') + String(result) + (typeof names[1] === 'string' ? names[1] : 'K')
    }

    return (negative ? '-' : '') + String(number) + (typeof names[0] === 'string' ? names[0] : 'T')
}

function prepareCompactNumber(value, type) {
    let result = Number(value / type)

    let temp = result - parseInt(result)
    if (temp != 0) {
        let match = String(temp).match(/\.(\d)/)
        if (match && match[1] != 0) {
            return parseInt(result) + '.' + match[1]
        }
        return parseInt(result)
    } else {
        return parseInt(result)
    }
}
