const isPasswordValid = require('../passwordChecker');

describe('Password Validation', () => {
    test('Password with less than 8 characters is invalid', () => {
        expect(isPasswordValid('Abc1!')).toBe(false);
    });

    test('Password without special characters is invalid', () => {
        expect(isPasswordValid('Abcdefg1')).toBe(false);
    });

    test('Password without digits is invalid', () => {
        expect(isPasswordValid('Abcdefg!')).toBe(false);
    });

    test('Password containing "IPL" (case-insensitive) is invalid', () => {
        expect(isPasswordValid('Abc1!IPL')).toBe(false);
        expect(isPasswordValid('Abc1!ipl')).toBe(false);
    });

    test('Password that meets all criteria is valid', () => {
        expect(isPasswordValid('ValidPass1!')).toBe(true);
    });
});
