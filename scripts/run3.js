// Se ejecuta npx hardhat run scripts/run3.js
// Se ejecuta npx hardhat run scripts/run3.js --network mumbai
// 
// Ejemplo de como hacer un retiro a la owner wallet 

const main = async () => {
  const owner = await hre.ethers.getSigner();
  const domainContractFactory = await hre.ethers.getContractFactory('Domains', '0x77CC0A0F115a086Bff81575F2758A42B1ccD128f');
  // const domainContract = await domainContractFactory.deploy("biker");
  // await domainContract.deployed();

  console.log("Contract owner:", owner.address);
  // console.log("objeto:", domainContractFactory);

  // How much money is in here?
  const balance = await hre.ethers.provider.getBalance('0x77CC0A0F115a086Bff81575F2758A42B1ccD128f');
  console.log("Contract before balance:", hre.ethers.utils.formatEther(balance));
	



  // Quick! Grab the funds from the contract! (as superCoder)
  try {
    txn = await domainContractFactory.withdraw();
    await txn.wait();
  } catch(error){
    console.log("Could not rob contract");
  }

	// How much money is in here?
	const balance2 = await hre.ethers.provider.getBalance('0x77CC0A0F115a086Bff81575F2758A42B1ccD128f');
	console.log("Contract after balance:", hre.ethers.utils.formatEther(balance2));
	
  // console.log("Contract balance after withdrawal:", hre.ethers.utils.formatEther(contractBalance));
  // console.log("Balance of owner after withdrawal:", hre.ethers.utils.formatEther(ownerBalance));
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