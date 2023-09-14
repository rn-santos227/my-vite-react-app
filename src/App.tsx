
import { ChangeEvent, useState } from "react";
import './App.css'

import { trasnferSolana } from "./backend/solana.ts";

function App() {
  const [pubKey, setPubKey] = useState("");
  const [privKey, setPrivKey] = useState("");
  const [amount, setAmount] = useState(0);

  const handlePubKey = (e: ChangeEvent<HTMLInputElement>) => {
    setPubKey(e.target.value);
  }
  const handlePrivKey = (e: ChangeEvent<HTMLInputElement>) => {
    setPrivKey(e.target.value);
  }
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  }
  const handleTransferSolana = () => {
    trasnferSolana(pubKey, privKey, amount);
  }
  return (
    <>
      <div>
        <div>
          <input type="text" value={pubKey} onChange={handlePubKey}></input>
        </div>
        <div>
          <input type="text" value={privKey} onChange={handlePrivKey}></input>
        </div>
        <div>
          <input type="number" value={amount} onChange={handleAmountChange}></input>
        </div>
        <button onClick={handleTransferSolana}>Transfer</button>
      </div>
    </>
  )
}

export default App
