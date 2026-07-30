const assert = require('node:assert/strict')
const { farewell, greeting } = require('../src/greeting')

describe('greeting', () => {
  it('covers the core greeting operations', () => {
    assert.equal(greeting('Ada'), 'Hello, Ada')
    assert.equal(farewell('Ada'), 'Goodbye, Ada')
  })
})
