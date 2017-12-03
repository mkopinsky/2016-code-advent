module.exports = {
  split(input) {
    return input.split('\n').map(line => line.split(/\s/));
  },
  getChecksum(input) {
    const rows = this.split(input);
    const diffs = rows.map(row => Math.max(...row) - Math.min(...row));
    const sum = diffs.reduce((acc, next) => acc + next)
    return sum;
  }
}