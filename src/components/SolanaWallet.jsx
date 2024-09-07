import React from 'react'
import { useState } from 'react'
import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import nacl from 'tweetnacl'

function SolanaWallet({mneumonic}) {
    const [currentIndex,setCurrentIndex] = useState(0)
    const [publickeys,setPublickeys] = useState([])
    return (
    <div>
        <button onClick={async function(){
            console.log(mneumonic);
            
            const seed =await mnemonicToSeed(mneumonic)
            const path = `m/44'/501'/${currentIndex}'/0'`
            const derivedSeed = derivePath(path,seed.toString("hex")).key
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
            const keypair = Keypair.fromSecretKey(secret)
            setCurrentIndex(currentIndex+1)
            setPublickeys([...publickeys,keypair.publicKey]) 
        }}>
            Add Sol Wallet
        </button>
        {publickeys.map((p)=><div>
            {p.toBase58()}
            </div>)}
        
    </div>
  )
}

export default SolanaWallet