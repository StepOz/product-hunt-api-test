let mainOptinsDay = [
  {
    label: 'Today',
    value: 0
  },
  {
    label: 'Yesterday',
    value: 1
  }
]
let otherOptionsDay = []
for (let i = 2; i <= 30; i++) {
  otherOptionsDay.push({
    label: `${i} days ago`,
    value: i
  })
}
let exportSelectDay = mainOptinsDay.concat(otherOptionsDay)

export default {
  selectDay: exportSelectDay
}
