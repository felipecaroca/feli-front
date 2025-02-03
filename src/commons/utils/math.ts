export const sumFieldFromArray = <T,>(arr: T[], field: keyof T) => {
  return arr.reduce((total, item) => typeof item[field] === 'number' ? total += item[field] : 0 ,0)
}