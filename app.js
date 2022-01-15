const $button = document.querySelector('#button')
const $inputs = document.querySelectorAll('.input')


const questions = 24
const numberOfTested = 100
const basic = [1, 2, 7, 8, 9, 10, 12, 13, 15, 17, 21, 24]
const reverse = [3, 4, 5, 6, 11, 14, 16, 18, 19, 20, 22, 23]
let general = []
const info = {
    first: {},
    second: {},
    third: {}
}



const result = (ratio) => {
    general = []
    let counter = 0
    while (true) {

        for (let i = 1; i <= basic.length; i++) {
            let score = Math.round(Math.random() * (5 - 1) + 1);
            if (score === 1) {
                counter += 0
            } else if (score === 2) {
                counter += 25
            } else if (score === 3) {
                counter += 50
            } else if (score === 4) {
                counter += 75
            } else if (score === 5) {
                counter += 100
            }
            general[basic[i - 1]] = score
        }
        for (let i = 1; i <= reverse.length; i++) {
            let score = Math.round(Math.random() * (5 - 1) + 1);
            if (score === 1) {
                counter += 100
            } else if (score === 2) {
                counter += 75
            } else if (score === 3) {
                counter += 50
            } else if (score === 4) {
                counter += 25
            } else if (score === 5) {
                counter += 0
            }
            general[reverse[i - 1]] = score
        }
        if (ratio===25){
            if (Math.round(counter * 100 / 2400) < ratio) {general.push(Math.round(counter * 100 / 2400)); break} else {counter = 0}
        }
        if (ratio===75){
            if (Math.round(counter * 100 / 2400) > ratio) {general.push(Math.round(counter * 100 / 2400)); break} else {counter = 0}
        }
        if (ratio===50){
            if ((Math.round(counter * 100 / 2400) >= 25)&&(Math.round(counter * 100 / 2400) <= 75))
            {general.push(Math.round(counter * 100 / 2400)); break} else {counter = 0}
        }

    }
    return general
}

$button.addEventListener('click',()=>{
    const firstRatio = $inputs[0].value
    const secondRatio = $inputs[1].value
    const thirdRatio = $inputs[2].value
    console.log('get start...')
    for (let i = 0; i < Math.round(numberOfTested * firstRatio / 100); i++) {
        info.first[i] = result(75)
    }
    for (let i = 0; i < Math.round(numberOfTested * secondRatio / 100); i++) {
        info.second[i] = result(50)
    }
    for (let i = 0; i < Math.round(numberOfTested * thirdRatio / 100); i++) {
        info.third[i] = result(25)
    }
    console.log(info)
})