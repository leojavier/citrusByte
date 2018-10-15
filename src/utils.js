const error = require('./errors');

/**
 * Creates a new array with a single dimension
 * @param  { number } array - a list of integer
 * @returns { Object }
 */
function flatArray(list) {
  // Check argument type before proceeding
  if (!Array.isArray(list)) {
    return error.ARGUMENT_TYPE;
  }

  return list.reduce((accumulator, value) => {
    if (Array.isArray(value)) {
      return accumulator.concat(flatArray(value));
    } else {
      return accumulator.concat(value);
    }
  }, []);
}

module.exports = flatArray;
