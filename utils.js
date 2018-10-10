/**
 * Creates a new array with a single dimension
 * @param  { number } array - a list of integer
 * @returns { Object }
 */
function flatArray(list){

  return list.reduce((accumulator, value) => {
    if(Array.isArray(value)) {
      return accumulator.concat(flatArray(value))
     } else {
       if(typeof(value) === 'number') {
         return accumulator.concat(value)
        } else {
          throw 'This method only accept numbers.'
       }
     } 
  }, [])
}

module.exports = flatArray