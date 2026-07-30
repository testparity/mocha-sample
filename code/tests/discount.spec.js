const assert = require('node:assert/strict')
const { applyDiscount } = require('../src/discount')
const { initials, normalizeName, wordCount } = require('../src/greeting')

describe('applyDiscount', () => {
  it('applies the standard discount', () => {
    const customer = normalizeName('  Ada Lovelace  ')

    assert.equal(initials(customer), 'al')
    assert.equal(wordCount(customer), 2)
    assert.equal(applyDiscount(100), 90)
  })
})
