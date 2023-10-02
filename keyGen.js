let ethers = require("ethers");
let crypto = require("crypto");

for (let i = 0; i < 5; i++) {
  let key = crypto.randomBytes(32).toString("hex");
  let privateKey = "0x" + key;

  let walletAddress = new ethers.Wallet(privateKey);

  console.log(`Private Key: ${privateKey}`);
  console.log("Address: " + walletAddress.address + "\n");
}
