'use client';

import { useSearchParams } from 'next/navigation';

import ImageList from '@/components/ImageList';
import { Pagination } from '@/components/Pagination';

export default function Home() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  return (
    <main className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Picsum Photo Gallery</h1>
      <ImageList currentPage={currentPage} />
      <Pagination currentPage={currentPage} totalPages={10} />
    </main>
  );
}
