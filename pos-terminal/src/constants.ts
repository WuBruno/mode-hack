export const chainConfig = {
  // celo: {
  //   name: "Celo Alfajores",
  //   rpc: "https://alfajores-forno.celo-testnet.org",
  //   usdc: "0xAcB587E637A19fFef12c0aaDcEEDc66c3dc00276",
  //   usdt: "0xC6A9e61B0ea521e7014EF00317522925D01bC75c",
  //   vaultFactory: "0xF5F744699a657F25C177a2582aEcC1d14b138412",
  //   router: "0x56D495d08F2214ad32946Ef3D54F7147a6496852",
  //   posTerminal: "0x8586FeB89B7c86D34fFB9543C1E0EbD3acb13287",
  //   blockExplorer: "https://alfajores.celoscan.io/tx/",
  // },
  // scroll: {
  //   name: "Scroll Sepolia",
  //   rpc: "https://scroll-sepolia.blockpi.network/v1/rpc/public",
  //   usdc: "0x692345f94C6133186f6CfE10f94aDA8CfC4D70a4",
  //   usdt: "0xCE2E5022982F3f3E11D199eae5A59de1371748f5",
  //   vaultFactory: "0x5270bfC224357Cbf7EB76C8fbBb5D49fD4b86934",
  //   router: "0x5292C1048a53A9Bcc0DA0d3bC97FBF825F459eA3",
  //   posTerminal: "0xb9930F1673566F31ABEF9DfA042aA8cA19CAfe2b",
  //   blockExplorer: "https://sepolia.scrollscan.dev/tx/",
  // },
  // xdc: {
  //   name: "XDC Apothem",
  //   rpc: "https://erpc.apothem.network",
  //   usdc: "0x473C35c466506c0e235620F348f7F199182489A7",
  //   usdt: "0x17772f3B7367B0dEf7e5F6458790437B5d881005",
  //   vaultFactory: "0xE6BF59A265E37992E2E3F97335144DD45B5cde46",
  //   router: "0x7E61dEC19F09D42a07DE53428F283163363e954a",
  //   posTerminal: "0xF5F744699a657F25C177a2582aEcC1d14b138412",
  //   blockExplorer: "https://explorer.apothem.network/txs/",
  // },
  // gnosis: {
  //   name: "Gnosis Chiado",
  //   rpc: "https://rpc.chiadochain.net",
  //   usdc: "0x692345f94C6133186f6CfE10f94aDA8CfC4D70a4",
  //   usdt: "0xCE2E5022982F3f3E11D199eae5A59de1371748f5",
  //   vaultFactory: "0x5270bfC224357Cbf7EB76C8fbBb5D49fD4b86934",
  //   router: "0x5292C1048a53A9Bcc0DA0d3bC97FBF825F459eA3",
  //   posTerminal: "0x4CA8E42c9483dF5421c1d9b3d5794acDBF18f923",
  //   blockExplorer: "https://blockscout.chiadochain.net/tx/",
  // },
  // arbitrum: {
  //   name: "Arbitrum Goerli",
  //   rpc: "https://goerli-rollup.arbitrum.io/rpc",
  //   usdc: "0x692345f94C6133186f6CfE10f94aDA8CfC4D70a4",
  //   usdt: "0xCE2E5022982F3f3E11D199eae5A59de1371748f5",
  //   vaultFactory: "0x5270bfC224357Cbf7EB76C8fbBb5D49fD4b86934",
  //   router: "0x5292C1048a53A9Bcc0DA0d3bC97FBF825F459eA3",
  //   posTerminal: "0x6e20fb06d22D122092a65aF537b4f9B6dAB27e00",
  //   blockExplorer: "https://goerli.arbiscan.io/tx/",
  // },
  // base: {
  //   name: "Base Goerli",
  //   rpc: "https://base-goerli.diamondswap.org/rpc",
  //   usdc: "0xa800c6f5Ab405189093FC833f2EB1b0d94b66F88",
  //   usdt: "0xcA4688d3F32aaf26C1Fa560EB3a7CEB3C16857D1",
  //   vaultFactory: "0x5815Dce3FC86524230Fc35fD239A1a59D3Ea8C25",
  //   router: "0xF05b66ef8b41cF144B7a2E6a68f8a3eb359B6D71",
  //   posTerminal: "0x02976a09f6DEC503Fb7d512fa7F877FB834BE81E",
  //   blockExplorer: "https://goerli.basescan.org/tx/",
  // },
  // mantle: {
  //   name: "Mantle Testnet",
  //   rpc: "https://rpc.testnet.mantle.xyz",
  //   usdc: "0x692345f94C6133186f6CfE10f94aDA8CfC4D70a4",
  //   usdt: "0xCE2E5022982F3f3E11D199eae5A59de1371748f5",
  //   vaultFactory: "0x5270bfC224357Cbf7EB76C8fbBb5D49fD4b86934",
  //   router: "0x5292C1048a53A9Bcc0DA0d3bC97FBF825F459eA3",
  //   posTerminal: "0xEc61D69964004EAa23Ab76c721824650B9276E0a",
  //   blockExplorer: "https://testnet.mantlescan.org/tx/",
  // },
  // linea: {
  //   name: "Linea Testnet",
  //   rpc: "https://rpc.goerli.linea.build",
  //   usdc: "0x692345f94C6133186f6CfE10f94aDA8CfC4D70a4",
  //   usdt: "0xCE2E5022982F3f3E11D199eae5A59de1371748f5",
  //   vaultFactory: "0x5270bfC224357Cbf7EB76C8fbBb5D49fD4b86934",
  //   router: "0x5292C1048a53A9Bcc0DA0d3bC97FBF825F459eA3",
  //   posTerminal: "0xEc61D69964004EAa23Ab76c721824650B9276E0a",
  //   blockExplorer: "https://goerli.lineascan.build/tx/",
  // },
  // polygonzk: {
  //   name: "Polygon ZK",
  //   vaultFactory: "0x4CA8E42c9483dF5421c1d9b3d5794acDBF18f923",
  //   posTerminal: "0x90d11D11b1542A3996643E3c3D65a801c7773221",
  //   rpc: "https://rpc.public.zkevm-test.net",
  //   usdc: "0xAcB587E637A19fFef12c0aaDcEEDc66c3dc00276",
  //   usdt: "0xC6A9e61B0ea521e7014EF00317522925D01bC75c",
  //   router: "0x56D495d08F2214ad32946Ef3D54F7147a6496852",
  //   blockExplorer: "https://testnet-zkevm.polygonscan.com/tx/",
  // },
  // sepolia: {
  //   name: "Sepolia",
  //   vaultFactory: "0x576cfd493aB3dB2ED06b107be2f1ec172f45f3BE",
  //   posTerminal: "0xE6BF59A265E37992E2E3F97335144DD45B5cde46",
  //   rpc: "https://eth-sepolia.g.alchemy.com/v2/ym8vTI5_vsPLYv0oWQAXQ7dFvGyyWwgP",
  //   usdc: "0xEbCC972B6B3eB15C0592BE1871838963d0B94278",
  //   usdt: "",
  //   router: "",
  //   blockExplorer: "https://sepolia.etherscan.io/tx/",
  // },
  klatyn: {
    name: "Klatyn",
    vaultFactory: "0x6e20fb06d22D122092a65aF537b4f9B6dAB27e00",
    posTerminal: "0xF5F744699a657F25C177a2582aEcC1d14b138412",
    rpc: "https://klaytn-baobab.blockpi.network/v1/rpc/public",
    usdc: "0xE6BF59A265E37992E2E3F97335144DD45B5cde46",
    usdt: "0x576cfd493aB3dB2ED06b107be2f1ec172f45f3BE",
    router: "0x53778575032262c677eda0DDa29608CAdbDcD75b",
    blockExplorer: "https://baobab.scope.klaytn.com/tx/",
  },
} as Record<
  // | "celo"
  // | "scroll"
  // | "xdc"
  // | "gnosis"
  // | "arbitrum"
  // | "base"
  // | "mantle"
  // | "linea"
  // | "polygonzk"
  // | "sepolia"
  "klatyn",
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
