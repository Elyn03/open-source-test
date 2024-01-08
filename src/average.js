/**
 * Calculates the average of a series of numbers
 * 
 * @param {number[]} date An array of numbers
 * @returns {number} The average of the numbers in the array
 */

export default function average (array) {
   if (!Array.isArray(array) || !array.every(Number.isFinite)) {
      return "error"
   }
   let sum  = 0
   for (let i = 0; i < array.length; i++) {
      sum += array[i]
   }
   let result = sum / array.length
   return result

   // const sum = array.reduce((a, b) => a + b, 0);
   // return sum / array.length
}