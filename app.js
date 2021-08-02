/*
let mark = 78
let markHeight = 1.69
let john = 92 
let johnHeight = 1.95
let mark = 95
let markHeight = 1.88
let john = 85 
let johnHeight = 1.76

let mark_BMI = mark / markHeight ** 2
let john_BMI = john / (johnHeight * johnHeight)

let markHeightBMI = mark_BMI > john_BMI

console.log(mark_BMI, john_BMI, markHeightBMI)
*/

// const age = 15;
// if (age >= 18) {
//     console.log('shamim can driving license')
// } else {
//     const leftyear = 18 - age
//     console.log(`Shamim is too young. wait another ${leftyear} year`)
// }

for(i = 0 ; i < 4 ; i++){
    setTimeout(() => {
        console.log(i)
    },200)
  }