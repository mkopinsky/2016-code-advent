module.exports = {
  split(input) {
    return input
      .split('\n')
      .map(Function.prototype.call, String.prototype.trim)
      .map(line => line.split(/\s/));
  },
  getChecksum(input, rowValueMethod) {
    const rows = this.split(input);
    const rowValues = rows.map(rowValueMethod || this.minMaxDiff);
    const sum = rowValues.reduce((acc, next) => acc + next)
    return sum;
  },
  minMaxDiff(row) {
    return Math.max(...row) - Math.min(...row);
  },
  divisibleNumbersDivision(row) {
    for (let i = 0; i < row.length; i++) {
      for (let j = 0; j < row.length; j++) {
        let quotient = row[j]/row[i];
        if (quotient == parseInt(quotient, 10) && quotient != 1)
        {
          return quotient;
        }
      }
    }
  }
}