export enum Network {
  POLYGON_MUMBAI = 'polygon-mumbai',
  POLYGON = 'polygon',
  ETHEREUM_GOERLI = 'ethereum-goerli',
  ETHEREUM = 'ethereum',
  XINFIN_APOTHEM = 'xinfin-apothem',
  STABILITY_TESTNET = 'stability-testnet',
}

export const getNetworkUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.POLYGON:
      return 'https://polygon-rpc.com/';
    case Network.POLYGON_MUMBAI:
      return 'https://rpc-mumbai.maticvigil.com/';
    case Network.ETHEREUM_GOERLI:
      return 'https://eth-goerli.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0';
    case Network.ETHEREUM:
      return 'https://eth-mainnet.g.alchemy.com/v2/fYFybLQFR9Zr2GCRcgALmAktStFKr0i0';
    case Network.XINFIN_APOTHEM:
      return 'https://erpc.apothem.network';
    case Network.STABILITY_TESTNET:
      return 'https://free.testnet.stabilityprotocol.com';
    default:
      throw new Error('Network not supported');
  }
};

export const getChainId = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.POLYGON:
      return 137;
    case Network.POLYGON_MUMBAI:
      return 80001;
    case Network.ETHEREUM_GOERLI:
      return 5;
    case Network.ETHEREUM:
      return 1;
    case Network.XINFIN_APOTHEM:
      return 51;
    case Network.STABILITY_TESTNET:
      return 20180427;
  }
};

export const getNetworkToken = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.POLYGON_MUMBAI:
    case Network.POLYGON:
      return 'MATIC';
    case Network.ETHEREUM:
    case Network.ETHEREUM_GOERLI:
      return 'ETH';
    case Network.XINFIN_APOTHEM:
      return 'XDC';
    case Network.STABILITY_TESTNET:
      return 'FREE';
  }
};

export const getFaucetUrl = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.POLYGON_MUMBAI:
      return 'https://faucet.polygon.technology/';
    case Network.ETHEREUM_GOERLI:
      return 'https://goerlifaucet.com/';
    case Network.XINFIN_APOTHEM:
      return 'https://faucet.apothem.network/';
    case Network.STABILITY_TESTNET:
      return 'https://stability-testnet.blockscout.com/';
  }
};

export const getNetworkName = () => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.POLYGON:
      return 'Polygon (Mainnet)';
    case Network.POLYGON_MUMBAI:
      return 'Polygon (Mumbai)';
    case Network.ETHEREUM_GOERLI:
      return 'Ethereum (Goerli)';
    case Network.ETHEREUM:
      return 'Ethereum (Mainnet)';
    case Network.XINFIN_APOTHEM:
      return 'XinFin (Apothem)';
    case Network.STABILITY_TESTNET:
      return 'Stability Testnet';
  }
};

export const getBlockExplorer = (address: string) => {
  switch (process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK) {
    case Network.POLYGON:
      return `https://polygonscan.com/address/${address}`;
    case Network.POLYGON_MUMBAI:
      return `https://mumbai.polygonscan.com/address/${address}`;
    case Network.ETHEREUM:
      return `https://etherscan.io/address/${address}`;
    case Network.ETHEREUM_GOERLI:
      return `https://goerli.etherscan.io/address/${address}`;
    case Network.XINFIN_APOTHEM:
      return `https://explorer.apothem.network/address/${address}`;
    case Network.STABILITY_TESTNET:
      return `https://stability-testnet.blockscout.com/address/${address}`;
  }
};
