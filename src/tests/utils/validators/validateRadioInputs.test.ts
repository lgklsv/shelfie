import { describe, it } from 'vitest';
import { validateRadioInputs } from '../../../utils/validators/validateRadioInputs';

describe('validateRadioInputs', () => {
  it('should return true in report if one of inputs is checked', () => {
    expect(validateRadioInputs(true, false).radioIsValid).toBe(true);
    expect(validateRadioInputs(false, true).radioIsValid).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validateRadioInputs(false, false).radioIsValid).toBe(false);
    expect(validateRadioInputs(false, false).radioErrorMessage).toBe(
      'Type should be choosen'
    );
  });

  it('should handle corner cases', () => {
    expect(validateRadioInputs(undefined, undefined).radioIsValid).toBe(false);
    expect(validateRadioInputs(true, true).radioIsValid).toBe(false);
    expect(validateRadioInputs(true, undefined).radioIsValid).toBe(false);
    expect(validateRadioInputs(undefined, false).radioIsValid).toBe(false);
  });
});
