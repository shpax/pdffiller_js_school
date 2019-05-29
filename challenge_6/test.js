const expect = chai.expect

describe('Animals Zoo', () => {
  it('createAnimal should create valid animal', function(){
    const animal = createAnimal('lama', 10, 45);
    
    expect(animal.name).to.be.equal('lama');
    expect(animal.lifespan).to.be.equal(10);
    expect(animal.costPerDay).to.be.equal(45);
    expect(animal.lifetimeCost).to.be.equal(45 * 365 * 10);
  });

  it('getTotalCost should calculate valid total cost', () => {
    const zoo = [
      createAnimal('a1', 30, 100),
      createAnimal('a2', 10, 40),
      createAnimal('a3', 10, 25),
    ]
    const days = 4;

    const totalCost = zoo.reduce((sum, animal) => sum + animal.costPerDay * days, 0);

    expect(getTotalCost(zoo, days)).to.be.equal(totalCost);
  })


  it('getMostExpensiveAnimal should return valid znimal', () => {
    const zoo = [
      createAnimal('a1', 30, 100),
      createAnimal('a2', 10, 40),
      createAnimal('a3', 10, 25),
    ];

    const mostExpensiveAnimal = getMostExpensiveAnimal(zoo);

    expect(mostExpensiveAnimal).to.be.an.instanceof(Object);
    expect(mostExpensiveAnimal.name).to.be.equal('a1');
  })
});
