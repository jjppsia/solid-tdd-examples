import { PasswordValidator } from './index';

describe('Password validator', () => {
  let passwordValidator: PasswordValidator;

  beforeEach(() => {
    passwordValidator = new PasswordValidator();
  });

  describe('validate', () => {
    it('should return success true when password is valid', () => {
      const password = 'Abc123';

      const result = passwordValidator.validate(password);

      expect(result).toEqual({ success: true });
    });

    it('should return success false when password is invalid', () => {
      const password = 'abc123';

      const result = passwordValidator.validate(password);

      expect(result).toEqual({
        success: false,
        errors: ['InvalidCharactersError'],
      });
    });

    it('should return success false when password is invalid', () => {
      const password = 'abc';

      const result = passwordValidator.validate(password);

      expect(result).toEqual({
        success: false,
        errors: ['InvalidLengthError'],
      });
    });
  });

  describe('validateLength', () => {
    it('should return success true when password length is valid', () => {
      const password = 'abcde';

      const result = passwordValidator.validateLength(password);

      expect(result).toEqual({ success: true });
    });

    it('should return success false when password length is invalid', () => {
      const password = 'abc';

      const result = passwordValidator.validateLength(password);

      expect(result).toEqual({
        success: false,
        errors: ['InvalidLengthError'],
      });
    });
  });

  describe('validateCharacters', () => {
    it('should return success true when password characters are valid', () => {
      const password = 'Abc123';

      const result = passwordValidator.validateCharacters(password);

      expect(result).toEqual({ success: true });
    });

    it('should return success false when password characters are invalid', () => {
      const password = 'abc123';

      const result = passwordValidator.validateCharacters(password);

      expect(result).toEqual({
        success: false,
        errors: ['InvalidCharactersError'],
      });
    });
  });
});
