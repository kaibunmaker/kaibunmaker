import Val from '@js-commons/val'
import isString from '~/modules/isString'
import reverseString from '~/modules/reverseString'

export default function (value) {
  return Val.of(value)
    .filter(value => isString(value))
    .filter(text => text !== '')
    .map(text => isPalindrome(text))
    .or(false)
}

function isPalindrome (text) {
  const length = text.length
  const leftEnd = length / 2
  const left = text.substring(0, leftEnd)
  const even = length % 2 === 0
  const rightBegin = even ? length / 2 : length / 2 + 1
  const right = text.substring(rightBegin)
  const reversedRight = reverseString(right)
  return left === reversedRight
}
