import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// components
import Loader from '@/components/Loader';
import Card from '@/components/Card';
import Chart from '@/components/Chart';
// types and utils
import { StockData } from '@/types';
import { fetchStockDetails } from '../../utils/alphavantage';
import SymbolData from '@/components/SymbolData';

export default function StockDetail() {
  const router = useRouter();
  const { symbol } = router.query;
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchStockDetails(symbol as string);
      setStockData(data);
      setIsLoading(false);
    };

    if (symbol) fetchData();
  }, [symbol]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen dark:bg-gray-900">
        <Loader />
      </div>
    );
  }

  if (!stockData) {
    return (
      <div className="text-center dark:text-gray-300">
        Stock details not found.
      </div>
    );
  }

  const { overview, chartData } = stockData || {};
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4">
        <Card title={`Stock Details for ${symbol}`}>
          <SymbolData overview={overview} />
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
          <Chart data={chartData || {}} />
        </Card>
      </div>
    </div>
  );
}
