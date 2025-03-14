'use client';

import Image from 'next/image';
import { useReducer, useState, useEffect, use } from 'react';
import { z } from 'zod';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import debounce from 'lodash.debounce';

import { Button } from '@/components/ui/button';

const editSchema = z.object({
  width: z.number().min(1, 'Width must be at least 1'),
  height: z.number().min(1, 'Height must be at least 1'),
  blur: z
    .number()
    .min(1, 'Blur intensity must be greater than 1 or equal')
    .max(10, 'Blur intensity must be lower than 10 or equal'),
  greyscale: z.boolean(),
});

type State = z.infer<typeof editSchema>;
type Action = { field: keyof State; value: State[keyof State] };

const reducer = (state: State, action: Action): State => ({
  ...state,
  [action.field]: action.value,
});

export default function EditImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialState = {
    width: parseInt(searchParams.get('width') || '500'),
    height: parseInt(searchParams.get('height') || '500'),
    blur: parseFloat(searchParams.get('blur') || '1'),
    greyscale: searchParams.get('greyscale') === 'true',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [image, setImage] = useState({
    url: `https://picsum.photos/id/${resolvedParams.id}/${initialState.width}/${initialState.height}?blur=${initialState.blur}${initialState.greyscale ? '&grayscale' : ''}`,
    width: initialState.width,
    height: initialState.height,
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const validationResult = editSchema.safeParse(state);

  const updateSearchParams = () => {
    const params = new URLSearchParams();
    params.set('width', state.width.toString());
    params.set('height', state.height.toString());
    params.set('blur', state.blur.toString());
    params.set('greyscale', state.greyscale.toString());

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const updateParams = debounce(() => {
    setImage({
      url: `https://picsum.photos/id/${resolvedParams.id}/${state.width}/${state.height}?blur=${state.blur}${state.greyscale ? '&grayscale' : ''}`,
      width: state.width,
      height: state.height,
    });
    updateSearchParams();
    setIsUpdating(false);
  }, 300);

  useEffect(() => {
    setIsUpdating(true);
    updateParams();
    return () => updateParams.cancel();
  }, [state]);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Image</h1>
      <Button
        onClick={() => router.back()}
        variant="link"
        className="text-blue-500 cursor-pointer !ps-0"
      >
        <ArrowLeft /> Back to Gallery
      </Button>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div>
            <label htmlFor="width" className="text-sm">
              Width (px)
            </label>{' '}
            <input
              id="width"
              type="number"
              value={state.width}
              onChange={(e) =>
                dispatch({
                  field: 'width',
                  value: Number(e.target.value),
                })
              }
              className="border rounded p-2"
            />
          </div>

          <div>
            <label htmlFor="height" className="text-sm">
              Height (px)
            </label>{' '}
            <input
              id="height"
              type="number"
              value={state.height}
              onChange={(e) =>
                dispatch({
                  field: 'height',
                  value: Number(e.target.value),
                })
              }
              className="border rounded p-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="blur" className="text-sm">
              Blur Intensity (1-10)
            </label>{' '}
            <input
              id="blur"
              type="range"
              min="1"
              max="10"
              value={state.blur}
              onChange={(e) =>
                dispatch({
                  field: 'blur',
                  value: Number(e.target.value),
                })
              }
              className="cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="greyscale"
              type="checkbox"
              checked={state.greyscale}
              onChange={(e) =>
                dispatch({ field: 'greyscale', value: e.target.checked })
              }
            />{' '}
            <label htmlFor="greyscale" className="text-sm">
              Greyscale
            </label>
          </div>
        </div>
        {!validationResult.success && (
          <div className="text-red-600">
            {validationResult.error.errors.map((err) => (
              <p key={err.path.join('.')}>{err.message}</p>
            ))}
          </div>
        )}
        <div className="relative">
          <Image
            src={image.url}
            alt="Preview"
            width={image.width}
            height={image.height}
            className={`object-cover rounded transition-opacity duration-300 ${isUpdating ? 'opacity-50' : 'opacity-100'}`}
          />
        </div>
      </div>
    </main>
  );
}
