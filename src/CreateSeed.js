import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

function CreateSeed(){
    const mnemonic = generateMnemonic();
    console.log("Generated Mnemonic:", mnemonic);
    const seed = mnemonicToSeedSync(mnemonic);
    console.log(mnemonic);
    return mnemonic
}

export default CreateSeed