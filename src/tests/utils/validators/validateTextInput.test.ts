import { describe, it } from 'vitest';
import { validateTextInput } from '../../../utils/validators/validateTextInput';

describe('validateTextInput', () => {
  it('should return true in report if text is longer than 3 and shorter than 40 chars', () => {
    expect(
      validateTextInput('Really long string goes here', 'Title').textIsValid
    ).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validateTextInput('    hi          ', 'Title').errorMessage).toBe(
      'Title should be at least 3 characters'
    );
    expect(
      validateTextInput(
        'Really long string goes hereReally long string goes here',
        'Title'
      ).errorMessage
    ).toBe('Title is too long');
    expect(validateTextInput(undefined, 'Title').errorMessage).toBe(
      'Title should not be empty'
    );
  });

  it('should handle corner cases', () => {
    expect(validateTextInput('', 'Title').textIsValid).toBe(false);
    expect(validateTextInput('        ', 'Title').textIsValid).toBe(false);
    expect(validateTextInput('    hi          ', 'Title').textIsValid).toBe(
      false
    );
    expect(validateTextInput(undefined, 'Title').textIsValid).toBe(false);
  });
});
