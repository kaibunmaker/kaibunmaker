// @ts-check

// @ts-ignore
import reverseString from '~/modules/reverseString'

/**
 * @param {string} text
 * @param {boolean} repeat
 * @returns {string}
 */
export default function (text, repeat) {
  const reversedText = reverseString(text)
  return repeat ? `${text}${reversedText}` : `${text.substring(0, text.length - 1)}${reversedText}`
}
