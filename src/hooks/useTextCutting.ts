
export const textCut = (text: string, maxLength: number) => {
  if (text.length < maxLength) return text
  return text.substring(0, maxLength) + '...'
}
