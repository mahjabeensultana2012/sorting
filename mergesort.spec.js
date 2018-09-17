describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
  });
});


describe("split", function() {
  it("should determine [4,1,3] is sorted as [1,3,4]", function() {
    expect(split([4,1,3])).toEqual(new Array(1,3,4));
  });
  it("should determine [9,23,576,1,5,8,4,1,3] is sorted as [1,1,3,4,5,8,9,23,576]", function() {
    expect(split(9,23,576,1,5,8,4,1,3)).toEqual(new Array(1,1,3,4,5,8,9,23,576));
  });
});
