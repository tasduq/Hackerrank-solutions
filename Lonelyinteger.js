function lonelyinteger(a) {
    // Write your code here
    let uniqueVal = 0
    let count = 0
    a.map((val) => {
        a.map((subVal) => {
            if(val === subVal){
                count = count+1
            }
        })
        // console.log(count , "i am count")
        if(count === 1){
            uniqueVal = val
        }
        count = 0
    })
    // console.log(uniqueVal , "i am unique")
    return uniqueVal

}

let yoo = [1,2,3,4,3,2,1]

lonelyinteger(yoo)