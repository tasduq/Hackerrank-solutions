function miniMaxSum(arr) {
  // Write your code here
  let min,
    max = 0;

  arr.map((val, i) => {
    let newArr = arr.filter((filVal, filI) => {
      if (filI !== i) {
        return filVal;
      }
    });
    let yoo = 0;
    // console.log(newArr , "i am newArr")
    newArr.map((val) => (yoo = yoo + val));
    // console.log(yoo , min,"i am yoo")
    if (min === undefined) {
      min = yoo;
    }
    if (yoo < min && yoo !== undefined) {
      min = yoo;
    }
    if (yoo > max) {
      max = yoo;
    }
  });
  console.log(min, max);
}
