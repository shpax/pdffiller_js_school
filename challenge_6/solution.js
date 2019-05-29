
function createAnimal(name, lifespan, costPerDay) {
  const lifetimeValue = lifespan * 365 * costPerDay;

  return { name, lifespan, costPerDay, lifetimeValue };
}

function getTotalCost(animals, days) {
  return animals.reduce((sum, animal) => sum + animal.costPerDay * days, 0);
}

function getMostExpenciveAnimal(animals) {
  let animal = animals[0];

  animals.forEach(currentAnimal => {
    if (animal.lifetimeValue < currentAnimal.lifetimeValue) {
      animal = currentAnimal;
    }
  })

  return animal;
}

const Animals = [
  createAnimal('Elephant', 30, 100),
  createAnimal('Jiraffa', 10, 40),
  createAnimal('Jiraffa', 10, 40),
  createAnimal('Lama', 20, 25),
  createAnimal('Lama', 20, 25),
]


console.log(getTotalCost(Animals, 4));
console.log(getMostExpenciveAnimal(Animals));
