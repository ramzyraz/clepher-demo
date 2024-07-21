import React from 'react';
import { PaginationProps } from '@/types/props';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {pages &&
        pages?.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white dark:bg-blue-700' : 'bg-gray-300 dark:bg-gray-600 dark:text-gray-300'}`}
          >
            {page}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
