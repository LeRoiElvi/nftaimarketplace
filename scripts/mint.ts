import { ethers } from "hardhat";

// ENTER YOUR VALUES BELOW
const CONTRACT_ADDRESS = "0x3Ff6B7E04aF1aB1ab67489F7FBCD6b1409b022F3";
const RECIPIENT = "0x8b1966D03D7da26D4aCa179a2a4701559e682615"; // Your MetaMask address
const TOKEN_URI = "ipfs://bafkreigj2akjkpujjectmhsu5whcn5vqek47zohqgmadlcjxopra2pvdfq";

async function main() {
  const [minter] = await ethers.getSigners();
  console.log("Signer address:", minter.address);

  // Double-check contract factory name matches actual Solidity contract name!
  const MyNFT = await ethers.getContractFactory("MyNFT"); // Ensure "MyNFT" matches your contract name
  const myNFT = MyNFT.attach(CONTRACT_ADDRESS) as any; // Cast to 'any' to bypass type error if ABI is correct

  // Mint NFT
  const tx = await myNFT.safeMint(RECIPIENT, TOKEN_URI);
  console.log("Minting tx sent:", tx.hash);

  const receipt = await tx.wait();
  console.log("Minted! Transaction confirmed in block:", receipt.blockNumber);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
