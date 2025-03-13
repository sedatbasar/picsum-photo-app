import Link from 'next/link';

import { Button } from '@/components/ui/button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <nav
      aria-label="Pagination Navigation"
      className="flex justify-center items-center gap-4 mt-8"
    >
      {currentPage > 1 ? (
        <Link
          href={`?page=${currentPage - 1}`}
          aria-label="Go to Previous Page"
          passHref
        >
          <Button variant="outline" className="cursor-pointer">
            Previous
          </Button>
        </Link>
      ) : (
        <Button variant="outline" disabled className="cursor-not-allowed">
          Previous
        </Button>
      )}

      <span className="text-sm font-medium" aria-live="polite">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={`?page=${currentPage + 1}`}
          aria-label="Go to Next Page"
          passHref
        >
          <Button variant="outline" className="cursor-pointer">
            Next
          </Button>
        </Link>
      ) : (
        <Button variant="outline" disabled className="cursor-not-allowed">
          Next
        </Button>
      )}
    </nav>
  );
};
