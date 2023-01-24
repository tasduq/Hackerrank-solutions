function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  let applesDistance = apples.map((apple) => a + apple);
  let orangesDistance = oranges.map((orange) => b + orange);

  let countApples = applesDistance.filter((distance) => {
    if (distance >= s && distance <= t) {
      return distance;
    }
  });

  let countOranges = orangesDistance.filter((distance) => {
    if (distance >= s && distance <= t) {
      return distance;
    }
  });
  console.log(countApples.length);
  console.log(countOranges.length);
}
