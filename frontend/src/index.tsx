import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './wagmiConfig';
import App from './App';
import './index.css';

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
	<WagmiProvider config={config}>
	  <QueryClientProvider client={queryClient}>
		<App />
	  </QueryClientProvider>
	</WagmiProvider>
  </React.StrictMode>
);