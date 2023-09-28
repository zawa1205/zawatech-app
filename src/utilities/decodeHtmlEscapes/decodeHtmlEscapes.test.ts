import { decodeHtmlEscapes } from '.'

describe('decodeHtmlEscapes utility', () => {
  test('default', () => {
    const input = '&amp;&lt;&gt;&quot;&#x27;&#x60&hellip;'

    expect(decodeHtmlEscapes(input)).toBe(`&<>"'` + '`' + '…')
  })
})
