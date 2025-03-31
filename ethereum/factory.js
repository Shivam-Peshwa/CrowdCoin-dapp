import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x6Fd6f531e9482ae058e91610B6c9a76Fd40c1D1d"
);

export default instance;
