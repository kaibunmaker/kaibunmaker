import Val from '@js-commons/val'
import isPalindrome from '~/modules/isPalindrome'
import parsePalindrome from '~/modules/parsePalindrome'

export default function (value) {
  return Val.of(value)
    .filter(value => isPalindrome(value))
    .map(palindrome => parsePalindrome(palindrome))
    .or({
      text: '',
      repeat: false
    })
}
