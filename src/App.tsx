
import { ChangeEvent, useState } from "react";
import './App.css'

import { trasnferSolana } from "./backend/solana.ts";

function App() {
  // const [items] = useState<Item[]>([
  //   { id: 0, name: "alpha" },
  //   { id: 1, name: "bravo" },
  //   { id: 2, name: "charlie" },
  // ]);

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSender = (e: ChangeEvent<HTMLInputElement>) => {
    setSender(e.target.value);
  }
  const handleReciever = (e: ChangeEvent<HTMLInputElement>) => {
    setReceiver(e.target.value);
  }
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  }
  const handleTransferSolana = () => {
    trasnferSolana(sender, receiver, amount);
  }
  return (
    <>
      <div>
        <div>
          <input type="text" value={sender} onChange={handleSender}></input>
        </div>
        <div>
          <input type="text" value={receiver} onChange={handleReciever}></input>
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
