import { describe, it } from 'vitest';
import { stripText } from '../../utils/strip-text';

describe('stripText', () => {
  it('should slice input text if it exceeds the allowed length', () => {
    expect(stripText('Really long string goes here', 10)).toBe('Really lon...');
  });
  it('should not affect if string is not longer than expected length', () => {
    expect(stripText('Really long string goes here', 100)).toBe(
      'Really long string goes here'
    );
  });
  it('should handle corner cases', () => {
    expect(stripText('', 10)).toBe('');
    expect(stripText('        ', 3)).toBe('');
    expect(stripText('    hi          ', 3)).toBe('hi');
  });
});
