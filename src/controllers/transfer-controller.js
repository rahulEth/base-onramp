// Import ethers.js
const { ethers } = require("ethers");
require('dotenv').config();

const ABI = require('../utils/ABI');
// Configurations
const providerUrl = process.env.RPC_URL; // e.g., Infura or Alchemy endpoint
const privateKey = process.env.SENDER_PRIVATE_KEY; // Replace with sender's private key
const tokenContractAddress = process.env.USDC_CONTRACT; // Replace with the ERC20 token address

const transferToken = async (req, res) => {
    try {
         const { toAddr, amount} = req.body;
        // Connect to the Ethereum network
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);

        // Create a wallet instance
        const wallet = new ethers.Wallet(privateKey, provider);

        // Convert the amount to the correct format (ensure correct decimals)
        const tokenContract = new ethers.Contract(tokenContractAddress, ABI, wallet);
        const decimals = await tokenContract.decimals(); // Fetch the token decimals dynamically
        const value = ethers.utils.parseUnits(amount, decimals);

        // Send the transaction
        const tx = await tokenContract.transfer(toAddr, value);
        
        console.log("Transaction hash:", tx.hash);

        // Wait for the transaction to be mined
        // const receipt = await tx.wait();
        // console.log("Transaction confirmed in block:", receipt);

        return res.status(200).json(
            {
              status: "success",
              message: "usdc transfer operation successful",
              data: {
                txHash: tx.hash,
                toAddr,
                amount
              }
            }
          );

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ 
          status: "error",
          message: "Internal server error",
          error: {
            code: "INTERNAL_SERVER_ERROR",
            details: err.message
          }
        });
      }
}


module.exports = {transferToken}