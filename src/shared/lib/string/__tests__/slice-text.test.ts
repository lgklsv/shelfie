import { describe, it } from 'vitest';
import { string } from 'shared/lib';

describe('sliceText', () => {
  it('should slice input text if it exceeds the allowed length', () => {
    expect(string.sliceText('Really long string goes here', 10)).toBe(
      'Really lon...'
    );
  });
  it('should not affect if string is not longer than expected length', () => {
    expect(string.sliceText('Really long string goes here', 100)).toBe(
      'Really long string goes here'
    );
  });
  it('should handle corner cases', () => {
    expect(string.sliceText('', 10)).toBe('');
    expect(string.sliceText('        ', 3)).toBe('');
    expect(string.sliceText('    hi          ', 3)).toBe('hi');
  });
});
