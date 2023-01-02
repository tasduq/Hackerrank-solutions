function flippingBits(n) {
    // Write your code here
    let zeros = "00000000000000000000000000000000" 
   let binary = (n >>> 0).toString(2);
   console.log(binary , "i am binary")
   let z = 32-binary.length;
   console.log(z , "i am z")
   let ans = [];
   
   let remBits = zeros.slice(0, z);
   let uns = remBits.concat(binary);
   
   let arr = uns.split("");
   
    arr.forEach((ele)=>{
       ans.push(Math.pow(0,ele));
    });
   
   return parseInt(ans.join(""), 2);

}

