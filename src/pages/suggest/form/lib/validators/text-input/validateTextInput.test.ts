import { describe, it } from 'vitest';
import { validate } from '../..';

describe('validateTextInput', () => {
  it('should return true in report if text is longer than 3 and shorter than 40 chars', () => {
    expect(
      validate.TextInput('Really long string goes here', 'Title').textIsValid
    ).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validate.TextInput('    hi          ', 'Title').errorMessage).toBe(
      'Title should be at least 3 characters'
    );
    expect(
      validate.TextInput(
        'Really long string goes hereReally long string goes here',
        'Title'
      ).errorMessage
    ).toBe('Title is too long');
    expect(validate.TextInput(undefined, 'Title').errorMessage).toBe(
      'Title should not be empty'
    );
  });

  it('should handle corner cases', () => {
    expect(validate.TextInput('', 'Title').textIsValid).toBe(false);
    expect(validate.TextInput('        ', 'Title').textIsValid).toBe(false);
    expect(validate.TextInput('    hi          ', 'Title').textIsValid).toBe(
      false
    );
    expect(validate.TextInput(undefined, 'Title').textIsValid).toBe(false);
  });
});
