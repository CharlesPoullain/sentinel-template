export default class FormatNumber {
    static amountFormat(value: number) {
        if (value >= 1e9) {
            return (value / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'
        } else if (value >= 1e6) {
            return (value / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
        } else if (value >= 1e3) {
            return (value / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
        } else {
            return value.toString()
        }
    }
}