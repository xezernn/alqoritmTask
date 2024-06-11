var isValid = function (str) {
    let aciq = ""
    let bagli = ""
    let yeniSoz = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes("(") || str[i].includes("[") || str[i].includes("{")) {
            aciq += str[i]
        } else {
            bagli += str[i]
        }
    }
    yeniSoz += aciq
    yeniSoz += bagli
    let flag = true
    console.log(yeniSoz);
    for (let i = 0, b = str.length - 1; i < str.length / 2; i++, b--) {
        console.log("i:",yeniSoz[i]);
        console.log("b",yeniSoz[b]);
        if(yeniSoz[i] == yeniSoz[b]) {
        }
        else flag = false
    }

    // return flag
};

isValid("()[]") 