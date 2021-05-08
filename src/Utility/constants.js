export const coins = {
  dime: {
    multiplier: 10,
    payConversion: 0.1,
    display: "10¢",
  },
  quarter: {
    multiplier: 25,
    payConversion: 0.25,
    display: "25¢",
  },
  dollar: {
    multiplier: 100,
    payConversion: 1,
    display: "$1",
  },
};

const cashFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toCash = (pennies) => {
  return cashFormatter.format(pennies);
};
