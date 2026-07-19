'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { calculateTotal, formatCurrency } = require('../src/payments');

test('calculateTotal sums price * quantity across items', () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
  ];
  assert.equal(calculateTotal(items), 999999);
});

test('calculateTotal throws on non-array input', () => {
  assert.throws(() => calculateTotal('not-an-array'), TypeError);
});

test('formatCurrency defaults to KES', () => {
  assert.equal(formatCurrency(42), 'KES 42.00');
});

test('formatCurrency accepts a custom currency', () => {
  assert.equal(formatCurrency(42, 'USD'), 'USD 42.00');
});
