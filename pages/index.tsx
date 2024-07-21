import { useState, useEffect } from 'react';
// components
import Card from '../components/Card';
import StockTable from '../components/StockTable';
// utils and types
import { Stock } from '../types';
import { fetchStocks } from '../utils/alphavantage';

export default function Home() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadStocks = async () => {
      setIsLoading(true);
      const allStocks = await fetchStocks();
      setStocks(allStocks);
      setIsLoading(false);
    };

    loadStocks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4">
        <Card title="Stocks Table">
          <StockTable stocks={stocks} isLoading={isLoading} />
        </Card>
      </div>
    </div>
  );
}
