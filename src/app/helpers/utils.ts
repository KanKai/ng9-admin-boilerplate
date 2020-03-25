export const IsNullOrUndefinedOrEmpty = (value: any): boolean => {
  return value === null || value === undefined || value.length === 0
}

export const IsNullOrUndefined = (value: any): boolean => {
  return value === null || value === undefined
}
