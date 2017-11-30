const day1 = require('../src/day1');
const assert = require("assert");

describe("day1", () => {
  describe('getDistance', () => {
    it("can handle a single direction", () => {
      let distance = day1.getDistance('R2');
      assert.equal(distance, 2);
    })
    it("can handle two steps", () => {
      let distance = day1.getDistance('R2, L3');
      assert.equal(distance, 5);
    })
    it("can handle steps in different directions", () => {
      let distance = day1.getDistance('R2, R2, R2');
      assert.equal(distance, 2);
    })    
    it.skip("can handle steps in opposing directions", () => {
      let distance = day1.getDistance('R5, L5, R5, R3');
      assert.equal(distance, 12);
    })    
  })

  describe("getNextDirection", () => {
    it("goes from N->E", () => {
      let next = day1.getNextDirection('N', 'R');
      assert.equal(next, 'E');
    })
    it("goes from E->N", () => {
      let next = day1.getNextDirection('E', 'L');
      assert.equal(next, 'N');
    })
    it("wraps around - W->N", () => {
      let next = day1.getNextDirection('W', 'R');
      assert.equal(next, 'N');
    })
    it("wraps around the other way - N->W", () => {
      let next = day1.getNextDirection('N', 'L');
      assert.equal(next, 'W');
    })
  })
})
