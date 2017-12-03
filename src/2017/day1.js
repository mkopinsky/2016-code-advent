module.exports = {
  doSumForNext(code) {
    return this.doSum(code, 1);
  },
  doSumForHalfway(code) {
    return this.doSum(code, Math.floor(code.length / 2));
  },
  doSum(code, steps) {
    const sequence = code.split('').map(Number);
    let sum = 0;
    sequence.forEach((number, idx) => {
      let nextIdx = (idx + steps) % sequence.length
      if (sequence[nextIdx] === number)
      {
        sum += number;
      }
    })
    return sum;
  }
}