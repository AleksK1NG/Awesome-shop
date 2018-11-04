import formatMoney from '../lib/formatMoney';

describe('formatMoney Funstion', () => {
  it('should work to conert', function() {
    expect(formatMoney(1000)).toEqual('$10');
  });

  it('leaves cents off for whole dollars', () => {
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });
});
