import { formatAmount } from '@/common/format-amount'
import { describe, test, expect } from 'vitest'

describe('formatAmount', () => {
  test('should format integer amount', () => {
    expect(formatAmount(100)).toBe('$100.00')
  })

  test('should format decimal amount', () => {
    expect(formatAmount(100.01)).toBe('$100.01')
  })

  test('should add separator', () => {
    expect(formatAmount(10000)).toBe('$10,000.00')
  })
})