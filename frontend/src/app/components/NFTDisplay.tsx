'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { connectContract } from '../utils/connectContract';

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
}

interface NFT {
  tokenId: number;
  owner: string;
  tokenURI: string;
  metadata?: NFTMetadata;
}

const AMOY_CHAIN_ID = '0x13882'; // 80002 in hex
const AMOY_NETWORK_CONFIG = {
  chainId: AMOY_CHAIN_ID,
  chainName: 'Polygon Amoy Testnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-amoy.polygon.technology/'],
  blockExplorerUrls: ['https://amoy.polygonscan.com/'],
};

export default function NFTDisplay() {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  async function checkWalletConnection() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setWalletConnected(accounts.length > 0);
        
        if (accounts.length > 0) {
          await checkNetwork();
        }
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts: string[]) => {
          setWalletConnected(accounts.length > 0);
          if (accounts.length > 0) {
            checkNetwork();
          } else {
            setNfts([]);
            setIsCorrectNetwork(false);
          }
        });
        
        // Listen for network changes
        window.ethereum.on('chainChanged', () => {
          checkNetwork();
        });
        
      } catch (error) {
        console.error('Error checking wallet connection:', error);
        setError('Error checking wallet connection');
      }
    } else {
      setError('MetaMask is not installed. Please install MetaMask to use this application.');
    }
  }

  async function checkNetwork() {
    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      console.log('Current chain ID:', chainId);
      console.log('Expected Amoy chain ID:', AMOY_CHAIN_ID);
      const isAmoy = chainId === AMOY_CHAIN_ID;
      setIsCorrectNetwork(isAmoy);
      
      if (isAmoy) {
        setError(null);
        loadNFTs();
      } else {
        setNfts([]);
      }
    } catch (error) {
      console.error('Error checking network:', error);
      setError('Error checking network');
    }
  }

  async function switchToAmoyNetwork() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: AMOY_CHAIN_ID }],
      });
      // Check network after successful switch
      setTimeout(() => checkNetwork(), 1000);
    } catch (switchError: any) {
      console.error('Switch error:', switchError);
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [AMOY_NETWORK_CONFIG],
          });
          // Check network after successful add
          setTimeout(() => checkNetwork(), 1000);
        } catch (addError) {
          console.error('Error adding network:', addError);
          setError('Failed to add Amoy network to MetaMask');
        }
      } else {
        console.error('Error switching network:', switchError);
        setError('Failed to switch to Amoy network');
      }
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
      setError('MetaMask is not installed. Please install MetaMask to use this application.');
      return;
    }
    
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected accounts:', accounts);
      setWalletConnected(accounts.length > 0);
      setError(null);
      await checkNetwork();
    } catch (error: any) {
      console.error('Error connecting wallet:', error);
      if (error.code === 4001) {
        setError('Please connect to MetaMask to continue.');
      } else {
        setError('Failed to connect wallet. Please try again.');
      }
    }
  }

  async function loadNFTs() {
    try {
      setLoading(true);
      const contract = await connectContract();
      
      if (!contract) {
        setError("Failed to connect to contract");
        return;
      }

      // Get total supply - we'll try to load all tokens starting from 0
      const nftList: NFT[] = [];
      
      // Try to load first few NFTs (starting from token ID 0)
      console.log('Starting to load NFTs from token ID 0...');
      for (let tokenId = 0; tokenId < 10; tokenId++) {
        try {
          console.log(`Attempting to load token ID: ${tokenId}`);
          const owner = await contract.ownerOf(tokenId);
          console.log(`Token ${tokenId} owner: ${owner}`);
          const tokenURI = await contract.tokenURI(tokenId);
          console.log(`Token ${tokenId} URI: ${tokenURI}`);
          
          const nft: NFT = {
            tokenId,
            owner,
            tokenURI
          };

          // Fetch metadata from IPFS
          if (tokenURI.startsWith('ipfs://')) {
            try {
              const ipfsHash = tokenURI.replace('ipfs://', '');
              console.log(`Fetching IPFS metadata: https://ipfs.io/ipfs/${ipfsHash}`);
              const metadataResponse = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
              
              if (!metadataResponse.ok) {
                throw new Error(`IPFS fetch failed: ${metadataResponse.status}`);
              }
              
              const metadata = await metadataResponse.json();
              console.log(`Metadata loaded for token ${tokenId}:`, metadata);
              nft.metadata = metadata;
            } catch (metadataError) {
              console.error(`Could not fetch metadata for token ${tokenId}:`, metadataError);
              // Still add the NFT even without metadata
            }
          }

          nftList.push(nft);
        } catch (tokenError: any) {
          console.log(`Error loading token ${tokenId}:`, tokenError);
          // If it's a "nonexistent token" error, continue to next token
          if (tokenError.reason && tokenError.reason.includes('nonexistent')) {
            console.log(`Token ${tokenId} does not exist, continuing...`);
            continue;
          }
          // For other errors, continue but log them
          console.error(`Unexpected error for token ${tokenId}:`, tokenError);
          continue;
        }
      }

      setNfts(nftList);
      setError(null);
    } catch (err) {
      console.error("Error loading NFTs:", err);
      setError("Failed to load NFTs");
    } finally {
      setLoading(false);
    }
  }

  function getImageUrl(imageUri: string) {
    if (imageUri.startsWith('ipfs://')) {
      return `https://ipfs.io/ipfs/${imageUri.replace('ipfs://', '')}`;
    }
    return imageUri;
  }

  if (!walletConnected) {
    return (
      <div className="text-center py-12">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Connect Your Wallet</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Connect your MetaMask wallet to view your NFTs from the Amoy Polygon testnet</p>
        </div>
        <button
          onClick={connectWallet}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
        >
          <span>Connect MetaMask</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    );
  }

  if (!isCorrectNetwork) {
    return (
      <div className="text-center py-12">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Wrong Network</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Please switch to <span className="font-semibold text-indigo-400">Polygon Amoy Testnet</span> to view your NFTs
          </p>
        </div>
        <button
          onClick={switchToAmoyNetwork}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
        >
          <span>Switch to Amoy Testnet</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
        <p className="text-gray-400">Loading your NFTs from Amoy testnet...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Error Loading NFTs</h3>
          <p className="text-gray-400 mb-6">{error}</p>
        </div>
        <button 
          onClick={loadNFTs}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (nfts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl glass flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">No NFTs Found</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">No NFTs found in your wallet on Amoy testnet</p>
        </div>
        <button 
          onClick={loadNFTs}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center space-x-2"
        >
          <span>🔄 Refresh</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Network Status Banner */}
      <div className="glass rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-300">
            Connected to <span className="font-bold text-indigo-400">Polygon Amoy Testnet</span>
          </span>
        </div>
        <div className="text-xs text-gray-400">
          {nfts.length} NFT{nfts.length !== 1 ? 's' : ''} found
        </div>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.tokenId} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            {nft.metadata?.image && (
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={getImageUrl(nft.metadata.image)} 
                  alt={nft.metadata.name || `NFT #${nft.tokenId}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Testnet Badge */}
                <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Amoy
                </div>
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {nft.metadata?.name || `NFT #${nft.tokenId}`}
                </h3>
                <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full font-medium">
                  #{nft.tokenId}
                </span>
              </div>
              
              {nft.metadata?.description && (
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {nft.metadata.description}
                </p>
              )}

              <div className="text-xs text-gray-400 mb-4">
                <p className="truncate font-mono bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="font-semibold">Owner:</span> {nft.owner}
                </p>
              </div>

              {nft.metadata?.attributes && nft.metadata.attributes.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Attributes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {nft.metadata.attributes.map((attr, index) => (
                      <span 
                        key={index}
                        className="bg-indigo-600/20 text-indigo-300 text-xs px-3 py-1 rounded-full font-medium border border-indigo-500/30"
                      >
                        {attr.trait_type}: {attr.value}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <a 
                  href={`https://amoy.polygonscan.com/token/0x3Ff6B7E04aF1aB1ab67489F7FBCD6b1409b022F3?a=${nft.tokenId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors bg-indigo-600/10 px-3 py-2 rounded-lg hover:bg-indigo-600/20 border border-indigo-500/30"
                >
                  <span>View on PolygonScan</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Testnet</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
