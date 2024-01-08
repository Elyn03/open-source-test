import average from "../src/average";

describe ('average()', () => {
   it('should return error if the data is not a array', () => {
      const data = "foo";
      expect(average(data)).toBeNaN;
   });

   it('should return error if the data is not a array of finite number', () => {
      const data = ["foo", 1, 2];
      expect(average(data)).toBeNaN;
   });

   it('should return the average of an array of number', () => {
      const data = [1, 2, 3];
      expect(average(data)).toBe(2);
   });
})


// test('average', () => {
//    expect(average([1, 2, 3])).toBe(2);
// });