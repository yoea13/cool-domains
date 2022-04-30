// Se ejecuta npx hardhat run scripts/run.js

const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  const domainContract = await domainContractFactory.deploy("biker");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  // We're passing in a second variable - value. This is the moneyyyyyyyyyy
  let txn = await domainContract.register("yoea13",  {value: hre.ethers.utils.parseEther('0.1')});
  await txn.wait();

  let txn2 = await domainContract.register("banana",  {value: hre.ethers.utils.parseEther('0.1')});
  await txn2.wait();

  let txn3 = await domainContract.register("pepino",  {value: hre.ethers.utils.parseEther('0.1')});
  await txn3.wait();

  const address = await domainContract.getAddress("yoea13");
  console.log("Owner of domain yoea13:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));

  let names = await domainContract.getAllNames();
  // console.log("Minteados:", names);


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