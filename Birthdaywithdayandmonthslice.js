function birthday(s, d, m) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    const segment = s.slice(i, i + m);
    const segmentSum = segment.reduce((acc, current) => {
      return acc + current;
    });

    if (segmentSum === d) {
      counter++;
    }
  }

  return counter;
}
