import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <ThemeSwitcher />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
