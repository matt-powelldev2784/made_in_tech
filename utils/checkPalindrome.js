export const checkPalindrome = (phrase) => {
  const reverse = phrase.split('').reverse().join('')
  return phrase === reverse
}
