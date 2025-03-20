import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { act } from 'react';

import * as GetImagesAPI from '@/api/get-images';

import { ImageListTestWrapper } from './__mocks__/ImageListTestWrapper';

const MockImageList = [
  { id: '1', author: 'Sedat', download_url: 'http://example.com' },
];

vi.spyOn(GetImagesAPI, 'getImages').mockImplementation(
  (_page: number, _limit: number) =>
    new Promise((resolve) => resolve(MockImageList)),
);

describe('ImageList Component', () => {
  const defaultProps = {
    currentPage: 1,
  };

  test('renders the images and author', async () => {
    await act(() => {
      render(<ImageListTestWrapper {...defaultProps} />);
    });
    expect(await screen.findByTestId('image-1')).toBeInTheDocument();
    expect(screen.getByTestId('author-1')).toHaveTextContent('By Sedat');
  });
});
