Date.prototype.daysTo = function (otherDate) {
  const timeDifference = otherDate.getTime() - this.getTime()

  const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24))

  return daysDifference
}

const d1 = new Date('2024-01-01')
const d2 = new Date('2024-02-01')

const daysBetween = d1.daysTo(d2)
console.log(
  `Між ${d1.toDateString()} та ${d2.toDateString()} пройшло ${daysBetween} днів.`
)
