import { checkPalindromeWithStartAndEndNumber } from './checkPalindroneWithStartAndendNumber'

describe('checkPalindrome with start and end number', () => {
  it('should return error message if letters are provided as input', () => {
    const result = checkPalindromeWithStartAndEndNumber(['a', 'b'])
    expect(result).toBe('Start and end numbers must be integers.')
  })

  it('should return error message start number is greater than end number', () => {
    const result = checkPalindromeWithStartAndEndNumber(['10', '1'])
    expect(result).toBe('Start number cannot be greater than end number.')
  })

  it('should return 4 for start number 98 and end number 126', () => {
    const result = checkPalindromeWithStartAndEndNumber(['98', '126'])
    expect(result).toBe(4)
  })

  it('should return 0 for start number 14 and end number 15', () => {
    const result = checkPalindromeWithStartAndEndNumber(['14', '15'])
    expect(result).toBe(0)
  })
})
