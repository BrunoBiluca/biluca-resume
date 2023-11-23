export function isNullOrEmpty(...strList) {
  for (const str of strList) {
    if (str === undefined || str === null || str === "")
      return true
  }
  return false
}