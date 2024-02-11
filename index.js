function validateCreditCard(cardNumber) {
  // regex patterns for different credit card types
  const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardPattern = /^5[1-5][0-9]{14}$/;
  const amexPattern = /^3[47][0-9]{13}$/;
  const discoverPattern = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

  // Checks if the card number matches any of the patterns
  if (visaPattern.test(cardNumber)) {
    return 'Visa';
  } else if (mastercardPattern.test(cardNumber)) {
    return 'Mastercard';
  } else if (amexPattern.test(cardNumber)) {
    return 'American Express';
  } else if (discoverPattern.test(cardNumber)) {
    return 'Discover';
  } else {
    return 'Invalid Card Type';
  }
}

// Example:
const cardNumber = '4111111111111111';
const cardType = validateCreditCard(cardNumber);
console.log(`Card Type: ${cardType}`);
