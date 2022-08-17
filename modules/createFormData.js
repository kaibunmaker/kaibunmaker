// @ts-check

import isPalindrome from './isPalindrome'
import parsePalindrome from './parsePalindrome'

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
