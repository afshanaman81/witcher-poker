const RandomNumberConsumer = artifacts.require("RandomNumberConsumer");
// const WitcherPoker = artifacts.require("WitcherPoker");
// const GameToken = artifacts.require("GameToken")

module.exports = function (deployer) {
	deployer.deploy(RandomNumberConsumer);
	// deployer.link(ConvertLib, WitcherPoker);
	// deployer.deploy(GameToken)
	// deployer.deploy(WitcherPoker);
};
