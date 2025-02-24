import { useState } from "react";

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);

  const updateWhitelistOnChain = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/whitelist", { method: "PUT" });
      const data = await response.json();

      if (data.success) {
        alert("✅ Whitelist updated on-chain!");
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("Error updating whitelist:", error);
      alert("❌ Failed to update whitelist!");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={updateWhitelistOnChain} disabled={loading}>
        {loading ? "Updating..." : "Update Whitelist On-Chain"}
      </button>
    </div>
  );
};

export default AdminPanel;
