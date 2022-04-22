enum Cheese {
  cheddar = "cheddar",
  goat = "goats cheese",
  blueMould = "blue Cheese",
}

const serveCheese = (cheeseType: Cheese, servings: number): void => {
  console.log(`You want ${servings} servings of ${cheeseType}`);
};

serveCheese(Cheese.cheddar, 3);
