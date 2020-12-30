import { instructions } from './instruction-input.mjs';

let xAxis = 0;
let yAxis = 0;
let direction = 90;

const execute = (instruction) => {
  const action = instruction.substring(0, 1);
  const value = parseInt(instruction.substring(1, instruction.length));

  switch (action) {
    case 'N':
      moveNorth(value);
      break;
    case 'S':
      moveSouth(value);
      break;
    case 'E':
      moveEast(value);
      break;
    case 'W':
      moveWest(value);
      break;
    case 'L':
      turnLeft(value);
      break;
    case 'R':
      turnRight(value);
      break;
    case 'F':
      moveForward(value);
      break;
    default:
      throw 'UNKNOWN ACTION ERROR: Action has to be one of: N, S, E, W, L, R, F';
  }
}

const moveNorth = (value) => {
  yAxis = yAxis + value;
}

const moveSouth = (value) => {
  yAxis = yAxis - value;
}

const moveEast = (value) => {
  xAxis = xAxis + value;
}

const moveWest = (value) => {
  xAxis = xAxis - value;
}

const turnRight = (degrees) => {
  direction = (direction + degrees) % 360;
}

const turnLeft = (degrees) => {
  direction = (direction - degrees);
  while (direction < 0) {
    direction = 360 - Math.abs(direction);
  }
}

const moveForward = (value) => {
  switch (direction) {
    case 0:
      moveNorth(value);
      break;
    case 90:
      moveEast(value);
      break;
    case 180:
      moveSouth(value);
      break;
    case 270:
      moveWest(value);
      break;
    default:
      throw 'INVALID DIRECTION ERROR: NOT FACING NORTH, EAST, SOUT OR WEST'
  }
}

const getManhattanDistance = () => {
  return Math.abs(xAxis) + Math.abs(yAxis);
}

/**
 * EXECUTE ALL INSTRUCTIONS & CALCULATE MANHATTAN DISTANCE
 */

console.log('starting instruction execution...')

instructions.forEach(instruction => {
  execute(instruction);
});

console.log('done.')
console.log('calculating Manhattan Distance...');

const manhattanDistance = getManhattanDistance();

console.log('Manhattan Distance = ', manhattanDistance);
