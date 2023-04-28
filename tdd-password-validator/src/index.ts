type InvalidPasswordError = 'InvalidLengthError' | 'InvalidCharactersError';

type ValidationResult = {
  success: boolean;
  errors?: InvalidPasswordError[];
};

export class PasswordValidator {
  validateLength(password: string): ValidationResult {
    const MIN_LENGTH = 5;
    const MAX_LENGTH = 15;

    if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
      return {
        success: false,
        errors: ['InvalidLengthError'],
      };
    }

    return {
      success: true,
    };
  }

  validateCharacters(password: string): ValidationResult {
    const containsDigit = /\d/.test(password);
    const containsUpperCase = /[A-Z]/.test(password);

    if (!containsDigit || !containsUpperCase) {
      return {
        success: false,
        errors: ['InvalidCharactersError'],
      };
    }

    return {
      success: true,
    };
  }

  validate(password: string): ValidationResult {
    const lengthValidation = this.validateLength(password);

    if (!lengthValidation.success) {
      return lengthValidation;
    }

    const charactersValidation = this.validateCharacters(password);

    if (!charactersValidation.success) {
      return charactersValidation;
    }

    return {
      success: true,
    };
  }
}
