const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
	console.log(deployer, deployer.deploy, deployer.deploy.toString);
	deployer.deploy(Migrations);
};
