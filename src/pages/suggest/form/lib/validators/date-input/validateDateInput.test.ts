import { describe, it } from 'vitest';
import { validate } from '../..';

describe('validateDateInput', () => {
  it('should return true in report if date is not in the future', () => {
    expect(validate.DateInput('2022-01-04').dateIsValid).toBe(true);
    expect(validate.DateInput('1999-04-07').dateIsValid).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(
      validate.DateInput(new Date(Date.now() + 10000).toISOString())
        .dateErrorMessage
    ).toBe('Published date should not be in the future');
    expect(validate.DateInput('').dateErrorMessage).toBe(
      'Published date should not be empty'
    );
  });

  it('should handle corner cases', () => {
    expect(validate.DateInput('wiufgwqeipygfqwiypgf').dateIsValid).toBe(false);
    expect(validate.DateInput(undefined).dateIsValid).toBe(false);
  });
});
