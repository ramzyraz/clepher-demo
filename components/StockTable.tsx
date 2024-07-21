import React from 'react';
import { useRouter } from 'next/router';
// components
import Pagination from './Pagination';
import Loader from './Loader';
// types
import { StockTableProps } from '@/types/props';

const StockTable = ({ stocks, isLoading }: StockTableProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [stocksPerPage, setStocksPerPage] = React.useState(5);
  const router = useRouter();

  const handleRowClick = (symbol: string) => {
    router.push(`/stocks/${symbol}`);
  };

  /*
    NOTE: Since the SYMBOL_SEARCH api in alphavantage does not take limit and skip as its arguments, I am manually filtering them out here.
    A better approach would be to implement this in our api rather than fetching all of the data first. 
  */

  // Finding first and last pages
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  // Filtering out the stocks per page
  const currentStocks = stocks?.slice(indexOfFirstStock, indexOfLastStock);
  // Finding all pages + validation checks
  const filteredStocksLength = stocks?.length || 0;
  const totalPages = Math.ceil(filteredStocksLength / stocksPerPage);
  const isEmpty = !isLoading && filteredStocksLength === 0;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="border px-4 py-2">Symbol</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={3} className="text-center py-8">
                <Loader />
              </td>
            </tr>
          ) : (
            currentStocks?.map((stock) => (
              <tr
                key={stock.symbol}
                onClick={() => handleRowClick(stock?.symbol || '')}
                className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <td className="border px-4 py-2">{stock?.symbol || ''}</td>
                <td className="border px-4 py-2">{stock?.name || ''}</td>
                <td className="border px-4 py-2">${stock?.price || 0}</td>
              </tr>
            ))
          )}
          {isEmpty && (
            <tr>
              <td colSpan={3} className="text-center py-8 dark:text-gray-300">
                No stocks available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-2 mb-4">
        <div>
          <label htmlFor="stocksPerPage" className="mr-4 dark:text-gray-300">
            Stocks per page:
          </label>
          <select
            id="stocksPerPage"
            value={stocksPerPage}
            onChange={(e) => setStocksPerPage(Number(e.target.value))}
            className="p-2 border rounded bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default StockTable;
