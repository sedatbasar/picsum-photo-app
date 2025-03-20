'use client';

import { useEffect, useState } from 'react';

import { type Image } from '@/api/get-images';

import ImageList from '../../ImageList';

export function ImageListTestWrapper({ currentPage }: { currentPage: number }) {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const data = await ImageList({ currentPage });
      setImages(data.props.children);
    }
    fetchImages();
  }, [currentPage]);

  return <>{images}</>;
}
