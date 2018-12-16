import reverseString from '~/modules/reverseString'

export default function (text, repeat) {
  const reversedText = reverseString(text)
  return repeat ? `${text}${reversedText}` : `${text.substring(0, text.length - 1)}${reversedText}`
}
