import { Stock, ThemeTypes } from '.';

export type NavbarProps = {
  theme: ThemeTypes;
  toggleTheme: (theme: ThemeTypes) => void;
};

export type SelectThemeProps = {
  theme: ThemeTypes;
  children: React.ReactNode;
  toggleTheme: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type StockTableProps = {
  stocks: Stock[];
  isLoading: boolean;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type CardProps = {
  title: string;
  children: React.ReactNode;
};
