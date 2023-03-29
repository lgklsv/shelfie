import { describe, it } from 'vitest';
import { validate } from '../..';

describe('validateRadioInputs', () => {
  it('should return true in report if one of inputs is checked', () => {
    expect(validate.RadioInputs(true, false).radioIsValid).toBe(true);
    expect(validate.RadioInputs(false, true).radioIsValid).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validate.RadioInputs(false, false).radioIsValid).toBe(false);
    expect(validate.RadioInputs(false, false).radioErrorMessage).toBe(
      'Type should be choosen'
    );
  });

  it('should handle corner cases', () => {
    expect(validate.RadioInputs(undefined, undefined).radioIsValid).toBe(false);
    expect(validate.RadioInputs(true, true).radioIsValid).toBe(false);
    expect(validate.RadioInputs(true, undefined).radioIsValid).toBe(false);
    expect(validate.RadioInputs(undefined, false).radioIsValid).toBe(false);
  });
});
