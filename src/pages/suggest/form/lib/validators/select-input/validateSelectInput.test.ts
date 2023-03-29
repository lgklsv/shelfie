import { describe, it } from 'vitest';
import { validate } from '../..';

describe('validateSelectInput', () => {
  it('should return true in report if value is not DEFAULT', () => {
    expect(validate.SelectInput('b3', 'Category').selectIsValid).toBe(true);
  });

  it('should set error message depending on provided type', () => {
    expect(
      validate
        .SelectInput('DEFAULT', 'Category')
        .selectErrorMessage.startsWith('Category')
    ).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validate.SelectInput('DEFAULT', 'Category').selectErrorMessage).toBe(
      'Category should be selected'
    );
    expect(validate.SelectInput(undefined, 'Category').selectErrorMessage).toBe(
      'Category should be selected'
    );
  });
});
