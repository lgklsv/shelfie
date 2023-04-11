import { describe, it } from 'vitest';
import { string } from 'shared/lib';

describe('cleanText', () => {
  it('should clean up text from html tags', () => {
    expect(string.cleanText('<p>Really long string goes here</p>')).toBe(
      'Really long string goes here'
    );
    expect(string.cleanText('<p>Really long<a> string goes<a> here</p>')).toBe(
      'Really long string goes here'
    );
    expect(
      string.cleanText('<p>Really<h1><h1> long<i /> string goes here</h1>')
    ).toBe('Really long string goes here');
  });
  it('should not affect if string is already clean', () => {
    expect(string.cleanText('Really long string goes here')).toBe(
      'Really long string goes here'
    );
  });
  it('should handle corner cases', () => {
    expect(string.cleanText('')).toBe('');
    expect(string.cleanText('        ')).toBe('');
    expect(string.cleanText('    hi          ')).toBe('hi');
  });
});
