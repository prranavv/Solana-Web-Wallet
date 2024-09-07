import { useState } from 'react'
import './App.css'
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import SolanaWallet from './components/SolanaWallet';

function App() {
  const [mneumonic,setmneumoic] = useState("")
  const generatemneumonic = ()=>{
    const mn = generateMnemonic()
    setmneumoic(mn)
    console.log(mneumonic);
  }
  
  return (
    <>
      <h1>Wallet Adaptor</h1>
      <button onClick={generatemneumonic}>Create Seed Phrase</button>
      <input type="text" value={mneumonic}></input>
      <SolanaWallet mneumonic={mneumonic} />
    </>
  )
}

export default App
