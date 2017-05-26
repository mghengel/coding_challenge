const assert = require('chai').assert;
const application = require('../app.js');

describe('Application', () => {

  it('returns desired result', () => {
    assert.deepEqual(application(2523.04), 'Two thousand five hundred twenty-three and 04/100')
    assert.deepEqual(application(2523), 'Two thousand five hundred twenty-three')
    assert.deepEqual(application(.04), '04/100')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(2523), 'Two thousand five hundred twenty-three')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1), 'One')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(7), 'Seven')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(10), 'Ten')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(17.3), 'Seventeen and 3/10')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(43.30), 'Forty-three and 3/10')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(90), 'Ninety')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(10.04), 'Ten and 04/100')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(0), 'Zero')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(123), 'One hundred twenty-three')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1000), 'One thousand')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1100), 'One thousand one hundred')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1234), 'One thousand two hundred thirty-four')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(10000), 'Ten thousand')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(10100), 'Ten thousand one hundred')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(12345), 'Twelve thousand three hundred forty-five')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(100000), 'One hundred thousand')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(100100), 'One hundred thousand one hundred')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(123456), 'One hundred twenty-three thousand four hundred fifty-six')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1000000), 'One million')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1000100), 'One million one hundred')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1100100), 'One million one hundred thousand one hundred')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1234567), 'One million two hundred thirty-four thousand five hundred sixty-seven')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(10000000), 'Ten million')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(10000100), 'Ten million one hundred')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(12345678), 'Twelve million three hundred forty-five thousand six hundred seventy-eight')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(100000000), 'One hundred million')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(100000001), 'One hundred million one')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(123456789), 'One hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(1000000000), 'One billion')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(999999999999.99), 'The number is too big!')
  })
  it('returns desired result', () => {
    assert.deepEqual(application(9999999999999.99), 'The number is too big!')
  })
  it('returns desired result', () => {
    assert.deepEqual(application('abc'), 'Please supply a number!')
  })
});
