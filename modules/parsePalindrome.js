// @ts-check

/**
 * @param {string} palindrome
 * @returns {{ text: string, repeat: boolean }}
 */
export default function (palindrome) {
  const { length } = palindrome
  const even = length % 2 === 0
  const end = even ? length / 2 : length / 2 + 1
  return {
    text: palindrome.substring(0, end),
    repeat: even
  }
}
