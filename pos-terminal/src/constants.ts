export const chainConfig = {
  mode: {
    name: "Mode",
    vaultFactory: "0xCE2E5022982F3f3E11D199eae5A59de1371748f5",
    posTerminal: "0x473C35c466506c0e235620F348f7F199182489A7",
    rpc: "https://sepolia.mode.network",
    usdc: "0xEc61D69964004EAa23Ab76c721824650B9276E0a",
    usdt: "0xCB87fcb41b60136ED2E414252AEE05b5dC539aB2",
    router: "0x5951479fE3235b689E392E9BC6E968CE10637A52",
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
