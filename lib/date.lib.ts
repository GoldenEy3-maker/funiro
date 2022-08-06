export const formatDate = (date: string) => {
  const currentDate = new Date(date)

  const stringDate = currentDate.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).replace(',', '')

  const [month, day, year] = stringDate.split(' ')

  return `${ day } ${ month } ${ year }`
}