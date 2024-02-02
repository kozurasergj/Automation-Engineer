const input = [
  { amount: 5000, quantity: 5 },
  { amount: 10000, quantity: 10 },
  { amount: 2000, quantity: 8 },
]

const output = input.map(({ amount, quantity }) => ({
  amount,
  quantity,
  total: amount * quantity,
}))

output.sort((a, b) => a.total - b.total)

console.log(output)
