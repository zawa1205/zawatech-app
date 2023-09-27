import { resolveDate } from '.'

describe('resolveDate utility', () => {
  test('default', () => {
    const input = '2023-09-24T03:12:43'
    expect(resolveDate(input)).toBe('2023/09/24')
  })
})
