// 1. Import dependencies using TypeScript module syntax
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

// 2. Load environment variables from a .env file (if needed)
dotenv.config();

// 3. Define the type for whitelist entries
type WhitelistEntry = {
  wallet: string;   // always required
  email?: string;   // optional (can be left out)
};

// 4. Create the whitelist array with explicit types—safe for beginners!
const whitelist: WhitelistEntry[] = [];

// 5. Initialize Express application
const app = express();
app.use(express.json());

// 6. Enable CORS only for your frontend's development URL
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// 7. POST endpoint: add an entry to the whitelist array
app.post("/api/whitelist", (req: Request, res: Response) => {
  const { wallet, email } = req.body;
  if (!wallet) return res.status(400).json({ error: "Wallet required" });
  whitelist.push({ wallet, email });
  res.status(201).json({ added: true });
});

// 8. GET endpoint: fetch all whitelist entries (admin only in future)
app.get("/api/whitelist", (req: Request, res: Response) => {
  res.json(whitelist);
});

// 9. Start the server on port 4000 (or from .env if set)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
