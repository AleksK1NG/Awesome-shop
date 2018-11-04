function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    // Simulate API
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe('Mocking learning', () => {
  it('mocks reg function', () => {
    const fetchCars = jest.fn();
    fetchCars();
    expect(fetchCars).toHaveBeenCalled();
  });

  it('can create a Person ', function() {
    const me = new Person('Alexander', ['pizza', 'burgers']);
    expect(me.name).toBe('Alexander');
  });

  it('Can fetch foods', async () => {
    const me = new Person('Alexander', ['pizza', 'burgers']);
    // Mock the favfoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'pizza']);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain('pizza');
  });
});
