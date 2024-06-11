var isPalindrome = function (x) {
    let eded = `${x}`
    let bas = ""
    let son = ""
    for (let i = 0; i < eded.length / 2; i++) {
        bas += eded[i]
        son += eded[eded.length - 1 - i]
    }
    if (bas == son) return true;
    else return false

};

isPalindrome(12121)



