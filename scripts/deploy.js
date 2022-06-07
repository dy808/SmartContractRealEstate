
const main = async () => {
    const MarketContractFactory = await hre.ethers.getContractFactory("RealEstateMarket");
    const marketContract = await MarketContractFactory.deploy();
    await marketContract.deployed();
    console.log("Market Contract deployed to:" , marketContract.address)

    const RealEstateContractFactory = await hre.ethers.getContractFactory('Mint');
    const realEstateContract = await RealEstateContractFactory.deploy(marketContract.address);
    await realEstateContract.deployed();
    console.log("Real estate NFT deployed to:", realEstateContract.address)
    
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.getMaxListeners(1)
    }
}

runMain();