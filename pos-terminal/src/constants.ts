export const chainConfig = {
  mode: {
    name: "Mode",
    vaultFactory: "0xCE2E5022982F3f3E11D199eae5A59de1371748f5",
    posTerminal: "0x473C35c466506c0e235620F348f7F199182489A7",
    rpc: "https://sepolia.mode.network",
    usdc: "", // TODO
    usdt: "", // TODO
    router: "", // TODO
    blockExplorer: "https://sepolia.explorer.mode.network/tx/",
  },
} as Record<
  "mode",
  {
    name: string;
    rpc: string;
    usdc: string;
    usdt: string;
    vaultFactory: string;
    router: string;
    posTerminal: string;
    blockExplorer: string;
  }
>;

export type Chains = keyof typeof chainConfig;
