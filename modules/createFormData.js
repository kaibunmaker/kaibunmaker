// @ts-check

import isPalindrome from './isPalindrome'
import parsePalindrome from './parsePalindrome'

/**
 * @param {unknown} value
 * @returns {{ text: string, repeat: boolean }}
 */
export default function (value) {
  if (typeof value !== 'string' || !isPalindrome(value)) {
    return {
      text: '',
      repeat: false
    }
  }

  return parsePalindrome(value)
}
