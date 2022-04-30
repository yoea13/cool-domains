// Se ejecuta npx hardhat run scripts/deploy.js --network mumbai

const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  const domainContract = await domainContractFactory.deploy("biker");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
  let txn = await domainContract.register("yoea13",  {value: hre.ethers.utils.parseEther('0.01')});
  await txn.wait();
  console.log("Minted domain yoea13.biker");

  txn = await domainContract.setRecord("yoea13", "I am a biker");
  await txn.wait();
  console.log("Set record for yoea13.biker");

  const address = await domainContract.getAddress("yoea13");
  console.log("Owner of domain yoea:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
