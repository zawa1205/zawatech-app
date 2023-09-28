export const decodeHtmlEscapes = (input: string) => {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x60/g, '`')
    .replace(/&hellip;/g, '…')
}
