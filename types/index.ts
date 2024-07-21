export type ThemeTypes = 'light' | 'dark' | 'system';

export type Stock = {
  symbol: string;
  name: string;
  price: number;
};

export type StockOverview = {
  Symbol: string;
  Name: string;
  Sector: string;
  Industry: string;
  MarketCapitalization: string;
  DividendYield: string;
  PERatio: string;
  EPS: string;
  '52WeekHigh': string;
  '52WeekLow': string;
};

export type StockData = {
  overview: StockOverview;
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
};
