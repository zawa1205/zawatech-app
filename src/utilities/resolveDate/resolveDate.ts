type ResolveDate = (date: string) => string

/**
 * @param {string} date 2023-09-24T03:12:43
 * @return {string} 2023/09/24
 */
export const resolveDate: ResolveDate = (date) => {
  return date.slice(0, 10).replaceAll('-', '/')
}
