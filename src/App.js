import React, { useState, useEffect } from "react";

// Mock API data (replace with real API in production)
const mockBlockchainData = {
  totalBlocks: 1000000,
  totalTransactions: 50000000,
  wallets: [
    { address: "0x123...abc", balance: "10 ETH" },
    { address: "0x456...def", balance: "5.4 ETH" },
  ],
  recentTransactions: [
    { hash: "0xaaa...111", from: "0x123...abc", to: "0x789...ghi", value: "2 ETH" },
    { hash: "0xbbb...222", from: "0x456...def", to: "0x987...jkl", value: "1.5 ETH" },
  ],
};

// Dashboard Component
function BlockchainDashboard() {
  const [blockchainData, setBlockchainData] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = () => {
      setTimeout(() => {
        setBlockchainData(mockBlockchainData);
      }, 1000);
    };
    fetchData();
  }, []);

  if (!blockchainData) {
    return <p>Loading...</p>;
  }

  const { totalBlocks, totalTransactions, wallets, recentTransactions } = blockchainData;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blockchain Dashboard</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>Blockchain Stats</h2>
        <p><strong>Total Blocks:</strong> {totalBlocks}</p>
        <p><strong>Total Transactions:</strong> {totalTransactions}</p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h2>Wallet Balances</h2>
        <ul>
          {wallets.map((wallet, index) => (
            <li key={index}>
              <strong>Address:</strong> {wallet.address} - <strong>Balance:</strong> {wallet.balance}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Recent Transactions</h2>
        <ul>
          {recentTransactions.map((transaction, index) => (
            <li key={index}>
              <strong>Hash:</strong> {transaction.hash} - <strong>From:</strong> {transaction.from} - <strong>To:</strong> {transaction.to} - <strong>Value:</strong> {transaction.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <BlockchainDashboard />
    </div>
  );
}

export default App;
