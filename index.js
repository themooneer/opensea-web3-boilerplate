const Web3 = require("web3");
const { OpenSeaPort, Network } = require("opensea-js");

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io");

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
});

seaport.api
  .getAssets({
    order_direction: "desc",
    offset: "0",
    limit: "20",
  })
  .then((resp) => console.log(JSON.stringify(resp, null, 4)))
  .catch((err) => console.error(err));
