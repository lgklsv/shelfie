import { describe, it } from 'vitest';
import { validateCheckbox } from '../../../utils/validators/validateCheckbox';

describe('validateCheckbox', () => {
  it('should return true in report if checkbox is checked', () => {
    expect(validateCheckbox(true).checkboxIsValid).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validateCheckbox(false).checkboxErrorMessage).toBe(
      'Terms should be accepted to submit the form'
    );
  });

  it('should handle corner cases', () => {
    expect(validateCheckbox(undefined).checkboxIsValid).toBe(false);
  });
});
