// @ts-check

// @ts-ignore
import isPalindrome from '~/modules/isPalindrome'
// @ts-ignore
import parsePalindrome from '~/modules/parsePalindrome'

/**
 * @param {string} value
 * @returns {{ text: string, repeat: boolean }}
 */
export default function (value) {
  if (!isPalindrome(value)) {
    return {
      text: '',
      repeat: false
    }
  }

  return parsePalindrome(value)
}
