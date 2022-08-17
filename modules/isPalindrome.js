// @ts-check

import reverseString from './reverseString'

/**
 * @param {string} value
 * @returns {boolean}
 */
export default function (value) {
  if (value === '') {
    return false
  }

  const { length } = value
  const leftEnd = length / 2
  const left = value.substring(0, leftEnd)
  const rightStart = length % 2 === 0 ? length / 2 : length / 2 + 1
  const right = value.substring(rightStart)
  const reversedRight = reverseString(right)
  return left === reversedRight
}
