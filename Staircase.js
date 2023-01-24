function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n; j++) {
      str = `${str}${j <= n - i ? " " : "#"}`;
    }
    console.log(str);
  }
}
