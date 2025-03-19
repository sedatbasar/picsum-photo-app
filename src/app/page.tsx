import { Suspense } from 'react';

import ImageList, { ImageListSkeleton } from '@/components/ImageList';
import { Pagination } from '@/components/Pagination';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const awaitedSearchParams = await searchParams;
  const currentPage = parseInt(awaitedSearchParams.page || '1', 10);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Picsum Photo Gallery</h1>
      <Suspense fallback={<ImageListSkeleton />} key={currentPage}>
        <ImageList currentPage={currentPage} />
      </Suspense>
      <Pagination currentPage={currentPage} totalPages={10} />
    </>
  );
}
