
describe('sample test 101', () => {
  it('works as expected', () => {
    const age = 30;
    expect(age).toEqual(30);
  });

  it('should age grather than 20', () => {
    const age = 30;
    expect(age).toBeGreaterThan(20);
  });
})