import { API_KEY } from '@/config';

export const getParams = (type: string, symbol: string) => {
  return {
    params: {
      function: type,
      symbol,
      apikey: API_KEY,
    },
  };
};
