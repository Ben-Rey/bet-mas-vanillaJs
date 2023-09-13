import { providers } from "@massalabs/wallet-provider";
import { ClientFactory } from "@massalabs/massa-web3";

export async function initializeClient() {
  let provider = (await providers(true, 10000))[0];

  let accounts = await provider.accounts();

  if (accounts.length === 0) {
    throw new Error("No accounts found");
  }

  const account = accounts[0];

  if (!account || !provider) {
    throw new Error("No account or provider found");
  }

  return await ClientFactory.fromWalletProvider(provider, account);
}
