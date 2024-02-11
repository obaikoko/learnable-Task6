Explanation of regex patterns:

Visa (^4[0-9]{12}(?:[0-9]{3})?$):

^4: Must start with a 4.
[0-9]{12}: Followed by 12 digits (total 13 digits).
(?:[0-9]{3})?$: Optionally followed by 3 more digits, making a total of 16 digits.
Mastercard (^5[1-5][0-9]{14}$):

^5[1-5]: Must start with 51 to 55.
[0-9]{14}: Followed by 14 digits (total 15 digits).
American Express (^3[47][0-9]{13}$):

^3[47]: Must start with 34 or 37.
[0-9]{13}: Followed by 13 digits (total 15 digits).
Discover (^6(?:011|5[0-9]{2})[0-9]{12}$):

^6: Must start with a 6.
(?:011|5[0-9]{2}): Followed by either 011 or 5 followed by any two digits.
[0-9]{12}: Followed by 12 digits (total 16 digits).