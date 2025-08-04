# BoosterB NFT Marketplace 🎨

A modern  NFT marketplace showcasing AI-generated digital art on the Polygon Amoy testnet. Features a sleek dark theme with glass morphism design and seamless blockchain integration.

## ✨ Features

### 🎯 Core Functionality
- **MetaMask Integration** - Seamless wallet connection and network switching
- **NFT Showcase** - Display owned NFTs with metadata from IPFS
- **Smart Contract Interaction** - Direct blockchain communication
- **Responsive Design** - Works perfectly on all devices

### 🎨 Design Highlights
- **Glass Morphism** - Subtle transparency and backdrop blur effects
- **Smooth Animations** - Engaging hover effects and transitions
- **Modern Typography** - Clean, readable Geist Sans font family

### 🔗 Blockchain Features
- **Polygon Amoy Testnet** - Fast, eco-friendly transactions
- **IPFS Integration** - Decentralized metadata storage
- **ERC-721 Compatible** - Standard NFT protocol support
- **Network Auto-Detection** - Automatic network switching prompts

## 🚀 Tech Stack

### Frontend
- **Next.js 15.4.5** - React framework with Turbopack
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Ethers.js 6** - Ethereum library for blockchain interaction

### Blockchain
- **Hardhat** - Development environment
- **Solidity** - Smart contract programming
- **Polygon Amoy** - Layer 2 testnet
- **IPFS** - Decentralized file storage

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MetaMask browser extension
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/nftaimarketplace.git
cd nftaimarketplace
```

### 2. Install Dependencies
```bash
# Install root dependencies (Hardhat)
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
AMOY_RPC_URL=https://rpc-amoy.polygon.technology/
PRIVATE_KEY=your_private_key_here
POLYGONSCAN_API_KEY=your_polygonscan_api_key
```

### 4. Smart Contract Deployment
```bash
# Compile contracts
npx hardhat compile

# Deploy to Amoy testnet
npx hardhat run scripts/deploy.js --network amoy
```

### 5. Start Development Server
```bash
# Start frontend
cd frontend
npm run dev
```

Visit `http://localhost:3000` to see your marketplace!

## 📁 Project Structure

```
nftaimarketplace/
├── contracts/              # Solidity smart contracts
│   └── MyNFT.sol          # Main NFT contract
├── frontend/              # Next.js application
│   ├── src/app/
│   │   ├── components/    # React components
│   │   │   ├── NFTDisplay.tsx
│   │   │   └── ShowcaseNFT.tsx
│   │   ├── contracts/     # Contract ABIs
│   │   ├── utils/         # Utility functions
│   │   ├── globals.css    # Global styles
│   │   └── page.tsx       # Main page component
│   └── package.json
├── scripts/               # Deployment scripts
├── test/                  # Contract tests
├── hardhat.config.ts      # Hardhat configuration
└── package.json           # Root dependencies
```

## 🎨 Design System

### Color Palette
- **Background**: `#0a0a0a` (Pure black)
- **Foreground**: `#ffffff` (White)
- **Primary**: `#4f46e5` (Indigo)
- **Accent**: `#818cf8` (Light indigo)
- **Glass**: `rgba(255, 255, 255, 0.05)` with backdrop blur

### Components
- **Glass Cards** - Translucent containers with blur effects
- **Gradient Text** - Eye-catching hero titles
- **Smooth Transitions** - 300ms duration animations
- **Hover Effects** - Scale transforms and color changes

## 🔧 Smart Contract Details

### MyNFT Contract
- **Network**: Polygon Amoy Testnet
- **Standard**: ERC-721
- **Features**: Mintable, Metadata URI support
- **Verified**: On PolygonScan

### Contract Address
```
0x3Ff6B7E04aF1aB1ab67489F7FBCD6b1409b022F3
```

## 🌐 Live Demo

**Contract**: [Amoy PolygonScan Link](https://amoy.polygonscan.com/address/0x3Ff6B7E04aF1aB1ab67489F7FBCD6b1409b022F3)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Polygon** - Layer 2 scaling solution
- **OpenZeppelin** - Secure smart contract libraries
- **Next.js Team** - Amazing React framework

---

**Built with ❤️ by BoosterB**

*Showcasing the future of digital art and blockchain technology*
