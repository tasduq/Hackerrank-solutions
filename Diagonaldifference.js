function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0
    let sum2 = 0

    arr.map((val, i) => {

        sum1 = sum1 + val[i]

    })

    arr.map((val, i) => {
        //   if(i===0) sum2 = sum2+ val[i+2]
        //   if(i===1) sum2 = sum2+ val[i+1]
        //   if(i===2) sum2 = sum2+ val[i]

        //  console.log(val,  , "i am val")

        sum2 = sum2 + val[val.length - (i + 1)]
        console.log(val, sum2, "i am sum2")
    })
    let total = sum1 - sum2
    //   console.log(total , "i am total")
    //   console.log(Math.abs(total))
    return Math.abs(total)

}

diagonalDifference([[1,2,3] , [1,2,43] , [1,3,4]])