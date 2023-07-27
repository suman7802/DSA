function mostRep(num) {
  const freq = {};
  num.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1;
  });

  let hFreq = 0;
  let mostRepNum;

  for (const num in freq) {
    if (freq[num] > hFreq) {
      hFreq = freq[num];
      mostRepNum = num;
    }
  }
  return mostRepNum;
}

const num = [1, 5, 6, 3, 7, 5, 5, 5, 5, 5, 5, 54, 5, 8, 1, 5];
const res = mostRep(num);
console.log(`most repetend number is ${res}`);
