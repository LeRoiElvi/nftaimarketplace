// src/components/WhitelistForm.tsx

import { useState } from "react";

export default function WhitelistForm() {
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handles form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/whitelist`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ wallet, email }),
        }
      );
      const data = await response.json();
      if (response.ok) setMessage("Success! You’re on the whitelist.");
      else setMessage(data.error || "Submission failed.");
    } catch (error) {
      setMessage("Network error. Try again later!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Wallet Address*
        <input
          type="text"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="0x..."
          required
        />
      </label>
      <label>
        Email (optional)
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
        />
      </label>
      <button type="submit">Join Whitelist</button>
      <div>{message}</div>
    </form>
  );
}
