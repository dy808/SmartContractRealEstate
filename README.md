# SmartContractRealEstate
This set of smart contracts represents real estate as NFT (mint) and buying/selling this NFT.
mint smart contract imports ERC721 Open Zeppeling contracts and has an additional function to mint NFT.
mint NFT function has two inputs; address and tokenURI. I would suggest that address is the owner's address always and unique tokenURI is the real estate address.
This way when NFT is minted owner will have this NFT for this real estate with specific address.
The way to buy sell NFT is something to further discuss but I Would suggest using supply chain smart contract I have here two connect this mint.sol smart contrac with contracts in 
Supply Chain repository.