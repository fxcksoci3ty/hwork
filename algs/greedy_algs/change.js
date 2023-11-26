const getCoins = (sum, coins) => {
  const array = Array.from({ length: sum + 1 }, () => 0);
  array[coins[0]] = coins[0];

  for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
    for (let arrayIndex = sum; arrayIndex > 0; arrayIndex--) {
      if (array[arrayIndex] > 0) continue;
      if (arrayIndex === coins[coinIndex] && array[arrayIndex] === 0) array[arrayIndex] = coins[coinIndex];
      if (
        arrayIndex - coins[coinIndex] > 0 &&
        array[arrayIndex - coins[coinIndex]] !== 0 &&
        array[arrayIndex - coins[coinIndex]] !== coins[coinIndex]
      )
        array[arrayIndex] = coins[coinIndex];
    }
  }

  return array;
};

const main = () => {
  const penny = [2, 3, 7, 5, 11, 13];
  const amount = 25;
  res = getCoins(amount, penny);
  console.log(res);
};

main();
