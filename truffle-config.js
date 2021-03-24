const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
let PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1", // Localhost (default: none)
			port: 8545, // Standard Ethereum port (default: none)
			network_id: "*", // Any network (default: none)
		},
		matic: {
			provider: () =>
				// new PrivateKeyProvider(
				// 	"27860dc26ed8c8279450dd8368e4d582c91b49893b04f9f84fc5c854c486b290",
				// 	`https://rpc-mumbai.matic.today`
				// ),
				new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
			network_id: 80001,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
		},
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		// timeout: 100000
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: "0.6.6",
		},
	},
};
