export const getImages = async (page: number, limit: number) => {
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
    {
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch images');
  }
  return res.json();
};
