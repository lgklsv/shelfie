import { describe, it } from 'vitest';
import { validateImageInput } from '../../../utils/validators/validateImageInput';

interface MockFile {
  name: string;
  body: string;
  mimeType: string;
}

interface IBlob extends Blob, File {
  name: string;
  lastModifiedDate: Date;
  lastModified: number;
  webkitRelativePathts: string;
}

const createFileFromMockFile = (file: MockFile): File => {
  const blob: Partial<IBlob> = new Blob([file.body], { type: file.mimeType });
  blob.lastModifiedDate = new Date();
  blob.name = file.name;
  blob.lastModified = Date.now();
  return blob as File;
};

describe('validateImageInput', () => {
  it('should return true in report if there is something in file list', () => {
    expect(
      validateImageInput([
        createFileFromMockFile({
          body: 'test',
          mimeType: 'image/png',
          name: 'fakeImage.png',
        }),
      ] as unknown as FileList).imageIsValid
    ).toBe(true);
  });

  it('should provide nice error message when failed', () => {
    expect(validateImageInput(null).imageErrorMessage).toBe(
      'Image should be provided'
    );
    expect(validateImageInput(undefined).imageErrorMessage).toBe(
      'Image should be provided'
    );
  });
});
