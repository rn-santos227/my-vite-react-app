// import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";
// import base58 from "bs58";

// export const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// const decoded = base58.decode(import.meta.env.VITE_APP_PRIVATE_KEY);
// export const payer = Keypair.fromSecretKey(decoded);

export async function trasnferSolana(address_from: string, address_to: string, amount : number): Promise<void> {
    console.log(`${address_from} -> ${address_to} send amount: ${amount}`);
}