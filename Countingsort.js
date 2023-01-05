function countingSort(arr) {
    // Write your code here
    // console.log(arr, "i am arr")
    let inputArr = arr
    let outputArr = new Array(inputArr.length)
    // console.log(outputArr, "i am outputarr")
    let max = 0
    inputArr.map((val) => {
        if (val > max) {
            max = val
        }
    })
    // console.log(max, "i am max")
    let countArr = []
    for (let i = 0; i <= 99; i++) {
        countArr[i] = 0
    }
    // console.log(countArr, "i am countarr")

    inputArr.map((val) => {
        countArr[val] = countArr[val] + 1
    })
    console.log(countArr, 'i am countarr')
    let comulative = []
    countArr.map((val, i, subArr) => {
        if (i === 0) {
            comulative[i] = val
        } else {
            let sum = 0
            for (let j = 0; j <= i; j++) {
                sum = countArr[j] + sum
                comulative[i] = sum

            }

        }
    })
    console.log(comulative, "i am comulative")
    for(let j = inputArr.length-1; j>=0;j--){
        outputArr[comulative[inputArr[j]]] = inputArr[j]
        comulative[inputArr[j]] = comulative[inputArr[j]] - 1
    }
    console.log(outputArr , "i am output")
    return outputArr

}