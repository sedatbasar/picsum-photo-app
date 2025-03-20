import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { getImages } from '@/api/get-images';

import { Skeleton } from './ui/skeleton';

export const IMAGES_PER_PAGE = 12;

export const ImageListSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {Array.from({ length: IMAGES_PER_PAGE }).map((_, index) => (
      <Card key={index} className="shadow-lg">
        <CardContent className="p-2 h-48 relative">
          <Skeleton key={index} className="w-full h-48 rounded" />
        </CardContent>
      </Card>
    ))}
  </div>
);

interface PropsType {
  currentPage: number;
}

export default async function ImageList({ currentPage }: PropsType) {
  const images = await getImages(currentPage, IMAGES_PER_PAGE);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card
            key={image.id}
            className="shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <CardContent className="p-2 h-48 relative">
              <div className="relative w-full h-full rounded overflow-hidden">
                <Link href={`/edit/${image.id}`}>
                  <Image
                    src={image.download_url}
                    alt={`Image by ${image.author}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="rounded cursor-pointer object-cover inset-0 w-full h-full"
                    data-testid={`image-${image.id}`}
                  />
                </Link>
              </div>
              <p
                className="absolute bottom-2 left-2 text-sm text-muted-foreground bg-white bg-opacity-50 p-1 rounded"
                data-testid={`author-${image.id}`}
              >
                By {image.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
