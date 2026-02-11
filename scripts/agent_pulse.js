const { ethers } = require("ethers");

const RAW_ADDRESS = "0x860368940c29f939e09968478441991a570db3fd";
const CONTRACT_ADDRESS = ethers.getAddress(RAW_ADDRESS.toLowerCase()); 
const BURNER_WALLET_PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = "https://testnet-rpc.monad.xyz";

const ABI = [
    "function triggerPulse() public",
    "function lastPulseTimestamp() public view returns (uint256)"
];

async function postToMoltbook(statusMessage) {
    const timestamp = new Date().toISOString();
    console.log(`\n🤖 [MOLTBOOK FEED] | ${timestamp}`);
    console.log(`💬 Message: ${statusMessage}`);
    console.log(`🔗 Proof of Work: ${CONTRACT_ADDRESS}\n`);
}

async function runPulseAgent() {
    if (!BURNER_WALLET_PRIVATE_KEY) {
        console.error("❌ PRIVATE_KEY manquante sur Ubuntu !");
        process.exit(1);
    }
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(BURNER_WALLET_PRIVATE_KEY, provider);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

    console.log("🚀 Monad Pulse démarré sur Ubuntu Natif...");
    setInterval(async () => {
        try {
            const tx = await contract.triggerPulse();
            console.log(`✅ Pulse validé ! Hash: ${tx.hash}`);
            await tx.wait();
            await postToMoltbook("Sentinel Pulse: OK ⚡ | Running on Ubuntu.");
        } catch (error) {
            console.error("❌ Erreur :", error.message);
            await postToMoltbook("⚠️ Échec du Pulse. Vérifiez le solde.");
        }
    }, 30000);
}
runPulseAgent();
