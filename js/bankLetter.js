const periodStartLong = getPeriodStart().toLocaleDateString('en', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
const periodEndLong = getPeriodEnd().toLocaleDateString('en', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
const periodStartShort = getPeriodStart().toLocaleDateString('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})
const periodEndShort = getPeriodEnd().toLocaleDateString('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})
const yesterdayDate = getYesterdayDate().toLocaleDateString('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

document.querySelector('.bankLetter-start').innerHTML = `Beginning balance on ${periodStartLong}: $1,047,627.36` 
document.querySelector('.bankLetter-end').innerHTML = `${periodEndLong}`
document.querySelector('.bankLetter-date').innerHTML = `Date: ${yesterdayDate} GMT-4` 
document.querySelector('.bankLetter-period').innerHTML = `Statement Period: ${periodStartShort} - ${periodEndShort}`

function getPeriodStart() {
  let startDate = new Date()
  startDate.setMonth(startDate.getMonth() - 1)
  startDate.setDate(1)
  return startDate
}

function getPeriodEnd() {
  let year = new Date().getFullYear()
  let month = new Date().getMonth()
  let lastDayOfPreviousMonth = new Date(year, month, 0).getDate()

  let endDate = new Date()
  endDate.setMonth(endDate.getMonth() - 1)
  endDate.setDate(lastDayOfPreviousMonth)
  return endDate
}

function getYesterdayDate() {
  let yesterday = new Date()
  yesterday.setMonth(yesterday.getMonth())
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}
