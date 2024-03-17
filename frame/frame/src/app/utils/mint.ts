import { createWalletClient, http, createPublicClient, Abi } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import contractAbi from "./contract.json";

// TODO: Use a proper account when ready to use NFT smart contracts
// const account = privateKeyToAccount((process.env.PRIVATE_KEY as `0x`) || "");
const account = "" as '0x';

export const publicClient = createPublicClient({
  // chain: baseSepolia,
  transport: http(process.env.ALCHEMY_URL),
});

const walletClient = createWalletClient({
  account,
  // chain: baseSepolia,
  transport: http(process.env.ALCHEMY_URL),
});

export async function mintNft(userAddress: string, nftSmartContractAddress: string) {
  try {
    const { request }: any = await publicClient.simulateContract({
      account,
      address: nftSmartContractAddress as `0x`,
      abi: contractAbi.output.abi as unknown as Abi, // FIXME: Need the ABI of the campaign NFT's smart contract here
      functionName: "mint",
      args: [userAddress, 0, 1, `0x`],
    });
    const transaction = await walletClient.writeContract(request);
    return transaction;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function balanceOf(userAddress: string, nftSmartContractAddress: string) {
  try {
    const balanceData = await publicClient.readContract({
      address: nftSmartContractAddress as `0x`,
      abi: contractAbi.output.abi as unknown as Abi, // FIXME: Need the ABI of the campaign NFT's smart contract here
      functionName: "balanceOf",
      args: [userAddress as `0x`, 0]
    });
    const balance: number = Number(balanceData)
    return balance
  } catch (error) {
    console.log(error);
    return error;
  }
}
