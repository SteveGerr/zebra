export const timeConverter = (UNIXtimestamp: number) => {
  const a = new Date(UNIXtimestamp * 1000)
  const months = ['January', 'February', 'Marth', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const year = a.getFullYear()
  const month = months[a.getMonth()]
  const date = a.getDate()
  const time = {
    day: date,
    month: month,
    year: year
  }
  return time
}
