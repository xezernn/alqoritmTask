

var romanToInt = function (s) {
    let reqem = 0
    let obj = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }


    for (let i = 0; i < s.length; i++) {
        const birinci = obj[s[i]]
        const ikinci = obj[s[i + 1]]
        if (ikinci > birinci) {
            reqem += ikinci - birinci
            i++
        } else reqem += birinci
        // if ((s[i] == 'I' && (s[i + 1] == "V" || s[i + 1] == "X")) || (s[i] == "X" && (s[i + 1] == 'L' || s[i + 1] == 'C')) || (s[i] == "C" && (s[i + 1] == 'D' || s[i + 1] == 'M'))) reqem -= 2 * obj[s[i]]
    }
    return (reqem);
};



console.log(romanToInt("MCMXCIV"));