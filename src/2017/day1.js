module.exports = {
  doSum(code) {
    const sequence = code.split('').map(Number);
    let sum = 0;
    sequence.forEach((number, idx) => {
      let nextIdx = (idx === sequence.length - 1) ? 0 : idx +1;
      if (sequence[nextIdx] === number)
      {
        sum += number;
      }
    })
    return sum;
  }
}