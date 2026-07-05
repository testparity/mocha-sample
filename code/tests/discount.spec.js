const assert = require('node:assert/strict')
const { applyDiscount } = require('../src/discount')

describe('applyDiscount', () => {
  it('applies the standard discount', () => {
    assert.equal(applyDiscount(100), 90)
  })
})
