import React from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './wagmiConfig'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>My NFT Marketplace</h1>
          <p>Viem/Wagmi is now configured!</p>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
