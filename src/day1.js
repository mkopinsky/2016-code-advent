module.exports = {
  getDistanceAfterWalk(stepsStr) {
    let steps = stepsStr.split(', ');
    let result = this.walkSteps(steps);
    return this.getDistance(result);
  },

  getDistanceOfRepeatedLocation(stepsStr) {
    let steps = stepsStr.split(', ');
    let result = this.walkSteps(steps);
    let repeatedLocation = this.getRepeatedLocation(result.history);
    return this.getDistance(repeatedLocation);
  },

  getDistance(result) {
    return Math.abs(result.north) + Math.abs(result.east);
  },

  getRepeatedLocation(history) {
    let foo = [];
    for (let i = 0; i< history.length; i++) {
      let json = JSON.stringify(history[i]);
      if (foo.indexOf(json) > -1)
      {
        return history[i];
      }
      foo.push(json);
    }
    return {north:0, east: 0}; // just as a fallback
  },

  walkSteps(steps) {

    let reducer = (state, nextStep) => {
      let turnDirection = nextStep[0];
      let distance = parseInt(nextStep.substring(1), 10);
      state.direction = this.getNextDirection(state.direction, turnDirection);
      for (var i = 0; i < distance; i++) {
        switch (state.direction) {
          case 'N':
            state.north++;
            break;
          case 'S':
            state.north--;
            break;
          case 'E':
            state.east++;
            break;
          case 'W':
            state.east--;
            break;
        }

        state.history.push({east: state.east, north: state.north});
      }

      return state;
    }

    return steps.reduce(
      reducer,
      {
        north: 0,
        east: 0,
        direction: 'N',
        distance: 0,
        history: []
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