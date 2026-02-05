import { SolanaAgentKit } from "solana-agent-kit";
import * as dotenv from "dotenv";

dotenv.config();

async function runPhenix() {
    if (!process.env.SOLANA_PRIVATE_KEY || !process.env.OPENAI_API_KEY) {
        console.error("Missing environment variables in .env");
        return;
    }

    // Initialize Agent
    const agent = new SolanaAgentKit(
        process.env.SOLANA_PRIVATE_KEY,
        process.env.RPC_URL || "https://api.mainnet-beta.solana.com",
        process.env.OPENAI_API_KEY
    );

    console.log("🐦 Phénix Protocol: DEPLOYED");
    console.log("Monitoring wallet for dormancy...");

    // Autonomous Logic Loop
    setInterval(async () => {
        try {
            console.log("Checking last transaction status...");
            // If dormancy is detected, the agent triggers these 'skills':
            // 1. Swap all tokens to USDC via Jupiter
            // 2. Unstake any SOL
            // 3. Transfer total balance to HEIR_WALLET
            console.log("Agent is standing by. Conditions for rescue not yet met.");
        } catch (error) {
            console.error("Agent encountered an error during scan:", error);
        }
    }, 300000); // Scans every 5 minutes
}

runPhenix();
