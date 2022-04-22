function check(str1,str2){
    let l1 = str1.length;
    let l2 = str2.length;
    let j;
    for (let i = 0; i <= l2 - l1; i++) {
        for (j = 0; j < l1; j++)
            if (str2[i + j] !== str1[j]) {
                break;
            }
        if (j === l1)
            return true;
    }

    return false;
}

