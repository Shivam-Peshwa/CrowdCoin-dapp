# 🪙 CrowdCoin DApp

A decentralized crowdfunding platform built on Ethereum using Solidity and a React + Next.js frontend. CrowdCoin empowers users to create campaigns, contribute ETH, and vote on how the funds are spent — all transparently on-chain.

> Built by [Shivam-Peshwa](https://github.com/Shivam-Peshwa)

---

## 🚀 Features

- 🏗️ **Create Campaigns**  
  Launch your own fundraising campaigns — each deployed as a unique smart contract.

- 💸 **Contribute ETH & Become Approver**  
  Users can donate Ether to any campaign. Donors are granted rights to approve or reject fund spending requests.

- ✅ **Decentralized Approval System**  
  The campaign manager must submit spending requests, which are only executed after a majority of donors approve them.

- 📤 **Fund Finalization**  
  Once a request receives enough approvals, it can be finalized — instantly transferring ETH to the intended recipient.

- 🔐 **Built on Sepolia Testnet**  
  All contracts are deployed on Ethereum’s Sepolia test network for safe public testing and demonstration.

---

## 🧱 Tech Stack

| Layer        | Tech                     |
|--------------|--------------------------|
| Smart Contracts | Solidity (via Remix IDE)  |
| Blockchain     | Ethereum (Sepolia Testnet) |
| Frontend       | React + Next.js          |
| Web3 Interface | Web3.js                  |
| UI Framework   | Semantic UI React        |

---

## 🖼️ Screenshots

### 📋 Campaign List
![Campaign List](./screenshots/campaign-list.png)

### 📊 Campaign Details
![Campaign Details](./screenshots/campaign-details.png)

### 📄 Spending Requests
![Requests Page](./screenshots/requests.png)

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Shivam-Peshwa/CrowdCoin-dapp.git
cd CrowdCoin-dapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

---

## 📁 Project Structure

```
CrowdCoin-dapp/
├── ethereum/        # Contract interfaces & web3 config
├── pages/           # Next.js pages (routes)
├── components/      # Reusable UI components
├── contracts/
│   └── Campaign.sol # Contains both Campaign and CampaignFactory contracts
├── public/          # Static assets
└── README.md
```

---

## 📜 Smart Contracts

All logic is contained within a single `Campaign.sol` file, which includes:

- `CampaignFactory`: deploys and tracks individual campaigns
- `Campaign`: handles contributions, request creation, approvals, and finalization

Deployed via **Remix IDE** and connected to **Sepolia Testnet** using MetaMask.

---

## ✅ Future Improvements

- Campaign images & descriptions stored on IPFS
- ENS support for readable campaign addresses
- Mobile-first design improvements
- Transaction history and activity logs
- Wallet notifications for real-time updates

---

## 👨‍💻 Author

**Shivam-Peshwa**  
GitHub: [@Shivam-Peshwa](https://github.com/Shivam-Peshwa)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

