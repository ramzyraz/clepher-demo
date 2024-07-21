import { StockOverview } from '@/types';

export default function SymbolData({ overview }: { overview: StockOverview }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      <div>
        <h3 className="text-lg font-bold">Overview</h3>
        <p>
          <strong>Symbol:</strong> {overview?.Symbol || ''}
        </p>
        <p>
          <strong>Name:</strong> {overview?.Name || ''}
        </p>
        <p>
          <strong>Sector:</strong> {overview?.Sector || ''}
        </p>
        <p>
          <strong>Industry:</strong> {overview?.Industry || ''}
        </p>
        <p>
          <strong>Market Cap:</strong> {overview?.MarketCapitalization || ''}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Additional Details</h3>
        <p>
          <strong>Dividend Yield:</strong> {overview?.DividendYield || ''}
        </p>
        <p>
          <strong>PE Ratio:</strong> {overview?.PERatio || ''}
        </p>
        <p>
          <strong>EPS:</strong> {overview?.EPS || ''}
        </p>
        <p>
          <strong>52 Week High:</strong> {overview?.['52WeekHigh'] || ''}
        </p>
        <p>
          <strong>52 Week Low:</strong> {overview?.['52WeekLow'] || ''}
        </p>
      </div>
    </div>
  );
}
