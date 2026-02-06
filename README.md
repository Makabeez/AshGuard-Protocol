# 🐦 AshGuard Protocol: Autonomous Dead Man's Switch for Solana

## 💡 Overview
AshGuard Protocol is an AI-driven autonomous executor designed to solve the problem of digital asset inheritance and recovery on Solana. If a user's wallet remains inactive for a set period, the Phénix agent independently executes a rescue protocol to secure and transfer assets.

## 🚀 Key Features
- **Intelligent Monitoring:** Analyzes on-chain activity to distinguish between long-term holding and wallet abandonment.
- **Autonomous Liquidation:** Automatically unstakes SOL and harvests rewards using the `skill.md` standard.
- **Smart Consolidation:** Swaps all SPL tokens to $USDC via Jupiter to protect heirs from market volatility.
- **Verified Disbursement:** Securely transfers the final balance to a pre-authorized beneficiary wallet.

## 🛠️ Technology Stack
- **Framework:** [Solana Agent Kit](https://github.com/sendaifun/solana-agent-kit)
- **AI Core:** OpenAI GPT-4o for autonomous decision-making.
- **Blockchain:** Solana (Mainnet/Devnet)
- **Interoperability:** Compliant with Colosseum's `skill.md` for Agent-to-Agent interactions.

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Makabeez/phenix-protocol.git](https://github.com/Makabeez/phenix-protocol.git)
   cd phenix-protocol
