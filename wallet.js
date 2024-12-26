// Import ethers library
const { ethers } = require("ethers");

async function createWallet() {
  // Generate a random wallet (a new account with private key)
  const wallet = ethers.Wallet.createRandom();

  // Print the wallet's address, private key, and mnemonic (recovery phrase)
  console.log("Address:", wallet.address);
  console.log("Private Key:", wallet.privateKey);
  console.log("Mnemonic:", wallet.mnemonic.phrase);
}

// Call the function to create the wallet
createWallet();
