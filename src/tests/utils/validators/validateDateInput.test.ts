import { describe, it } from 'vitest';
import { validateDateInput } from '../../../utils/validators/validateDateInput';

describe('validateDateInput', () => {
  it('should return true in report if date is not in the future', () => {
    expect(validateDateInput('2022-01-04').dateIsValid).toBe(true);
    expect(validateDateInput('1999-04-07').dateIsValid).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(
      validateDateInput(new Date(Date.now() + 10000).toISOString())
        .dateErrorMessage
    ).toBe('Published date should not be in the future');
    expect(validateDateInput('').dateErrorMessage).toBe(
      'Published date should not be empty'
    );
  });

  it('should handle corner cases', () => {
    expect(validateDateInput('wiufgwqeipygfqwiypgf').dateIsValid).toBe(false);
    expect(validateDateInput(undefined).dateIsValid).toBe(false);
  });
});
