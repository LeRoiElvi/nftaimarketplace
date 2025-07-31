import { ethers } from "ethers";
import MyNFT from "../contracts/MyNFT.json";

export async function connectContract() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contractAddress = "0x3Ff6B7E04aF1aB1ab67489F7FBCD6b1409b022F3"; 
      const contract = new ethers.Contract(contractAddress, MyNFT, signer);

      return contract;
    } catch (error) {
      console.error("Error connecting to contract:", error);
      throw error;
    }
  } else {
    console.error("Metamask is not installed!");
    throw new Error("MetaMask not installed");
  }
}
