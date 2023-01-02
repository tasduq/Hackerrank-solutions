function matchingStrings(strings, queries) {
    // Write your code here
    let count = []
    
    queries.map((query , i) => {
        let occure = 0
        strings.map((string) => {
            if(string ===  query){
                occure = occure+1
            }
        })
        count[i] = occure
    })
    // console.log(count , "i am count")
    return count

}

matchingStrings(['ab' , 'abc' , 'abc' , 'cb'] , ['ab' , 'abc','cb'])