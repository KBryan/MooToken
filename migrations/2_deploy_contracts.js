var MooToken = artifacts.require("./MooToken.sol");

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    try {
      const ownerAddress = accounts[0];
      await deployer.deploy(MooToken, "Moo Token", "MOOMOO", ownerAddress, '100000000000000000000');
    } catch (err) {
      console.log(('Failed to Deploy Contracts', err))
    }
  })

}