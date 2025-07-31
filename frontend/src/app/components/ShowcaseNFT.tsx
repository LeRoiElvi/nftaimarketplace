'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

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

const CONTRACT_ADDRESS = "0x3Ff6B7E04aF1aB1ab67489F7FBCD6b1409b022F3";
const YOUR_TOKEN_ID = 0; // Your specific NFT token ID
const AMOY_RPC_URL = "https://rpc-amoy.polygon.technology/";

// Minimal ABI for the functions we need
const MINIMAL_NFT_ABI = [
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function tokenURI(uint256 tokenId) view returns (string)"
];

export default function ShowcaseNFT() {
  const [nft, setNft] = useState<NFT | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNFT();
  }, []);

  async function loadNFT() {
    try {
      setLoading(true);
      console.log('Loading showcase NFT...');
      
      // Create a read-only provider (no wallet needed)
      const provider = new ethers.JsonRpcProvider(AMOY_RPC_URL);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, MINIMAL_NFT_ABI, provider);
      
      console.log(`Loading token ID ${YOUR_TOKEN_ID}...`);
      
      // Get NFT data
      const owner = await contract.ownerOf(YOUR_TOKEN_ID);
      const tokenURI = await contract.tokenURI(YOUR_TOKEN_ID);
      
      console.log(`Token ${YOUR_TOKEN_ID} - Owner: ${owner}, URI: ${tokenURI}`);
      
      const nftData: NFT = {
        tokenId: YOUR_TOKEN_ID,
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
          console.log(`Metadata loaded:`, metadata);
          nftData.metadata = metadata;
        } catch (metadataError) {
          console.error(`Could not fetch metadata:`, metadataError);
        }
      }

      setNft(nftData);
      setError(null);
    } catch (err: any) {
      console.error("Error loading showcase NFT:", err);
      setError(`Failed to load NFT: ${err.message || 'Unknown error'}`);
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

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
        <p className="text-gray-400">Loading featured NFT...</p>
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
          <h3 className="text-xl font-bold text-white mb-2">Error Loading Featured NFT</h3>
          <p className="text-gray-400 mb-6">{error}</p>
        </div>
        <button 
          onClick={loadNFT}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <p className="text-gray-400">NFT not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
        {nft.metadata?.image && (
          <div className="aspect-square overflow-hidden relative">
            <img 
              src={getImageUrl(nft.metadata.image)} 
              alt={nft.metadata.name || `NFT #${nft.tokenId}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
              ✨ Featured
            </div>
            {/* Testnet Badge */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/30">
              Amoy Testnet
            </div>
          </div>
        )}
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-3xl font-bold text-white">
              {nft.metadata?.name || `NFT #${nft.tokenId}`}
            </h3>
            <span className="bg-white/10 text-gray-300 text-sm px-4 py-2 rounded-full font-medium border border-white/20">
              #{nft.tokenId}
            </span>
          </div>
          
          {nft.metadata?.description && (
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              {nft.metadata.description}
            </p>
          )}

          <div className="text-sm text-gray-400 mb-6">
            <p className="font-mono bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="font-semibold text-gray-300">Owner:</span> {nft.owner}
            </p>
          </div>

          {nft.metadata?.attributes && nft.metadata.attributes.length > 0 && (
            <div className="mb-8">
              <h4 className="text-base font-semibold text-gray-300 mb-4">Attributes:</h4>
              <div className="flex flex-wrap gap-3">
                {nft.metadata.attributes.map((attr, index) => (
                  <span 
                    key={index}
                    className="bg-indigo-600/20 text-indigo-300 text-sm px-4 py-2 rounded-full font-medium border border-indigo-500/30"
                  >
                    {attr.trait_type}: {attr.value}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <a 
              href={`https://amoy.polygonscan.com/token/${CONTRACT_ADDRESS}?a=${nft.tokenId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 text-base font-medium transition-colors bg-indigo-600/10 px-6 py-3 rounded-xl hover:bg-indigo-600/20 border border-indigo-500/30"
            >
              <span>View on PolygonScan</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live on Testnet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
