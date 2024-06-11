var longestCommonPrefix = function (arr) {
    if (arr.length === 0) return "";
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower","flower","flower"]));



// menim yazdigim budur ve cox efsuslar olsun ki bunu duzlete bilmedim gerek sabhda bir gunde hacansa vahim olanda baxib duzelis edem 

// var longestCommonPrefix = function (arr) {
//     let prefix = ""
//     if (arr.length === 1) return arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== "") {
//             const yoxla = arr[0][i]
//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[j][i] !== yoxla) return prefix
//             }
//             prefix += yoxla
//         } else return prefix
//     }
//     return prefix
// };
// console.log(longestCommonPrefix(["",""]));

