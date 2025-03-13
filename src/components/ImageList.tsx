import Image from 'next/image';
import { getImages } from '@/api/get-images';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination } from '@/components/Pagination';

const IMAGES_PER_PAGE = 10;

export default async function ImageList({
  currentPage,
}: {
  currentPage: number;
}) {
  const images = await getImages(currentPage, IMAGES_PER_PAGE);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image: any) => (
          <Card
            key={image.id}
            className="shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <CardContent className="p-2 h-48 relative">
              <Image
                src={image.download_url}
                alt={`Image by ${image.author}`}
                fill
                className="rounded cursor-pointer"
              />
              <p
                className="absolute bottom-2 left-2 text-sm text-muted-foreground bg-white bg-opacity-50 p-1 rounded"
                aria-label={`Image by ${image.author}`}
              >
                By {image.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={10} />
    </div>
  );
}
