export const totalPositiveAmount = (state, { amount }) => amount.filter(amount => amount > 0);
export const totalNegativeAmount = (state, { amount }) => amount.filter(amount => amount < 0);
export const amount = ({ transactions }) => transactions.map(transaction => transaction.amount);
export const income = (state, { totalPositiveAmount }) => totalPositiveAmount.reduce((total, amount) => (total += amount), 0).toFixed(2);
export const expenses = (state, { totalNegativeAmount }) => totalNegativeAmount.reduce((total, amount) => (total += amount), 0).toFixed(2);
export const balance = (state, { income, expenses }) => {
    const totalBalance = parseFloat(income) + parseFloat(expenses);

    return totalBalance.toFixed(2);
};
