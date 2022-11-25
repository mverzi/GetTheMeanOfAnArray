/**
 * This function returns the mean of an array of integers
 * @param {array} marks 
 * @returns Mean of marks rounded down
 */
function getAverage(marks){
    return Math.floor(marks.reduce((a,b) => a + b) / marks.length)
  }