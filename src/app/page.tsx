import ImageList from '@/components/ImageList';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || '1', 10);

  return (
    <main className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Picsum Photo Gallery</h1>
      <ImageList currentPage={currentPage} />
    </main>
  );
}
