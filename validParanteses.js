// var isValid = function (str) {
//     const obj = { "(": ")", "{": "}", "[": "]" }
//     let arr = Object.keys(obj)
//     let yenisoz = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str.length %2 == 0 && (arr.includes(str[i]) && str.includes(obj[str[i]]))) {
//             yenisoz += str[i];
//             yenisoz += obj[str[i]];
//             console.log(str);
//         } 
//     }
//     return yenisoz != ""? yenisoz : false

// }

// console.log(isValid("([()(((]"));


var isValid = function (s) {
    const obj = { "(": ")", "{": "}", "[": "]" }
    let aciq = "", bagli = "", yeniSoz = "", str = s
    if (str.length % 2) return false

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ("(") || str[i] == ("[") || str[i] == ("{")) {
            aciq += str[i]
            str = str.slice(0, i) + str.slice(i + 1)
            console.log(str[i]);
            str = str.slice(0, str.indexOf(obj[str[i]])) + str.slice( str.indexOf(obj[str[i]]) + 1)
            console.log(str.indexOf(obj[str[i]]));
        } else {
            bagli += str[i]
        }
    }
    yeniSoz += aciq + bagli
    console.log(yeniSoz);
} 

isValid("([)]")