import {
	Transfer,
    Mint,
    Burn
} from '../generated/templates/Pair/Pair';
import { handleEvent } from "./utils/utils";

export function handleTransfer (event: Transfer): void {
    handleEvent(event,"Transfer");
}

export function handleMint (event: Mint): void {
    handleEvent(event,"Mint");
}

export function handleBurn (event: Burn): void {
    handleEvent(event,"Burn");
}
