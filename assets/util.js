module.exports = {
    total: (num1, num2) => {
        return num1 + num2;
    },
    extend: (obj) => {
        let res = {}
        for (key in obj) {
            res[key] = obj[key]
        }
        return res
    },
    trun: (str) => {
        return str.split('').reverse().join('')
    }
}