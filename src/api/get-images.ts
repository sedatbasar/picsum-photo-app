import { z } from 'zod';

const ImageSchema = z.object({
  id: z.string(),
  author: z.string(),
  download_url: z.string().url(),
});

export type Image = z.infer<typeof ImageSchema>;

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

  const data = await res.json();

  const validatedData = z.array(ImageSchema).safeParse(data);

  if (!validatedData.success) {
    throw new Error('Invalid image data received from API');
  }

  return validatedData.data;
};
