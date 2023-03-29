import { describe, it } from 'vitest';
import { validate } from '../..';

describe('validateCheckbox', () => {
  it('should return true in report if checkbox is checked', () => {
    expect(validate.CheckboxInput(true).checkboxIsValid).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validate.CheckboxInput(false).checkboxErrorMessage).toBe(
      'Terms should be accepted to submit the form'
    );
  });

  it('should handle corner cases', () => {
    expect(validate.CheckboxInput(undefined).checkboxIsValid).toBe(false);
  });
});
