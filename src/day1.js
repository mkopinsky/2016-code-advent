module.exports = {
  getDistance(stepsStr) {
    let steps = stepsStr.split(', ');
    let result = this.walkSteps(steps);
    return Math.abs(result.north) + Math.abs(result.east);
  },

  walkSteps(steps) {

    let reducer = (state, nextStep) => {
      let turnDirection = nextStep[0];
      let distance = parseInt(nextStep.substring(1), 10);
      state.direction = this.getNextDirection(state.direction, turnDirection);
      switch (state.direction) {
        case 'N':
          state.north += distance;
          break;
        case 'S':
          state.north -= distance;
          break;
        case 'E':
          state.east += distance;
          break;
        case 'W':
          state.east -= distance;
          break;
      }
      // currentState.distance += distance;
      return state;
    }

    return steps.reduce(
      reducer,
      {
        north: 0,
        east: 0,
        direction: 'N',
        distance: 0
      }
    );
  },

  getNextDirection(currentDirection, turnDirection) {
    const directions = ['N', 'E', 'S', 'W'];
    const currentIdx = directions.indexOf(currentDirection);


    switch (turnDirection) {
      case 'R':
        return directions[(currentIdx+1) % directions.length];
      case 'L':
        return directions[currentIdx-1] || 'W';
    }
  }
}