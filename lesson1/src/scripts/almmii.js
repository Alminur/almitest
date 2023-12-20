"use strict";
const getBonus = (N, K) => {
    let bonus = N / k;
};
function getBonus(sallary) {
    if (sallary > 400000) {
        return sallary + (sallary * 0.1);
    }
    else if (sallary > 300000) {
        return sallary + (sallary * 0.15);
    }
    else {
        return sallary + (sallary * 0.2);
    }
}
console.log(getBonus(400000));
