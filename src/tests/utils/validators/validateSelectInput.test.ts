import { describe, it } from 'vitest';
import { validateSelectInput } from '../../../utils/validators/validateSelectInput';

describe('validateSelectInput', () => {
  it('should return true in report if value is not DEFAULT', () => {
    expect(validateSelectInput('b3', 'Category').selectIsValid).toBe(true);
  });

  it('should set error message depending on provided type', () => {
    expect(
      validateSelectInput('DEFAULT', 'Category').selectErrorMessage.startsWith(
        'Category'
      )
    ).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validateSelectInput('DEFAULT', 'Category').selectErrorMessage).toBe(
      'Category should be selected'
    );
    expect(validateSelectInput(undefined, 'Category').selectErrorMessage).toBe(
      'Category should be selected'
    );
  });
});
