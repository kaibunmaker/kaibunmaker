export default function (text, repeat) {
  const reversedText = text.split('').reverse().join('')
  return repeat ? `${text}${reversedText}` : `${text.substring(0, text.length - 1)}${reversedText}`
}
