import axios from 'axios';
import { Stock, StockData } from '../types';
import { API_KEY, API_URL } from '@/config';
import { getParams } from './helpers';

export const fetchStocks = async (): Promise<Stock[]> => {
  const response = await axios.get(API_URL, {
    params: {
      function: 'SYMBOL_SEARCH',
      keywords: 'technology',
      apikey: API_KEY,
    },
  });

  return response?.data?.bestMatches?.map((match: any) => ({
    symbol: match?.['1. symbol'] || '',
    name: match?.['2. name'] || '',
    price: (Math.random() * 100).toFixed(2),
  }));
};

export const fetchStockDetails = async (symbol: string): Promise<StockData> => {
  const [overviewResponse, chartDataResponse] = await Promise.all([
    axios.get(API_URL, getParams('OVERVIEW', symbol)),
    axios.get(API_URL, getParams('TIME_SERIES_DAILY', symbol)),
  ]);

  const timeSeries = chartDataResponse?.data['Time Series (Daily)'] || {};
  const chartData = {
    labels: Object.keys(timeSeries),
    datasets: [
      {
        label: 'Stock Price',
        data: Object.keys(timeSeries).map((date) =>
          parseFloat(timeSeries?.[date]['4. close']),
        ),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return {
    chartData,
    overview: overviewResponse?.data || {},
  };
};
